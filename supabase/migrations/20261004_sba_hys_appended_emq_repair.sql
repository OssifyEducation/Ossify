-- ════════════════════════════════════════════════════════════════════════════
-- High-yield summary repair: EMQ summaries appended to 11 SBA rows
--
-- The import pipeline appended all 10 EMQ-set summaries of a specialty onto
-- one SBA row per specialty (CVS-SBA-050, ENDO-SBA-050, GI-SBA-050,
-- IDHI-SBA-050, MSK-SBA-050, PAED-SBA-005, PHARM-SBA-050, PSYCH-SBA-005,
-- RENAL-SBA-005, REPRO-SBA-050, RESP-SBA-050). Each such value is exactly
--   <the SBA's own summary, possibly empty> + ' ' + <10 EMQ summaries joined by ' '>
-- giving 8–33 KB and up to ~100 unrelated bullets.
--
-- For every SBA whose summary contains the verbatim summaries of at least 5
-- distinct EMQ rows of the same topic, this removes those EMQ summaries and
-- keeps whatever precedes them (the SBA's own text, exactly as stored).
-- A row is changed only if, after removing the EMQ summaries, nothing but
-- whitespace is left after the SBA's own text — otherwise it is skipped and
-- reported. EMQ rows are never modified. Originals are kept in
-- hys_backup_20261004. Empty results are stored as '' (the same form the 294
-- other empty SBA summaries use). Idempotent.
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.hys_backup_20261004 (
  question_row_id    integer primary key references public.questions(id) on delete cascade,
  question_id        text not null,
  high_yield_summary text,
  backed_up_at       timestamptz not null default now()
);
alter table public.hys_backup_20261004 enable row level security;   -- no policies: admin-only
revoke all on public.hys_backup_20261004 from anon, authenticated;

create or replace function public._repair_sba_hys_appended_emq()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  r        record;
  v_t      text;
  v_first  int;
  v_pos    int;
  v_own    text;
  v_rest   text;
  v_e      text;
  v_found  int;
  v_fixed  jsonb := '[]'::jsonb;
  v_skip   jsonb := '[]'::jsonb;
begin
  for r in
    select s.id, s.question_id, s.topic, s.tutor_content->>'high_yield_summary' as t
      from questions s
     where s.type = 'SBA'
       and length(coalesce(s.tutor_content->>'high_yield_summary', '')) > 3000
       and (select count(distinct e.tutor_content->>'high_yield_summary')
              from questions e
             where e.type = 'EMQ' and e.topic = s.topic
               and length(coalesce(e.tutor_content->>'high_yield_summary', '')) > 100
               and position(e.tutor_content->>'high_yield_summary' in s.tutor_content->>'high_yield_summary') > 0) >= 5
  loop
    v_t := r.t;
    v_first := null; v_found := 0; v_rest := null;

    -- earliest position of any of this topic's EMQ summaries
    for v_e in
      select distinct e.tutor_content->>'high_yield_summary'
        from questions e
       where e.type = 'EMQ' and e.topic = r.topic
         and length(coalesce(e.tutor_content->>'high_yield_summary', '')) > 100
         and position(e.tutor_content->>'high_yield_summary' in v_t) > 0
    loop
      v_pos := position(v_e in v_t);
      if v_first is null or v_pos < v_first then v_first := v_pos; end if;
      v_found := v_found + 1;
    end loop;

    v_own  := regexp_replace(left(v_t, v_first - 1), '\s+$', '');
    v_rest := substr(v_t, v_first);

    -- everything from the first EMQ summary onward must be EMQ summaries + whitespace only
    for v_e in
      select distinct e.tutor_content->>'high_yield_summary'
        from questions e
       where e.type = 'EMQ' and e.topic = r.topic
         and length(coalesce(e.tutor_content->>'high_yield_summary', '')) > 100
    loop
      v_rest := replace(v_rest, v_e, '');
    end loop;

    if btrim(v_rest) <> '' then
      v_skip := v_skip || jsonb_build_object('question_id', r.question_id, 'reason', 'unrecognised text after EMQ summaries', 'leftover_chars', length(btrim(v_rest)));
      continue;
    end if;

    insert into hys_backup_20261004 (question_row_id, question_id, high_yield_summary)
    values (r.id, r.question_id, v_t) on conflict do nothing;

    update questions set tutor_content = jsonb_set(tutor_content, '{high_yield_summary}', to_jsonb(v_own))
     where id = r.id;

    v_fixed := v_fixed || jsonb_build_object('question_id', r.question_id, 'emq_summaries_removed', v_found,
                                             'chars_before', length(v_t), 'chars_after', length(v_own));
  end loop;

  return jsonb_build_object('repaired', v_fixed, 'skipped', v_skip);
end;
$$;
revoke all on function public._repair_sba_hys_appended_emq() from public, anon, authenticated;

select public._repair_sba_hys_appended_emq();
