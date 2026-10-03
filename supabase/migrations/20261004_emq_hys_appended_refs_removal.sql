-- ════════════════════════════════════════════════════════════════════════════
-- EMQ high-yield summaries: remove the appended "📚 Full Reference List"
--
-- 350 EMQ rows (70 sets × 5 scenarios, seven specialties) end their
-- high_yield_summary with "📚  Full Reference List [1] … [n] …": the set's
-- complete numbered reference list, identical for all 5 rows of the set. The
-- same references are (after 20261003_emq_spilled_content_repair.sql) shown in
-- each scenario's References panel — each panel holding the subset belonging to
-- that scenario, with the original set numbering.
--
-- A set is processed only when EVERY entry of its appended list (same number,
-- same text after whitespace/case/trailing-full-stop normalisation) already
-- appears in the References panel of at least one scenario in that set, i.e.
-- removing the list loses no reference. Sets with any reference that appears
-- nowhere else (13 references in 11 sets) are left untouched and reported.
-- Originals are kept in hys_backup_20261004. Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.hys_backup_20261004 (
  question_row_id    integer primary key references public.questions(id) on delete cascade,
  question_id        text not null,
  high_yield_summary text,
  backed_up_at       timestamptz not null default now()
);
alter table public.hys_backup_20261004 enable row level security;
revoke all on public.hys_backup_20261004 from anon, authenticated;

create or replace function public._hys_ref_entries(p_text text)
returns table (num int, norm text)
language sql immutable
as $$
  with n as (select array(select (m)[1]::int from regexp_matches(coalesce(p_text, ''), '(?:^|\s)\[(\d+)\]\s', 'g') m) as nums,
                    regexp_split_to_array(coalesce(p_text, ''), '(?:^|\s)\[\d+\]\s+') as parts)
  select n.nums[i], regexp_replace(lower(regexp_replace(btrim(n.parts[i + 1]), '\s+', ' ', 'g')), '\.$', '')
    from n, generate_series(1, coalesce(array_length(n.nums, 1), 0)) i
   where btrim(n.parts[i + 1]) <> '';
$$;
revoke all on function public._hys_ref_entries(text) from public, anon, authenticated;

create or replace function public._repair_emq_hys_appended_refs()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  s          record;
  q          record;
  v_marker   text;
  v_idx      int;
  v_tail     text;
  v_orphans  jsonb;
  v_sets_done int := 0;
  v_rows      int := 0;
  v_left      jsonb := '[]'::jsonb;
  c_re       constant text := '(\s*(?:📚\s*)?Full Reference List)';
begin
  for s in
    select tutor_content->>'set_id' as set_id
      from questions
     where type = 'EMQ' and tutor_content->>'high_yield_summary' ~* 'Full Reference List'
     group by 1
     order by 1
  loop
    -- the five rows must carry the same appended list
    if (select count(distinct substr(tutor_content->>'high_yield_summary',
                  strpos(tutor_content->>'high_yield_summary', substring(tutor_content->>'high_yield_summary' from c_re))))
          from questions where type = 'EMQ' and tutor_content->>'set_id' = s.set_id) <> 1 then
      v_left := v_left || jsonb_build_object('set', s.set_id, 'reason', 'appended list differs within set');
      continue;
    end if;

    select tutor_content->>'high_yield_summary' into v_tail
      from questions where type = 'EMQ' and tutor_content->>'set_id' = s.set_id order by id limit 1;
    v_marker := substring(v_tail from c_re);
    v_tail   := substr(v_tail, strpos(v_tail, v_marker) + length(v_marker));

    -- appended references that appear in no scenario's References panel
    select coalesce(jsonb_agg(a.num order by a.num), '[]'::jsonb) into v_orphans
      from public._hys_ref_entries(v_tail) a
     where not exists (
       select 1 from questions r, lateral public._hys_ref_entries(r.tutor_content->>'references') e
        where r.type = 'EMQ' and r.tutor_content->>'set_id' = s.set_id
          and e.num = a.num and e.norm = a.norm);

    if jsonb_array_length(v_orphans) > 0 then
      v_left := v_left || jsonb_build_object('set', s.set_id, 'reason', 'references only in appended list', 'orphan_numbers', v_orphans);
      continue;
    end if;

    for q in select id, question_id, tutor_content->>'high_yield_summary' as t
               from questions where type = 'EMQ' and tutor_content->>'set_id' = s.set_id
    loop
      v_marker := substring(q.t from c_re);
      v_idx    := strpos(q.t, v_marker);
      if v_marker is null or v_idx <= 1 then continue; end if;
      insert into hys_backup_20261004 (question_row_id, question_id, high_yield_summary)
      values (q.id, q.question_id, q.t) on conflict do nothing;
      update questions set tutor_content = jsonb_set(tutor_content, '{high_yield_summary}',
             to_jsonb(regexp_replace(left(q.t, v_idx - 1), '\s+$', '')))
       where id = q.id;
      v_rows := v_rows + 1;
    end loop;
    v_sets_done := v_sets_done + 1;
  end loop;

  return jsonb_build_object('sets_cleaned', v_sets_done, 'rows_updated', v_rows, 'sets_left_unchanged', v_left);
end;
$$;
revoke all on function public._repair_emq_hys_appended_refs() from public, anon, authenticated;

select public._repair_emq_hys_appended_refs();
