-- ════════════════════════════════════════════════════════════════════════════
-- EMQ data repair: content spilled into tutor_content.references
--
-- Root cause (import pipeline): for 80 of the 120 EMQ sets, the .docx parser
-- did not stop at the end of scenario 1's references. It captured the full
-- write-up of scenarios 2–5 (marker line, stem, answer tables and — in the
-- Dermatology format — the "Key diagnostic clues" / "Distracting information"
-- sections) into `references`, and copied that same blob to all 5 rows of the
-- set. Meanwhile this_scenario.key_clues / this_scenario.distractors were left
-- empty for every EMQ, so stem highlighting never had data to render, and each
-- scenario's References panel showed other scenarios' answers.
--
-- Two spill formats exist:
--   A  "Scenario N — XXX-EMQ-NNN"  (Dermatology; includes clues/distractors)
--   B  "QN  —  Correct Answer: …"  (7 specialties; stems + answer tables only)
--
-- This migration, for every EMQ set whose references contain such markers:
--   • splits the blob into per-scenario blocks,
--   • maps each block to its row by scenario number (and question_id for A),
--     and ONLY if the block's stem exactly equals that row's stem,
--   • sets that row's references to its own [n] reference lines,
--   • gives scenario 1 the text before the first marker (its real references),
--   • fills this_scenario.key_clues / distractors from the block, only where
--     they are currently empty (never overwrites authored data),
--   • normalises "[n] | text" to the locked "[n]  text" reference format.
-- Originals are kept in emq_tutor_content_backup_20261003. Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.emq_tutor_content_backup_20261003 (
  question_row_id  integer primary key references public.questions(id) on delete cascade,
  tutor_content    jsonb not null,
  backed_up_at     timestamptz not null default now()
);
alter table public.emq_tutor_content_backup_20261003 enable row level security;  -- no policies: admin-only
revoke all on public.emq_tutor_content_backup_20261003 from anon, authenticated;

create or replace function public._repair_emq_spilled_content()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  s            record;
  q            record;
  v_lines      text[];
  v_line       text;
  v_trim       text;
  m            text[];
  v_blocks     jsonb;     -- [{num, qid, lines:[...]}]
  v_pre        text[];
  v_cur        int;
  b            jsonb;
  v_bl         text[];
  v_j          int;
  v_stem       text;
  v_refs       text[];
  v_clues      jsonb;
  v_dists      jsonb;
  v_sec        text;
  v_target     record;
  v_tc         jsonb;
  v_sets       int := 0;
  v_rows       int := 0;
  v_annotated  int := 0;
  v_skipped    jsonb := '[]'::jsonb;
  c_marker     constant text := '^(?:Scenario (\d+) — ([A-Z]+-EMQ-\d+)|Q(\d+)\s+—\s+Correct Answer:.*)$';
