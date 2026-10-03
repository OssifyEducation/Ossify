-- ════════════════════════════════════════════════════════════════════════════
-- Timed Exam Mode (MSRA Clinical Problem Solving simulation)
--
-- Purely additive: one new table + RPCs. Does not alter `questions`,
-- `user_progress` or any existing function.
--
-- Design notes
--  • The server owns the clock: started_at / deadline_at are set by now() when
--    the attempt is created, so a page refresh can never restart the timer.
--  • The server owns scoring: the client never receives correct_answer or
--    tutor_content until the attempt is completed, and correct_count /
--    percentage are computed here, from questions.correct_answer.
--  • Users can SELECT their own attempts but cannot INSERT/UPDATE directly;
--    every write goes through the SECURITY DEFINER functions below.
--  • A partial unique index allows at most one in-progress attempt per user,
--    and finalisation only updates rows still 'in_progress', so an attempt
--    can never be completed (or counted) twice.
-- ════════════════════════════════════════════════════════════════════════════

create table if not exists public.exam_attempts (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  exam_type          text not null default 'timed_msra_cps'
                       check (exam_type in ('timed_msra_cps')),
  status             text not null default 'in_progress'
                       check (status in ('in_progress','completed')),
  question_ids       integer[] not null,          -- the fixed, ordered paper
  total_questions    integer not null,
  duration_seconds   integer not null default 4500,
  started_at         timestamptz not null default now(),
  deadline_at        timestamptz not null,
  completed_at       timestamptz,
  end_reason         text check (end_reason in ('finished','timeout')),
  answers            jsonb not null default '{}'::jsonb,  -- {"<questions.id>": optionIndex}
  flags              jsonb not null default '[]'::jsonb,  -- [questions.id, …]
  current_index      integer not null default 0,
  correct_count      integer,
  answered_count     integer,
  percentage         numeric(5,1),
  time_taken_seconds integer,
  results            jsonb,   -- snapshot: [{id, selected, correct, is_correct}] in paper order
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

comment on table public.exam_attempts is
  'Timed MSRA exam attempts. Written only via start/save/submit_timed_exam RPCs.';

create unique index if not exists exam_attempts_one_active_per_user
  on public.exam_attempts (user_id) where status = 'in_progress';
create index if not exists exam_attempts_user_completed
  on public.exam_attempts (user_id, completed_at desc);

alter table public.exam_attempts enable row level security;

drop policy if exists "Users can view own exam attempts" on public.exam_attempts;
create policy "Users can view own exam attempts"
  on public.exam_attempts for select
  using (auth.uid() = user_id);

drop trigger if exists exam_attempts_updated_at on public.exam_attempts;
create trigger exam_attempts_updated_at
  before update on public.exam_attempts
  for each row execute function public.update_updated_at_column();


-- ── Question selection ──────────────────────────────────────────────────────
-- Blueprint (97 items): 67 SBAs + 10 EMQ themes × 3 scenarios = 97.
--  • SBAs spread across all 12 specialties (5 each, +1 for 7 random ones).
--  • EMQ themes from 10 different specialties (the 2 specialties without an
--    EMQ are drawn from those that received the extra SBA), so every
--    specialty contributes 6–9 items.
--  • Questions/sets the user met in previous timed exams are deprioritised,
--    so repeats only appear once the unseen pool for a specialty runs out.
--  • Short pools fall back to any unused question; if fewer than 97 valid
--    items exist the function raises rather than producing an invalid paper.
--  • Paper order: SBA singletons and EMQ sets are shuffled as groups; the 3
--    scenarios of a set stay together in q_num order (mirrors shuffleGroups()
--    in practice.html).
create or replace function public._select_timed_exam_questions(p_user uuid)
returns integer[]
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  c_total       constant int := 97;
  c_emq_sets    constant int := 10;
  c_emq_per_set constant int := 3;
  c_sba_target  constant int := c_total - c_emq_sets * c_emq_per_set;  -- 67
  v_seen        int[];
  v_topics      text[];
  v_n_topics    int;
  v_base        int;
  v_extra       int;
  v_bonus       text[];
  v_no_emq      text[];
  v_sets        text[];
  v_emq_ids     int[];
  v_sba_ids     int[];
  v_missing     int;
  v_result      int[];
begin
  select coalesce(array_agg(distinct qid), '{}')
    into v_seen
    from exam_attempts a, unnest(a.question_ids) qid
   where a.user_id = p_user and a.status = 'completed';

  select array_agg(topic order by random())
    into v_topics
    from (select distinct topic from questions where topic is not null) t;
  v_n_topics := coalesce(array_length(v_topics, 1), 0);
  if v_n_topics = 0 then
    raise exception 'insufficient_questions: question bank is empty';
  end if;

  v_base   := c_sba_target / v_n_topics;
  v_extra  := c_sba_target % v_n_topics;
  v_bonus  := v_topics[1:v_extra];

  -- 1 EMQ set per topic for up to 10 topics; drop topics from the bonus group first
  if v_n_topics > c_emq_sets then
    v_no_emq := v_bonus[1:(v_n_topics - c_emq_sets)];
  else
    v_no_emq := '{}';
  end if;

  -- EMQ sets: best (least-seen, then random) set per eligible topic
  with sets as (
    select tutor_content->>'set_id' as set_id, topic,
           count(*) filter (where id = any(v_seen)) as seen_n,
           count(*) as n
      from questions
     where type = 'EMQ' and tutor_content ? 'set_id'
     group by 1, 2
    having count(*) >= c_emq_per_set
  ), ranked as (
    select set_id, topic,
           row_number() over (partition by topic order by seen_n, random()) as rn
      from sets
     where not (topic = any(v_no_emq))
  )
  select array_agg(set_id) into v_sets
    from (select set_id from ranked where rn = 1 order by random() limit c_emq_sets) s;

  -- Top up EMQ sets from any topic if some topic had none
  if coalesce(array_length(v_sets, 1), 0) < c_emq_sets then
    select coalesce(v_sets, '{}') || coalesce(array_agg(set_id), '{}') into v_sets
      from (
        select tutor_content->>'set_id' as set_id
          from questions
         where type = 'EMQ' and tutor_content ? 'set_id'
           and not ((tutor_content->>'set_id') = any(coalesce(v_sets, '{}')))
         group by 1
        having count(*) >= c_emq_per_set
         order by sum(case when id = any(v_seen) then 1 else 0 end), random()
         limit c_emq_sets - coalesce(array_length(v_sets, 1), 0)
      ) s;
  end if;

  -- 3 scenarios per chosen set (prefer unseen)
  select coalesce(array_agg(id), '{}') into v_emq_ids
    from (
      select id,
             row_number() over (partition by tutor_content->>'set_id'
                                order by (id = any(v_seen)), random()) as rn
        from questions
       where type = 'EMQ' and (tutor_content->>'set_id') = any(coalesce(v_sets, '{}'))
    ) x
   where rn <= c_emq_per_set;

  -- SBAs: per-topic quota, least-seen first
  with ranked as (
    select id, topic,
           row_number() over (partition by topic order by (id = any(v_seen)), random()) as rn
      from questions
     where type = 'SBA'
  )
  select coalesce(array_agg(id), '{}') into v_sba_ids
    from ranked
   where rn <= v_base + case when topic = any(v_bonus) then 1 else 0 end;

  -- Fill any shortfall (small topics / missing EMQs) with unused SBAs
  v_missing := c_total - coalesce(array_length(v_sba_ids, 1), 0)
                       - coalesce(array_length(v_emq_ids, 1), 0);
  if v_missing > 0 then
    select v_sba_ids || coalesce(array_agg(id), '{}') into v_sba_ids
      from (
        select id from questions
         where type = 'SBA' and not (id = any(v_sba_ids))
         order by (id = any(v_seen)), random()
         limit v_missing
      ) f;
  end if;

  -- Order: shuffle groups (each SBA alone; each EMQ set together, by q_num)
  -- (random() is evaluated per row in the inner query; the window then hands
  --  every member of a set the first member's value — one uniform key per
  --  group, so EMQ sets aren't biased towards the start as min() would be)
  select array_agg(id order by grp_rand, grp, pos) into v_result
    from (
      select id, grp, pos,
             first_value(rnd) over (partition by grp order by pos, id) as grp_rand
        from (
          select q.id,
                 case when q.type = 'EMQ' then 'set:' || (q.tutor_content->>'set_id')
                      else 'sba:' || q.id end as grp,
                 case when q.type = 'EMQ'
                      then coalesce((q.tutor_content->>'q_num')::numeric, 0)
                      else 0 end as pos,
                 random() as rnd
            from questions q
           where q.id = any(v_sba_ids || v_emq_ids)
        ) r
    ) o;

  if coalesce(array_length(v_result, 1), 0) <> c_total then
    raise exception 'insufficient_questions: only % valid questions available, % required',
      coalesce(array_length(v_result, 1), 0), c_total;
  end if;

  return v_result;
end;
$$;


-- ── Payload helpers ─────────────────────────────────────────────────────────
-- Exam payload: everything needed to sit the paper, nothing that reveals the
-- answer (no correct_answer, no explanation, no tutor_content beyond the EMQ
-- option list / theme which is part of the question itself).
create or replace function public._timed_exam_questions_payload(p_ids int[])
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id',          q.id,
           'question_id', q.question_id,
           'type',        q.type,
           'topic',       q.topic,
           'domain',      q.domain,
           'emq_theme',   q.emq_theme,
           'stem',        q.stem,
           'options',     q.options,
           'emq', case when q.type = 'EMQ' then jsonb_build_object(
                    'set_id',      q.tutor_content->>'set_id',
                    'set_theme',   q.tutor_content->>'set_theme',
                    'option_list', q.tutor_content->'option_list',
                    'q_num',       q.tutor_content->'q_num') end
         ) order by t.ord), '[]'::jsonb)
    from unnest(p_ids) with ordinality t(id, ord)
    join questions q on q.id = t.id;
