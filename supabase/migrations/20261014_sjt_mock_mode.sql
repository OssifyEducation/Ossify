-- ════════════════════════════════════════════════════════════════════════════
-- Professional Dilemmas (SJT) Mock Exam Mode
--
-- Purely additive: two new tables and their RPCs. Schema only. The mock
-- questions themselves are NEVER stored in this repository's migrations; they
-- are loaded separately by scripts/seed-sjt-mocks.js (see docs/SJT-MOCK.md).
--
-- Design notes (mirrors Timed Exam Mode, 20261003_timed_exam_mode.sql)
--  • sjt_items holds the full mock questions, keys and explanations. RLS is on
--    with no policies and all table privileges are revoked, so the only way
--    to read an item is through the SECURITY DEFINER functions below.
--  • During an attempt the client receives the stem, instruction and option
--    texts only: no key, no explanations, no title, no attribute.
--  • The server owns the clock (95 minutes, 50 questions) and the marking.
--    Scoring replicates js/sjt-engine.js ("Ossify practice scoring model v1",
--    an independently designed educational model, NOT the official MSRA
--    marking scheme):
--      ranking          each option max(0, 4 − places out); 20 per 5-option item
--      choose three     4 marks per keyed option chosen; 12 per item
--      incomplete or invalid responses score 0
--  • One in-progress mock per user; finalisation only touches rows still
--    in progress, so an attempt is never scored twice.
-- ════════════════════════════════════════════════════════════════════════════

-- ── Items (server-only) ─────────────────────────────────────────────────────
create table if not exists public.sjt_items (
  id          text primary key check (id ~ '^sjt-[0-9]{3}$'),
  pool        text not null check (pool ~ '^mock-[1-9]$'),
  position    integer not null check (position > 0),
  format      text not null check (format in ('ranking','multiple_choice')),
  attribute   text not null,
  question    jsonb not null,           -- full compiled item, including key and explanations
  updated_at  timestamptz not null default now(),
  unique (pool, position)
);

comment on table public.sjt_items is
  'Mock SJT questions with keys. Server-only: read exclusively via the *_sjt_mock RPCs.';

-- RLS on with no policies: anon and authenticated can neither read nor write.
alter table public.sjt_items enable row level security;


