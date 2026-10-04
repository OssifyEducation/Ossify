-- ════════════════════════════════════════════════════════════════════════════
-- EMQ: move the 13 "orphan" references into the References panels
--
-- After 20261004_emq_hys_appended_refs_removal.sql, 11 EMQ sets (55 rows)
-- still carry the appended "📚 Full Reference List" in high_yield_summary,
-- because 13 of its references appear in no scenario's References panel and
-- the data does not say which scenario they belong to.
--
-- Decision (product owner): add each such reference to the References panel
-- of ALL FIVE scenarios in its set — exactly the references those users
-- already see today — then remove the appended list as for the other sets.
--
-- References are appended as "[n]  text" lines (the existing panel format),
-- keeping their original set number and wording, after the scenario's own
-- lines. A reference already present in a panel is never added twice.
-- Original references are kept in refs_backup_20261004, original summaries in
-- hys_backup_20261004. Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.refs_backup_20261004 (
  question_row_id integer primary key references public.questions(id) on delete cascade,
  question_id     text not null,
  "references"    text,
  backed_up_at    timestamptz not null default now()
);
alter table public.refs_backup_20261004 enable row level security;   -- no policies: admin-only
revoke all on public.refs_backup_20261004 from anon, authenticated;

-- [n] entries with their original text (companion to _hys_ref_entries, which normalises)
create or replace function public._hys_ref_entries_raw(p_text text)
returns table (num int, txt text, norm text)
language sql immutable
as $$
  with n as (select array(select (m)[1]::int from regexp_matches(coalesce(p_text, ''), '(?:^|\s)\[(\d+)\]\s', 'g') m) as nums,
                    regexp_split_to_array(coalesce(p_text, ''), '(?:^|\s)\[\d+\]\s+') as parts)
  select n.nums[i], btrim(n.parts[i + 1]),
         regexp_replace(lower(regexp_replace(btrim(n.parts[i + 1]), '\s+', ' ', 'g')), '\.$', '')
    from n, generate_series(1, coalesce(array_length(n.nums, 1), 0)) i
   where btrim(n.parts[i + 1]) <> '';
$$;
revoke all on function public._hys_ref_entries_raw(text) from public, anon, authenticated;

create or replace function public._add_orphan_refs_to_set_panels()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  s        record;
  q        record;
  v_hys    text;
  v_marker text;
  v_tail   text;
  v_add    text;
  v_rows   int := 0;
  v_refs_added int := 0;
  v_sets   jsonb := '[]'::jsonb;
  c_re     constant text := '(\s*(?:📚\s*)?Full Reference List)';
begin
  for s in
    select tutor_content->>'set_id' as set_id
      from questions
     where type = 'EMQ' and tutor_content->>'high_yield_summary' ~* 'Full Reference List'
     group by 1 order by 1
  loop
    select tutor_content->>'high_yield_summary' into v_hys
      from questions where type = 'EMQ' and tutor_content->>'set_id' = s.set_id order by id limit 1;
    v_marker := substring(v_hys from c_re);
    v_tail   := substr(v_hys, strpos(v_hys, v_marker) + length(v_marker));

    -- references in the appended list that are in no panel of this set
    create temp table if not exists _orph (num int, txt text, norm text) on commit drop;
    truncate _orph;
    insert into _orph
    select a.num, a.txt, a.norm
      from public._hys_ref_entries_raw(v_tail) a
     where not exists (
       select 1 from questions r, lateral public._hys_ref_entries(r.tutor_content->>'references') e
        where r.type = 'EMQ' and r.tutor_content->>'set_id' = s.set_id and e.num = a.num and e.norm = a.norm);

    if not exists (select 1 from _orph) then continue; end if;
    v_sets := v_sets || jsonb_build_object('set', s.set_id, 'added', (select jsonb_agg(num order by num) from _orph));

    for q in select id, question_id, tutor_content->>'references' as refs
               from questions where type = 'EMQ' and tutor_content->>'set_id' = s.set_id
    loop
      select string_agg('[' || o.num || ']  ' || o.txt, E'\n' order by o.num) into v_add
        from _orph o
       where not exists (select 1 from public._hys_ref_entries(q.refs) e where e.num = o.num and e.norm = o.norm);
      if v_add is null then continue; end if;
      insert into refs_backup_20261004 (question_row_id, question_id, "references")
      values (q.id, q.question_id, q.refs) on conflict do nothing;
      update questions set tutor_content = jsonb_set(tutor_content, '{references}',
             to_jsonb(case when coalesce(btrim(q.refs), '') = '' then v_add else regexp_replace(q.refs, '\s+$', '') || E'\n' || v_add end))
       where id = q.id;
      v_rows := v_rows + 1;
      v_refs_added := v_refs_added + (select count(*) from regexp_matches(v_add, '\[\d+\]', 'g'));
    end loop;
  end loop;
  return jsonb_build_object('rows_updated', v_rows, 'reference_lines_added', v_refs_added, 'sets', v_sets);
end;
$$;
revoke all on function public._add_orphan_refs_to_set_panels() from public, anon, authenticated;

-- 1. orphans → all five panels of their set
select public._add_orphan_refs_to_set_panels();
-- 2. every set now passes the no-loss check → remove the appended lists
select public._repair_emq_hys_appended_refs();