$$;

-- Keeps only answers for questions in this paper with a valid option index.
create or replace function public._sanitize_exam_answers(p_ids int[], p_answers jsonb)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(jsonb_object_agg(e.key, (e.value #>> '{}')::int), '{}'::jsonb)
    from jsonb_each(case when jsonb_typeof(p_answers) = 'object' then p_answers else '{}'::jsonb end) e
    join questions q on q.id::text = e.key
   where q.id = any(p_ids)
     -- CASE guards the casts: AND gives no evaluation-order guarantee in SQL
     and case when jsonb_typeof(e.value) <> 'number' then false
              when (e.value #>> '{}')::numeric <> trunc((e.value #>> '{}')::numeric) then false
              else (e.value #>> '{}')::numeric between 0 and jsonb_array_length(q.options) - 1 end;
$$;

create or replace function public._sanitize_exam_flags(p_ids int[], p_flags jsonb)
returns jsonb
language sql
immutable
as $$
  select coalesce(jsonb_agg(distinct (f #>> '{}')::int), '[]'::jsonb)
    from jsonb_array_elements(case when jsonb_typeof(p_flags) = 'array' then p_flags else '[]'::jsonb end) f
   where case when jsonb_typeof(f) <> 'number' then false
              when (f #>> '{}')::numeric <> trunc((f #>> '{}')::numeric) then false
              when abs((f #>> '{}')::numeric) >= 2147483647 then false
              else (f #>> '{}')::int = any(p_ids) end;
$$;

create or replace function public._timed_exam_state(a public.exam_attempts)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'id',               a.id,
    'status',           a.status,
    'exam_type',        a.exam_type,
    'started_at',       a.started_at,
    'deadline_at',      a.deadline_at,
    'duration_seconds', a.duration_seconds,
    'server_now',       now(),
    'total_questions',  a.total_questions,
    'current_index',    a.current_index,
    'answers',          a.answers,
    'flags',            a.flags,
    'updated_at',       a.updated_at,
    'questions',        public._timed_exam_questions_payload(a.question_ids)
  );
$$;

create or replace function public._timed_exam_summary(a public.exam_attempts)
returns jsonb
language sql
stable
as $$
  select jsonb_build_object(
    'id',                 a.id,
    'status',             a.status,
    'exam_type',          a.exam_type,
    'started_at',         a.started_at,
    'completed_at',       a.completed_at,
    'end_reason',         a.end_reason,
    'total_questions',    a.total_questions,
    'correct_count',      a.correct_count,
    'answered_count',     a.answered_count,
    'percentage',         a.percentage,
    'time_taken_seconds', a.time_taken_seconds,
    'duration_seconds',   a.duration_seconds
  );
$$;

-- Review payload: full question + tutor content + the scored snapshot.
create or replace function public._timed_exam_review_payload(a public.exam_attempts)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select public._timed_exam_summary(a) || jsonb_build_object(
    'flags', a.flags,
    'questions', coalesce(jsonb_agg(jsonb_build_object(
        'id',             q.id,
        'question_id',    q.question_id,
        'type',           q.type,
        'topic',          q.topic,
        'domain',         q.domain,
        'emq_theme',      q.emq_theme,
        'stem',           q.stem,
        'options',        q.options,
        'correct_answer', (r.value->>'correct')::int,
        'selected',       r.value->'selected',
        'is_correct',     (r.value->>'is_correct')::boolean,
        'tutor_content',  q.tutor_content
      ) order by r.ord), '[]'::jsonb))
    from jsonb_array_elements(a.results) with ordinality r(value, ord)
    join questions q on q.id = (r.value->>'id')::int;
$$;


-- ── Finalisation (scoring) ──────────────────────────────────────────────────
create or replace function public._finalize_timed_exam(p_attempt_id uuid, p_reason text)
returns public.exam_attempts
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  a        public.exam_attempts;
  v_now    timestamptz := now();
  v_reason text;
  v_taken  int;
  v_ans    int;
  v_per_q  int;
begin
  select * into a from exam_attempts where id = p_attempt_id for update;
  if not found or a.status <> 'in_progress' then
    return a;  -- already finalised: idempotent, never re-scored
  end if;

  v_reason := case when p_reason = 'timeout' or v_now >= a.deadline_at then 'timeout' else 'finished' end;
  v_taken  := least(a.duration_seconds,
                    greatest(0, ceil(extract(epoch from (least(v_now, a.deadline_at) - a.started_at)))::int));

  update exam_attempts e set
    status             = 'completed',
    completed_at       = v_now,
    end_reason         = v_reason,
    time_taken_seconds = v_taken,
    results            = s.results,
    correct_count      = s.correct_n,
    answered_count     = s.answered_n,
    percentage         = round(s.correct_n * 100.0 / nullif(e.total_questions, 0), 1)
  from (
    select jsonb_agg(jsonb_build_object(
             'id',         t.id,
             'selected',   e2.answers -> t.id::text,          -- null ⇒ not answered
             'correct',    q.correct_answer,
             'is_correct', (e2.answers ->> t.id::text)::int is not distinct from q.correct_answer
                           and e2.answers ? t.id::text
           ) order by t.ord) as results,
           count(*) filter (where e2.answers ? t.id::text
                              and (e2.answers ->> t.id::text)::int = q.correct_answer) as correct_n,
           count(*) filter (where e2.answers ? t.id::text) as answered_n
      from exam_attempts e2
      cross join lateral unnest(e2.question_ids) with ordinality t(id, ord)
      join questions q on q.id = t.id
     where e2.id = p_attempt_id
  ) s
  where e.id = p_attempt_id and e.status = 'in_progress'
  returning e.* into a;

  -- Feed the existing progress system (same first-attempt-wins semantics as
  -- practice.html's saveSessionProgress: ON CONFLICT DO NOTHING).
  v_ans   := coalesce(a.answered_count, 0);
  v_per_q := case when v_ans > 0 then round(v_taken::numeric / v_ans) end;
  insert into user_progress (user_id, question_id, answered_correctly, answered_at, time_taken)
  select a.user_id, (k.key)::int, (k.value #>> '{}')::int = q.correct_answer, v_now, v_per_q
    from jsonb_each(a.answers) k
    join questions q on q.id = (k.key)::int
  on conflict (user_id, question_id) do nothing;

  -- Streak tick, mirroring practice.html (non-critical; never blocks scoring)
  begin
    update profiles p set
      current_streak   = case when p.last_active_date = current_date - 1
                              then coalesce(p.current_streak, 0) + 1 else 1 end,
      best_streak      = greatest(coalesce(p.best_streak, 0),
                                  case when p.last_active_date = current_date - 1
                                       then coalesce(p.current_streak, 0) + 1 else 1 end),
      last_active_date = current_date
    where p.id = a.user_id and p.last_active_date is distinct from current_date;
  exception when others then null;
  end;

  return a;
end;
$$;


-- ── Public RPCs ─────────────────────────────────────────────────────────────

-- Returns the user's live attempt (with server clock), finalising it first if
-- its deadline passed while they were away. Null when there is none.
create or replace function public.get_active_timed_exam()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.exam_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;

  select * into a from exam_attempts
   where user_id = v_uid and status = 'in_progress' limit 1;
  if not found then return null; end if;

  if now() >= a.deadline_at then
    a := public._finalize_timed_exam(a.id, 'timeout');
    return jsonb_build_object('status', 'expired', 'attempt', public._timed_exam_summary(a));
  end if;

  return public._timed_exam_state(a);
end;
$$;

-- Creates a new attempt, or returns the live one (double-click / two tabs safe).
create or replace function public.start_timed_exam()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.exam_attempts;
  v_ids int[];
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;

  select * into a from exam_attempts
   where user_id = v_uid and status = 'in_progress' limit 1 for update;
  if found then
    if now() < a.deadline_at then
      return public._timed_exam_state(a);
    end if;
    perform public._finalize_timed_exam(a.id, 'timeout');
  end if;

  v_ids := public._select_timed_exam_questions(v_uid);

  begin
    insert into exam_attempts (user_id, question_ids, total_questions, duration_seconds, started_at, deadline_at)
    values (v_uid, v_ids, array_length(v_ids, 1), 4500, now(), now() + interval '4500 seconds')
    returning * into a;
  exception when unique_violation then
    -- A concurrent request created it first: hand back that attempt.
    select * into a from exam_attempts where user_id = v_uid and status = 'in_progress' limit 1;
  end;

  return public._timed_exam_state(a);
end;
$$;

-- Autosave. Accepted until 30 s after the deadline (network grace); later
-- writes are ignored and the attempt is finalised with what was last saved.
create or replace function public.save_timed_exam_progress(
  p_attempt_id uuid, p_answers jsonb, p_flags jsonb default '[]'::jsonb, p_current_index int default 0)
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.exam_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select * into a from exam_attempts where id = p_attempt_id and user_id = v_uid for update;
  if not found then raise exception 'attempt_not_found'; end if;

  if a.status <> 'in_progress' then
    return jsonb_build_object('ok', false, 'status', a.status, 'server_now', now());
  end if;
  if now() > a.deadline_at + interval '30 seconds' then
    perform public._finalize_timed_exam(a.id, 'timeout');
    return jsonb_build_object('ok', false, 'status', 'completed', 'server_now', now());
  end if;

  update exam_attempts set
    answers       = public._sanitize_exam_answers(a.question_ids, p_answers),
    flags         = public._sanitize_exam_flags(a.question_ids, p_flags),
    current_index = greatest(0, least(coalesce(p_current_index, 0), a.total_questions - 1))
  where id = a.id;

  return jsonb_build_object('ok', true, 'status', 'in_progress', 'server_now', now());
end;
$$;

-- Final submit (finish early or timeout). Idempotent: a second call returns
-- the already-scored result. Returns the full review payload.
create or replace function public.submit_timed_exam(
  p_attempt_id uuid, p_answers jsonb, p_flags jsonb default '[]'::jsonb, p_reason text default 'finished')
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.exam_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select * into a from exam_attempts where id = p_attempt_id and user_id = v_uid for update;
  if not found then raise exception 'attempt_not_found'; end if;

  if a.status = 'in_progress' then
    if now() <= a.deadline_at + interval '30 seconds' and p_answers is not null then
      update exam_attempts set
        answers = public._sanitize_exam_answers(a.question_ids, p_answers),
        flags   = public._sanitize_exam_flags(a.question_ids, p_flags)
      where id = a.id;
    end if;
    a := public._finalize_timed_exam(a.id, p_reason);
  end if;

  return public._timed_exam_review_payload(a);
end;
$$;

create or replace function public.get_timed_exam_review(p_attempt_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.exam_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select * into a from exam_attempts
   where id = p_attempt_id and user_id = v_uid and status = 'completed';
  if not found then raise exception 'attempt_not_found'; end if;
  return public._timed_exam_review_payload(a);
end;
$$;


-- ── Permissions ─────────────────────────────────────────────────────────────
revoke all on function public._select_timed_exam_questions(uuid)            from public, anon, authenticated;
revoke all on function public._timed_exam_questions_payload(int[])          from public, anon, authenticated;
revoke all on function public._sanitize_exam_answers(int[], jsonb)          from public, anon, authenticated;
revoke all on function public._sanitize_exam_flags(int[], jsonb)            from public, anon, authenticated;
revoke all on function public._timed_exam_state(public.exam_attempts)       from public, anon, authenticated;
revoke all on function public._timed_exam_summary(public.exam_attempts)     from public, anon, authenticated;
revoke all on function public._timed_exam_review_payload(public.exam_attempts) from public, anon, authenticated;
revoke all on function public._finalize_timed_exam(uuid, text)              from public, anon, authenticated;

revoke all   on function public.get_active_timed_exam()                          from public, anon;
revoke all   on function public.start_timed_exam()                               from public, anon;
revoke all   on function public.save_timed_exam_progress(uuid, jsonb, jsonb, int) from public, anon;
revoke all   on function public.submit_timed_exam(uuid, jsonb, jsonb, text)      from public, anon;
revoke all   on function public.get_timed_exam_review(uuid)                      from public, anon;
grant execute on function public.get_active_timed_exam()                          to authenticated;
grant execute on function public.start_timed_exam()                               to authenticated;
grant execute on function public.save_timed_exam_progress(uuid, jsonb, jsonb, int) to authenticated;
grant execute on function public.submit_timed_exam(uuid, jsonb, jsonb, text)      to authenticated;
grant execute on function public.get_timed_exam_review(uuid)                      to authenticated;

revoke insert, update, delete on public.exam_attempts from anon, authenticated;
grant select on public.exam_attempts to authenticated;