begin
  for s in
    select tutor_content->>'set_id' as set_id,
           min(tutor_content->>'references') as refs,
           count(distinct tutor_content->>'references') as n_refs
      from questions
     where type = 'EMQ'
       and tutor_content->>'references' ~ '(^|\n)(Scenario \d+ — [A-Z]+-EMQ-\d+|Q\d+\s+—\s+Correct Answer:)'
     group by 1
  loop
    if s.n_refs <> 1 then
      v_skipped := v_skipped || jsonb_build_object('set', s.set_id, 'reason', 'references differ across set');
      continue;
    end if;

    -- 1. split into preamble + blocks
    v_lines := string_to_array(s.refs, E'\n');
    v_blocks := '[]'::jsonb; v_pre := '{}'; v_cur := -1;
    foreach v_line in array v_lines loop
      v_trim := btrim(v_line);
      m := regexp_match(v_trim, c_marker);
      if m is not null then
        v_blocks := v_blocks || jsonb_build_array(jsonb_build_object(
          'num', coalesce(m[1], m[3])::int, 'qid', m[2], 'lines', '[]'::jsonb));
        v_cur := jsonb_array_length(v_blocks) - 1;
      elsif v_cur < 0 then
        if v_trim <> '' then v_pre := v_pre || regexp_replace(v_trim, '^(\[\d+\])\s*\|\s*', '\1  '); end if;
      else
        v_blocks := jsonb_set(v_blocks, array[v_cur::text, 'lines'],
                              (v_blocks->v_cur->'lines') || to_jsonb(v_line));
      end if;
    end loop;

    if exists (select 1 from unnest(v_pre) p where p !~ '^\[\d+\]') then
      v_skipped := v_skipped || jsonb_build_object('set', s.set_id, 'reason', 'preamble is not reference lines');
      continue;
    end if;
    v_sets := v_sets + 1;

    -- 2. scenarios without a block (scenario 1) get the preamble as references
    for q in
      select id, question_id, tutor_content from questions
       where type = 'EMQ' and tutor_content->>'set_id' = s.set_id
         and not exists (select 1 from jsonb_array_elements(v_blocks) x
                          where (x->>'num')::int = (tutor_content->>'q_num')::int)
    loop
      insert into emq_tutor_content_backup_20261003 (question_row_id, tutor_content)
      values (q.id, q.tutor_content) on conflict do nothing;
      update questions set tutor_content = jsonb_set(tutor_content, '{references}', to_jsonb(array_to_string(v_pre, E'\n')))
       where id = q.id;
      v_rows := v_rows + 1;
    end loop;

    -- 3. each block → its own row
    for b in select * from jsonb_array_elements(v_blocks) loop
      select array_agg(x order by o) into v_bl
        from jsonb_array_elements_text(b->'lines') with ordinality t(x, o);
      v_bl := coalesce(v_bl, '{}');
      v_stem := btrim(coalesce(v_bl[1], ''));

      -- trailing reference lines
      v_j := array_length(v_bl, 1);
      while v_j > 0 and (btrim(v_bl[v_j]) ~ '^\[\d+\]' or btrim(v_bl[v_j]) = '') loop v_j := v_j - 1; end loop;
      select coalesce(array_agg(regexp_replace(btrim(x), '^(\[\d+\])\s*\|\s*', '\1  ') order by o), '{}') into v_refs
        from unnest(v_bl[v_j + 1 : array_length(v_bl, 1)]) with ordinality t(x, o) where btrim(x) <> '';

      -- clue / distractor sections (each entry starts with a quoted phrase)
      v_clues := '[]'::jsonb; v_dists := '[]'::jsonb; v_sec := null;
      for i in 2 .. greatest(v_j, 1) loop
        v_trim := btrim(coalesce(v_bl[i], ''));
        if v_trim = 'Key diagnostic clues' then v_sec := 'c'; continue; end if;
        if v_trim = 'Distracting information' then v_sec := 'd'; continue; end if;
        if v_trim like '📝%' then v_sec := null; continue; end if;
        if v_sec is null or v_trim = '' then continue; end if;
        if left(v_trim, 1) = '"' then
          if v_sec = 'c' then v_clues := v_clues || to_jsonb(v_trim); else v_dists := v_dists || to_jsonb(v_trim); end if;
        elsif v_sec = 'c' and jsonb_array_length(v_clues) > 0 then
          v_clues := jsonb_set(v_clues, array[(jsonb_array_length(v_clues) - 1)::text], to_jsonb((v_clues->>-1) || ' ' || v_trim));
        elsif v_sec = 'd' and jsonb_array_length(v_dists) > 0 then
          v_dists := jsonb_set(v_dists, array[(jsonb_array_length(v_dists) - 1)::text], to_jsonb((v_dists->>-1) || ' ' || v_trim));
        end if;
      end loop;

      select id, question_id, stem, tutor_content into v_target from questions
       where type = 'EMQ' and tutor_content->>'set_id' = s.set_id
         and (tutor_content->>'q_num')::int = (b->>'num')::int;
      if not found then
        v_skipped := v_skipped || jsonb_build_object('set', s.set_id, 'scenario', b->'num', 'reason', 'no row'); continue;
      end if;
      if b->>'qid' is not null and b->>'qid' <> v_target.question_id then
        v_skipped := v_skipped || jsonb_build_object('set', s.set_id, 'scenario', b->'num', 'reason', 'question_id mismatch'); continue;
      end if;
      if v_stem <> btrim(v_target.stem) then
        v_skipped := v_skipped || jsonb_build_object('set', s.set_id, 'scenario', b->'num', 'reason', 'stem mismatch'); continue;
      end if;

      insert into emq_tutor_content_backup_20261003 (question_row_id, tutor_content)
      values (v_target.id, v_target.tutor_content) on conflict do nothing;

      v_tc := jsonb_set(v_target.tutor_content, '{references}', to_jsonb(array_to_string(v_refs, E'\n')));
      if jsonb_array_length(coalesce(v_tc->'this_scenario'->'key_clues', '[]')) = 0 and jsonb_array_length(v_clues) > 0 then
        v_tc := jsonb_set(v_tc, '{this_scenario,key_clues}', v_clues);
      end if;
      if jsonb_array_length(coalesce(v_tc->'this_scenario'->'distractors', '[]')) = 0 and jsonb_array_length(v_dists) > 0 then
        v_tc := jsonb_set(v_tc, '{this_scenario,distractors}', v_dists);
      end if;
      if jsonb_array_length(v_clues) > 0 or jsonb_array_length(v_dists) > 0 then v_annotated := v_annotated + 1; end if;
      update questions set tutor_content = v_tc where id = v_target.id;
      v_rows := v_rows + 1;
    end loop;
  end loop;

  return jsonb_build_object('sets_repaired', v_sets, 'rows_updated', v_rows,
                            'rows_with_recovered_annotations', v_annotated, 'skipped', v_skipped);
end;
$$;
revoke all on function public._repair_emq_spilled_content() from public, anon, authenticated;

select public._repair_emq_spilled_content();