-- ── Attempts ────────────────────────────────────────────────────────────────
create table if not exists public.sjt_mock_attempts (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  mock               text not null check (mock ~ '^mock-[1-9]$'),
  status             text not null default 'in_progress'
                       check (status in ('in_progress','completed')),
  item_ids           text[] not null,          -- the fixed, ordered paper
  total_items        integer not null,
  duration_seconds   integer not null default 5700,
  started_at         timestamptz not null default now(),
  deadline_at        timestamptz not null,
  completed_at       timestamptz,
  end_reason         text check (end_reason in ('finished','timeout')),
  answers            jsonb not null default '{}'::jsonb,  -- {"<item id>": ["B","E",…]}
  flags              jsonb not null default '[]'::jsonb,  -- ["<item id>", …]
  current_index      integer not null default 0,
  marks              integer,
  max_marks          integer,
  percentage         numeric(5,1),
  answered_count     integer,
  by_attribute       jsonb,    -- {"Professional integrity": {"marks": n, "max": n, "items": n}, …}
  time_taken_seconds integer,
  results            jsonb,    -- [{id, format, attribute, response, marks, max, key}] in paper order
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

comment on table public.sjt_mock_attempts is
  'SJT mock attempts. Written only via start/save/submit_sjt_mock RPCs.';

create unique index if not exists sjt_mock_attempts_one_active_per_user
  on public.sjt_mock_attempts (user_id) where status = 'in_progress';
create index if not exists sjt_mock_attempts_user_completed
  on public.sjt_mock_attempts (user_id, completed_at desc);

alter table public.sjt_mock_attempts enable row level security;

create policy "Users can view own SJT mock attempts"
  on public.sjt_mock_attempts for select
  using (auth.uid() = user_id);

create trigger sjt_mock_attempts_updated_at
  before update on public.sjt_mock_attempts
  for each row execute function public.update_updated_at_column();

-- Only a SELECT policy exists, so RLS refuses every direct insert, update or delete.


-- ── Scoring (must match js/sjt-engine.js; see tests/sjt-mock-sql.test.js) ───
create or replace function public._sjt_mock_max(q jsonb)
returns integer
language sql
immutable
set search_path = public
as $$
  select case when q->>'format' = 'ranking'
              then 4 * jsonb_array_length(q->'options')
              else 4 * jsonb_array_length(q->'key'->'correct') end;
$$;

create or replace function public._sjt_mock_needed(q jsonb)
returns integer
language sql
immutable
set search_path = public
as $$
  select case when q->>'format' = 'ranking'
              then jsonb_array_length(q->'options')
              else coalesce((q->>'selectCount')::int, 3) end;
$$;

create or replace function public._sjt_mock_score(q jsonb, r jsonb)
returns integer
language plpgsql
immutable
set search_path = public
as $$
declare
  v_ids   text[];
  v_resp  text[];
  v_key   text[];
  v_n     int;
  v_total int := 0;
  v_pos   int;
  i       int;
begin
  if q is null or r is null or jsonb_typeof(r) <> 'array' then return 0; end if;
  if exists (select 1 from jsonb_array_elements(r) e where jsonb_typeof(e) <> 'string') then
    return 0;
  end if;

  select coalesce(array_agg(o->>'id' order by ord), '{}') into v_ids
    from jsonb_array_elements(q->'options') with ordinality t(o, ord);
  select coalesce(array_agg(e #>> '{}' order by ord), '{}') into v_resp
    from jsonb_array_elements(r) with ordinality t(e, ord);
  v_n := coalesce(array_length(v_resp, 1), 0);

  -- every option known, no repeats, exactly the number required
  if not (v_resp <@ v_ids) then return 0; end if;
  if (select count(distinct x) from unnest(v_resp) x) <> v_n then return 0; end if;
  if v_n <> public._sjt_mock_needed(q) then return 0; end if;

  if q->>'format' = 'ranking' then
    select coalesce(array_agg(k #>> '{}' order by ord), '{}') into v_key
      from jsonb_array_elements(q->'key'->'order') with ordinality t(k, ord);
    for i in 1 .. coalesce(array_length(v_key, 1), 0) loop
      v_pos := array_position(v_resp, v_key[i]);
      if v_pos is null then return 0; end if;
      v_total := v_total + greatest(0, 4 - abs(v_pos - i));
    end loop;
    return v_total;
  end if;

  select 4 * count(*) into v_total from unnest(v_resp) x where (q->'key'->'correct') ? x;
  return v_total;
end;
$$;


-- ── Payload helpers ─────────────────────────────────────────────────────────
-- Exam payload: what is needed to sit the paper and nothing that reveals the key.
create or replace function public._sjt_mock_paper(p_ids text[])
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id',          i.id,
           'format',      i.question->>'format',
           'stem',        i.question->>'stem',
           'instruction', i.question->>'instruction',
           'selectCount', case when i.format = 'multiple_choice'
                               then coalesce((i.question->>'selectCount')::int, 3) end,
           'options',     (select jsonb_agg(jsonb_build_object('id', o->>'id', 'text', o->>'text') order by ord)
                             from jsonb_array_elements(i.question->'options') with ordinality x(o, ord))
         ) order by t.ord), '[]'::jsonb)
    from unnest(p_ids) with ordinality t(id, ord)
    join sjt_items i on i.id = t.id;
$$;

-- Keeps only answers to items in this paper whose value is an array of
-- distinct, known option letters no longer than the item allows. Partial
-- answers are kept (they can be finished later) but score 0 if left partial.
create or replace function public._sanitize_sjt_mock_answers(p_ids text[], p_answers jsonb)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(jsonb_object_agg(e.key, e.value), '{}'::jsonb)
    from jsonb_each(case when jsonb_typeof(p_answers) = 'object' then p_answers else '{}'::jsonb end) e
    join sjt_items i on i.id = e.key
   where e.key = any(p_ids)
     -- CASE guards the array functions: AND has no evaluation-order guarantee
     and case when jsonb_typeof(e.value) <> 'array' then false
              when jsonb_array_length(e.value) = 0 then false
              when jsonb_array_length(e.value) > public._sjt_mock_needed(i.question) then false
              when exists (select 1 from jsonb_array_elements(e.value) x where jsonb_typeof(x) <> 'string') then false
              when exists (select 1 from jsonb_array_elements_text(e.value) x
                            where not exists (select 1 from jsonb_array_elements(i.question->'options') o
                                               where o->>'id' = x)) then false
              else (select count(distinct x) from jsonb_array_elements_text(e.value) x) = jsonb_array_length(e.value)
         end;
$$;

create or replace function public._sanitize_sjt_mock_flags(p_ids text[], p_flags jsonb)
returns jsonb
language sql
immutable
set search_path = public
as $$
  select coalesce(jsonb_agg(distinct f #>> '{}'), '[]'::jsonb)
    from jsonb_array_elements(case when jsonb_typeof(p_flags) = 'array' then p_flags else '[]'::jsonb end) f
   where jsonb_typeof(f) = 'string' and (f #>> '{}') = any(p_ids);
$$;

create or replace function public._sjt_mock_state(a public.sjt_mock_attempts)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'id',               a.id,
    'mock',             a.mock,
    'status',           a.status,
    'started_at',       a.started_at,
    'deadline_at',      a.deadline_at,
    'duration_seconds', a.duration_seconds,
    'server_now',       now(),
    'total_items',      a.total_items,
    'current_index',    a.current_index,
    'answers',          a.answers,
    'flags',            a.flags,
    'updated_at',       a.updated_at,
    'questions',        public._sjt_mock_paper(a.item_ids)
  );
$$;

create or replace function public._sjt_mock_summary(a public.sjt_mock_attempts)
returns jsonb
language sql
stable
set search_path = public
as $$
  select jsonb_build_object(
    'id',                 a.id,
    'mock',               a.mock,
    'status',             a.status,
    'started_at',         a.started_at,
    'completed_at',       a.completed_at,
    'end_reason',         a.end_reason,
    'total_items',        a.total_items,
    'marks',              a.marks,
    'max_marks',          a.max_marks,
    'percentage',         a.percentage,
    'answered_count',     a.answered_count,
    'by_attribute',       a.by_attribute,
    'time_taken_seconds', a.time_taken_seconds,
    'duration_seconds',   a.duration_seconds
  );
$$;

-- Review payload: the full items (key, explanations, references) and the
-- scored snapshot. Only ever built for completed attempts.
create or replace function public._sjt_mock_review_payload(a public.sjt_mock_attempts)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select public._sjt_mock_summary(a) || jsonb_build_object(
    'flags',     a.flags,
    'results',   a.results,
    'questions', coalesce((
       select jsonb_agg(i.question order by t.ord)
         from unnest(a.item_ids) with ordinality t(id, ord)
         join sjt_items i on i.id = t.id), '[]'::jsonb))
  where a.status = 'completed';
$$;


-- ── Finalisation (scoring) ──────────────────────────────────────────────────
create or replace function public._finalize_sjt_mock(p_attempt_id uuid, p_reason text)
returns public.sjt_mock_attempts
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  a        public.sjt_mock_attempts;
  v_now    timestamptz := now();
  v_reason text;
  v_taken  int;
begin
  select * into a from sjt_mock_attempts where id = p_attempt_id for update;
  if not found or a.status <> 'in_progress' then
    return a;  -- already finalised: idempotent, never re-scored
  end if;

  v_reason := case when p_reason = 'timeout' or v_now >= a.deadline_at then 'timeout' else 'finished' end;
  v_taken  := least(a.duration_seconds,
                    greatest(0, ceil(extract(epoch from (least(v_now, a.deadline_at) - a.started_at)))::int));

  with scored as (
    select t.ord, t.id,
           i.question->>'format'    as format,
           i.question->>'attribute' as attribute,
           a.answers -> t.id        as response,
           public._sjt_mock_score(i.question, a.answers -> t.id) as marks,
           public._sjt_mock_max(i.question) as max,
           coalesce(jsonb_array_length(case when jsonb_typeof(a.answers -> t.id) = 'array'
                                            then a.answers -> t.id end), 0)
             = public._sjt_mock_needed(i.question) as complete,
           i.question->'key' as key
      from unnest(a.item_ids) with ordinality t(id, ord)
      join sjt_items i on i.id = t.id
  ), attr as (
    select jsonb_object_agg(attribute, jsonb_build_object('marks', m, 'max', x, 'items', n)) as by_attr
      from (select attribute, sum(marks)::int m, sum(max)::int x, count(*)::int n
              from scored group by attribute) g
  ), tot as (
    select jsonb_agg(jsonb_build_object(
             'id', id, 'format', format, 'attribute', attribute,
             'response', response, 'marks', marks, 'max', max, 'key', key) order by ord) as results,
           sum(marks)::int as marks, sum(max)::int as max_marks,
           count(*) filter (where complete)::int as answered
      from scored
  )
  update sjt_mock_attempts e set
    status             = 'completed',
    completed_at       = v_now,
    end_reason         = v_reason,
    time_taken_seconds = v_taken,
    results            = tot.results,
    marks              = tot.marks,
    max_marks          = tot.max_marks,
    answered_count     = tot.answered,
    percentage         = round(tot.marks * 100.0 / nullif(tot.max_marks, 0), 1),
    by_attribute       = attr.by_attr
  from tot, attr
  where e.id = p_attempt_id and e.status = 'in_progress'
  returning e.* into a;

  -- Streak tick (same server-side rule as touch_activity(); never blocks scoring)
  begin
    update profiles p set
      current_streak   = case when p.last_active_date = current_date then p.current_streak
                              when p.last_active_date = current_date - 1 then coalesce(p.current_streak, 0) + 1
                              else 1 end,
      last_active_date = current_date
    where p.id = a.user_id;
    update profiles set best_streak = greatest(coalesce(best_streak, 0), coalesce(current_streak, 0))
     where id = a.user_id;
  exception when others then null;
  end;

  return a;
end;
$$;


-- ── Public RPCs ─────────────────────────────────────────────────────────────

-- Mocks available, the user's completed attempts, and any live attempt
-- (finalised first if its deadline passed while they were away).
create or replace function public.get_sjt_mock_overview()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid    uuid := auth.uid();
  a        public.sjt_mock_attempts;
  v_active jsonb;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;

  select * into a from sjt_mock_attempts where user_id = v_uid and status = 'in_progress' limit 1;
  if found then
    if now() >= a.deadline_at then
      perform public._finalize_sjt_mock(a.id, 'timeout');
    else
      v_active := jsonb_build_object('id', a.id, 'mock', a.mock, 'deadline_at', a.deadline_at,
                                     'server_now', now(), 'answered', (select count(*) from jsonb_object_keys(a.answers)),
                                     'total_items', a.total_items);
    end if;
  end if;

  return jsonb_build_object(
    'active', v_active,
    'mocks', coalesce((
      select jsonb_agg(jsonb_build_object('mock', pool, 'items', n, 'ranking', r, 'multiple_choice', m) order by pool)
        from (select pool, count(*)::int n,
                     count(*) filter (where format = 'ranking')::int r,
                     count(*) filter (where format = 'multiple_choice')::int m
                from sjt_items group by pool having count(*) = 50) p), '[]'::jsonb),
    'attempts', coalesce((
      select jsonb_agg(public._sjt_mock_summary(x) order by x.completed_at desc)
        from sjt_mock_attempts x
       where x.user_id = v_uid and x.status = 'completed'), '[]'::jsonb)
  );
end;
$$;

-- Returns the live attempt with its paper and server clock; null when none.
create or replace function public.get_active_sjt_mock()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.sjt_mock_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;

  select * into a from sjt_mock_attempts where user_id = v_uid and status = 'in_progress' limit 1;
  if not found then return null; end if;

  if now() >= a.deadline_at then
    a := public._finalize_sjt_mock(a.id, 'timeout');
    return jsonb_build_object('status', 'expired', 'attempt', public._sjt_mock_summary(a));
  end if;

  return public._sjt_mock_state(a);
end;
$$;

-- Starts the requested mock, or returns the live attempt if there is one
-- (double-click / two tabs safe). The client checks the returned 'mock'.
create or replace function public.start_sjt_mock(p_mock text)
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.sjt_mock_attempts;
  v_ids text[];
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;

  select * into a from sjt_mock_attempts
   where user_id = v_uid and status = 'in_progress' limit 1 for update;
  if found then
    if now() < a.deadline_at then
      return public._sjt_mock_state(a);
    end if;
    perform public._finalize_sjt_mock(a.id, 'timeout');
  end if;

  select array_agg(id order by position) into v_ids from sjt_items where pool = p_mock;
  if coalesce(array_length(v_ids, 1), 0) <> 50 then
    raise exception 'mock_unavailable';
  end if;

  begin
    insert into sjt_mock_attempts (user_id, mock, item_ids, total_items, duration_seconds, started_at, deadline_at)
    values (v_uid, p_mock, v_ids, 50, 5700, now(), now() + interval '5700 seconds')
    returning * into a;
  exception when unique_violation then
    select * into a from sjt_mock_attempts where user_id = v_uid and status = 'in_progress' limit 1;
  end;

  return public._sjt_mock_state(a);
end;
$$;

-- Autosave. Accepted until 30 s after the deadline (network grace).
create or replace function public.save_sjt_mock_progress(
  p_attempt_id uuid, p_answers jsonb, p_flags jsonb default '[]'::jsonb, p_current_index int default 0)
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.sjt_mock_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select * into a from sjt_mock_attempts where id = p_attempt_id and user_id = v_uid for update;
  if not found then raise exception 'attempt_not_found'; end if;

  if a.status <> 'in_progress' then
    return jsonb_build_object('ok', false, 'status', a.status, 'server_now', now());
  end if;
  if now() > a.deadline_at + interval '30 seconds' then
    perform public._finalize_sjt_mock(a.id, 'timeout');
    return jsonb_build_object('ok', false, 'status', 'completed', 'server_now', now());
  end if;

  update sjt_mock_attempts set
    answers       = public._sanitize_sjt_mock_answers(a.item_ids, p_answers),
    flags         = public._sanitize_sjt_mock_flags(a.item_ids, p_flags),
    current_index = greatest(0, least(coalesce(p_current_index, 0), a.total_items - 1))
  where id = a.id;

  return jsonb_build_object('ok', true, 'status', 'in_progress', 'server_now', now());
end;
$$;

-- Final submit (finish early or timeout). Idempotent. Returns the review payload.
create or replace function public.submit_sjt_mock(
  p_attempt_id uuid, p_answers jsonb, p_flags jsonb default '[]'::jsonb, p_reason text default 'finished')
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.sjt_mock_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select * into a from sjt_mock_attempts where id = p_attempt_id and user_id = v_uid for update;
  if not found then raise exception 'attempt_not_found'; end if;

  if a.status = 'in_progress' then
    if now() <= a.deadline_at + interval '30 seconds' and p_answers is not null then
      update sjt_mock_attempts set
        answers = public._sanitize_sjt_mock_answers(a.item_ids, p_answers),
        flags   = public._sanitize_sjt_mock_flags(a.item_ids, p_flags)
      where id = a.id;
    end if;
    a := public._finalize_sjt_mock(a.id, p_reason);
  end if;

  return public._sjt_mock_review_payload(a);
end;
$$;

create or replace function public.get_sjt_mock_review(p_attempt_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.sjt_mock_attempts;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select * into a from sjt_mock_attempts
   where id = p_attempt_id and user_id = v_uid and status = 'completed';
  if not found then raise exception 'attempt_not_found'; end if;
  return public._sjt_mock_review_payload(a);
end;
$$;


-- ── Permissions ─────────────────────────────────────────────────────────────
revoke all on function public._sjt_mock_max(jsonb)                              from public, anon, authenticated;
revoke all on function public._sjt_mock_needed(jsonb)                           from public, anon, authenticated;
revoke all on function public._sjt_mock_score(jsonb, jsonb)                     from public, anon, authenticated;
revoke all on function public._sjt_mock_paper(text[])                           from public, anon, authenticated;
revoke all on function public._sanitize_sjt_mock_answers(text[], jsonb)         from public, anon, authenticated;
revoke all on function public._sanitize_sjt_mock_flags(text[], jsonb)           from public, anon, authenticated;
revoke all on function public._sjt_mock_state(public.sjt_mock_attempts)         from public, anon, authenticated;
revoke all on function public._sjt_mock_summary(public.sjt_mock_attempts)       from public, anon, authenticated;
revoke all on function public._sjt_mock_review_payload(public.sjt_mock_attempts) from public, anon, authenticated;
revoke all on function public._finalize_sjt_mock(uuid, text)                    from public, anon, authenticated;

revoke all   on function public.get_sjt_mock_overview()                         from public, anon;
revoke all   on function public.get_active_sjt_mock()                           from public, anon;
revoke all   on function public.start_sjt_mock(text)                            from public, anon;
revoke all   on function public.save_sjt_mock_progress(uuid, jsonb, jsonb, int) from public, anon;
revoke all   on function public.submit_sjt_mock(uuid, jsonb, jsonb, text)       from public, anon;
revoke all   on function public.get_sjt_mock_review(uuid)                       from public, anon;
grant execute on function public.get_sjt_mock_overview()                         to authenticated;
grant execute on function public.get_active_sjt_mock()                           to authenticated;
grant execute on function public.start_sjt_mock(text)                            to authenticated;
grant execute on function public.save_sjt_mock_progress(uuid, jsonb, jsonb, int) to authenticated;
grant execute on function public.submit_sjt_mock(uuid, jsonb, jsonb, text)       to authenticated;
grant execute on function public.get_sjt_mock_review(uuid)                       to authenticated;

-- Belt and braces: table privileges (RLS above already enforces these).
revoke all on public.sjt_items from anon, authenticated;
revoke all on public.sjt_mock_attempts from anon;
revoke insert, update, delete, truncate, references, trigger on public.sjt_mock_attempts from authenticated;
