-- Weekly Challenge: fixed weekly schedule, one live challenge at a time.
--
-- Rules (agreed with Ossi, 19 Oct 2026)
--   * Switched off until weekly_settings.launch_at is set.
--   * Challenge 1 opens at launch_at and closes on the first Tuesday 00:01 (UK time) that is
--     at least 2 days later. After that every challenge opens Wednesday 00:01 and closes
--     Tuesday 00:01. Tuesday is results day: no challenge is live.
--   * Challenges are created from a queue of question sets (weekly_questions.set_no, lowest
--     first). If the queue is empty when a slot opens, 10 SBAs are picked from the bank so the
--     feature never goes dark.
--   * Players get the questions without answers. Marking and timing happen on the server.
--     Scores (and XP, via the existing weekly_entries trigger) go live as soon as they finish.
--     Answers and explanations unlock when the challenge closes (Tuesday 00:01).
--   * At close the top entry (score, then fastest time) gets the Weekly Champion badge.
--   * A set's questions stay out of the question bank until the next challenge opens
--     (Wednesday 00:01); then they are copied into public.questions.
--   * The schedule advances lazily: every weekly RPC calls _weekly_tick() first.
--
-- Supersedes the unapplied draft 20261019_weekly_challenge_v2.sql.

-- ── Settings ────────────────────────────────────────────────────────────────
create table if not exists public.weekly_settings (
  id                 boolean primary key default true check (id),
  launch_at          timestamptz,                 -- null = Weekly Challenge switched off
  questions_per_week integer not null default 10,
  updated_at         timestamptz not null default now()
);
insert into public.weekly_settings (id) values (true) on conflict do nothing;

-- ── Held question pool (not readable by the website) ────────────────────────
create table if not exists public.weekly_questions (
  id               serial primary key,
  set_no           integer not null,
  position         integer not null,
  question_id      text not null unique,
  paper            text not null,
  topic            text,
  type             text not null default 'SBA',
  domain           text,
  stem             text not null,
  options          jsonb not null,
  correct_answer   integer not null,
  explanation      text not null default '',
  tutor_content    jsonb,
  bank_question_id integer references public.questions(id),   -- set once it is in the bank
  created_at       timestamptz not null default now(),
  unique (set_no, position)
);

alter table public.weekly_challenges
  add column if not exists number       integer unique,
  add column if not exists set_no       integer,
  add column if not exists opens_at     timestamptz,
  add column if not exists closes_at    timestamptz,
  add column if not exists finalized_at timestamptz,
  add column if not exists winner_id    uuid references auth.users(id) on delete set null,
  add column if not exists released_at  timestamptz;
comment on column public.weekly_challenges.question_ids is 'weekly_questions.id values, in question order';

-- One row per player per challenge: start time and (after submitting) their answers.
create table if not exists public.weekly_attempts (
  user_id      uuid not null references auth.users(id) on delete cascade,
  week_start   date not null,
  started_at   timestamptz not null default now(),
  submitted_at timestamptz,
  answers      jsonb,
  primary key (user_id, week_start)
);

-- Which pop-ups each player has seen ('new' = challenge live, 'results' = results day).
create table if not exists public.weekly_alert_seen (
  user_id    uuid not null references auth.users(id) on delete cascade,
  week_start date not null,
  kind       text not null check (kind in ('new', 'results')),
  seen_at    timestamptz not null default now(),
  primary key (user_id, week_start, kind)
);

alter table public.weekly_settings   enable row level security;
alter table public.weekly_questions  enable row level security;
alter table public.weekly_attempts   enable row level security;
alter table public.weekly_alert_seen enable row level security;
revoke all on public.weekly_settings, public.weekly_questions, public.weekly_attempts, public.weekly_alert_seen from anon, authenticated;

-- Scores are written only by submit_weekly_challenge(); challenges only by the schedule.
drop policy if exists "Users can insert own weekly entries" on public.weekly_entries;
revoke insert, update, delete, truncate on public.weekly_entries    from anon, authenticated;
revoke insert, update, delete, truncate on public.weekly_challenges from anon, authenticated;

-- ── Time helpers (UK time) ──────────────────────────────────────────────────
-- Tests can set ossify.test_now from a direct database session; website requests cannot.
create or replace function public._wk_now()
returns timestamptz language sql stable set search_path = public as $$
  select case when session_user = 'postgres' and nullif(current_setting('ossify.test_now', true), '') is not null
              then current_setting('ossify.test_now', true)::timestamptz
              else now() end;
$$;

-- Tuesday 00:01 UK on the given UK date's following Tuesday, or later.
create or replace function public._wk_tuesday_on_or_after(p_day date)
returns timestamptz language sql stable as $$
  select ((p_day + ((9 - extract(isodow from p_day)::int) % 7))::timestamp + interval '1 minute')
         at time zone 'Europe/London';
$$;

-- First challenge: closes on the first Tuesday 00:01 at least 2 days after launch.
create or replace function public._wk_first_close(p_launch timestamptz)
returns timestamptz language plpgsql stable as $$
declare v timestamptz := public._wk_tuesday_on_or_after(((p_launch at time zone 'Europe/London')::date));
begin
  while v < p_launch + interval '2 days' loop
    v := (((v at time zone 'Europe/London') + interval '7 days') at time zone 'Europe/London');
  end loop;
  return v;
end $$;

-- Next challenge opens the day after the previous one closes (Wednesday 00:01 UK).
create or replace function public._wk_next_open(p_close timestamptz)
returns timestamptz language sql stable as $$
  select ((p_close at time zone 'Europe/London') + interval '1 day') at time zone 'Europe/London';
$$;

-- A Wednesday 00:01 challenge closes the following Tuesday 00:01 (UK).
create or replace function public._wk_close_for(p_open timestamptz)
returns timestamptz language sql stable as $$
  select ((p_open at time zone 'Europe/London') + interval '6 days') at time zone 'Europe/London';
$$;

-- ── Schedule engine ─────────────────────────────────────────────────────────
create or replace function public._weekly_tick()
returns void language plpgsql volatile security definer set search_path = public as $$
declare
  s weekly_settings; v_now timestamptz := _wk_now(); last weekly_challenges; c weekly_challenges;
  v_open timestamptz; v_close timestamptz; v_set int; v_ids int[]; v_winner uuid; wq weekly_questions; v_qid int;
begin
  perform pg_advisory_xact_lock(hashtext('ossify_weekly_tick'));
  select * into s from weekly_settings where id;
  if s.launch_at is null then return; end if;

  -- 1. Open every slot whose start time has passed (normally just one).
  loop
    select * into last from weekly_challenges where number is not null order by number desc limit 1;
    if last.id is null then
      v_open := s.launch_at;                v_close := _wk_first_close(s.launch_at);
    else
      v_open := _wk_next_open(last.closes_at); v_close := _wk_close_for(v_open);
    end if;
    exit when v_open > v_now;

    select min(q.set_no) into v_set from weekly_questions q
     where not exists (select 1 from weekly_challenges w where w.set_no = q.set_no);

    if v_set is null then   -- queue empty: pick from the bank, one per specialty first
      v_set := coalesce((select max(set_no) from weekly_questions), 0) + 1;
      insert into weekly_questions (set_no, position, question_id, paper, topic, type, domain, stem, options,
                                    correct_answer, explanation, tutor_content, bank_question_id)
      select v_set, row_number() over (order by random()), p.question_id, p.paper, p.topic, p.type, p.domain,
             p.stem, p.options, p.correct_answer, coalesce(p.explanation, ''), p.tutor_content, p.id
        from (select q.*, row_number() over (partition by q.paper order by random()) rn
                from questions q
               where q.type = 'SBA' and jsonb_typeof(q.options) = 'array' and jsonb_array_length(q.options) >= 2
                 and q.correct_answer between 0 and jsonb_array_length(q.options) - 1
                 and not exists (select 1 from weekly_questions w where w.question_id = q.question_id)
               order by rn, random()
               limit s.questions_per_week) p;
    end if;

    select array_agg(id order by position) into v_ids from weekly_questions where set_no = v_set;
    if coalesce(array_length(v_ids, 1), 0) = 0 then exit; end if;
    insert into weekly_challenges (week_start, question_ids, number, set_no, opens_at, closes_at)
    values ((v_open at time zone 'Europe/London')::date, v_ids, coalesce(last.number, 0) + 1, v_set, v_open, v_close);
  end loop;

  -- 2. Close finished challenges: champion = highest score, then fastest time.
  for c in select * from weekly_challenges
            where number is not null and finalized_at is null and closes_at <= v_now
            order by number for update loop
    select e.user_id into v_winner from weekly_entries e
     where e.week_start = c.week_start
     order by e.score desc, e.time_taken asc nulls last, e.completed_at asc limit 1;
    if v_winner is not null then
      insert into user_badges (user_id, badge_key) values (v_winner, 'weekly_winner')
      on conflict (user_id, badge_key) do nothing;
    end if;
    update weekly_challenges set finalized_at = v_now, winner_id = v_winner where id = c.id;
    v_winner := null;
  end loop;

  -- 3. Once the next challenge has opened, add the previous set to the question bank.
  for c in select * from weekly_challenges
            where number is not null and released_at is null and _wk_next_open(closes_at) <= v_now
            order by number for update loop
    for wq in select * from weekly_questions where set_no = c.set_no and bank_question_id is null order by position loop
      insert into questions (question_id, paper, topic, type, domain, stem, options, correct_answer, explanation, tutor_content)
      values (wq.question_id, wq.paper, wq.topic, wq.type, wq.domain, wq.stem, wq.options, wq.correct_answer,
              wq.explanation, wq.tutor_content)
      returning id into v_qid;
      update weekly_questions set bank_question_id = v_qid where id = wq.id;
    end loop;
    update weekly_challenges set released_at = v_now where id = c.id;
  end loop;
end $$;

-- ── Read helpers ────────────────────────────────────────────────────────────
create or replace function public._wk_name(p_user uuid)
returns jsonb language sql stable security definer set search_path = public as $$
  select jsonb_build_object('full_name', nullif(trim(full_name), ''), 'username', nullif(trim(username), ''))
    from profiles where id = p_user;
$$;

create or replace function public._wk_board(p_week date, p_limit int)
returns jsonb language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(r order by r.rank, r.time_taken), '[]'::jsonb) from (
    select rank() over (order by e.score desc, e.time_taken asc nulls last) rank, e.user_id, e.score, e.total, e.time_taken,
           nullif(trim(p.full_name), '') full_name, nullif(trim(p.username), '') username
      from weekly_entries e left join profiles p on p.id = e.user_id
     where e.week_start = p_week
     order by e.score desc, e.time_taken asc nulls last, e.completed_at asc
     limit p_limit) r;
$$;

create or replace function public._wk_mine(p_week date, p_user uuid)
returns jsonb language sql stable security definer set search_path = public as $$
  select jsonb_build_object('score', e.score, 'total', e.total, 'time_taken', e.time_taken,
           'rank', 1 + (select count(*) from weekly_entries x where x.week_start = p_week and x.user_id <> p_user
                          and (x.score > e.score or (x.score = e.score and coalesce(x.time_taken, 1e9) < coalesce(e.time_taken, 1e9)))))
    from weekly_entries e where e.week_start = p_week and e.user_id = p_user;
$$;

create or replace function public._wk_summary(c weekly_challenges, p_user uuid)
returns jsonb language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'number', c.number, 'week_start', c.week_start, 'opens_at', c.opens_at, 'closes_at', c.closes_at,
    'total', coalesce(array_length(c.question_ids, 1), 0),
    'specialties', (select count(distinct paper) from weekly_questions where id = any(c.question_ids)),
    'entrants', (select count(*) from weekly_entries where week_start = c.week_start),
    'board', _wk_board(c.week_start, 10),
    'my', _wk_mine(c.week_start, p_user),
    'in_progress', exists (select 1 from weekly_attempts a where a.user_id = p_user and a.week_start = c.week_start and a.submitted_at is null),
    'champion', case when c.winner_id is null then null else
                 _wk_name(c.winner_id) || jsonb_build_object('score', e.score, 'total', e.total, 'time_taken', e.time_taken) end)
    from (select 1) one
    left join weekly_entries e on e.week_start = c.week_start and e.user_id = c.winner_id;
$$;

-- ── Website RPCs ────────────────────────────────────────────────────────────
create or replace function public.get_weekly_state()
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_now timestamptz; s weekly_settings; cur weekly_challenges; prev weekly_challenges; v_next timestamptz;
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  perform _weekly_tick();
  v_now := _wk_now();
  select * into s from weekly_settings where id;
  select * into cur  from weekly_challenges where number is not null and opens_at <= v_now and v_now < closes_at order by number desc limit 1;
  select * into prev from weekly_challenges where number is not null and closes_at <= v_now order by number desc limit 1;
  if s.launch_at is not null and cur.id is null then
    v_next := case when prev.id is null then s.launch_at else _wk_next_open(prev.closes_at) end;
  end if;
  return jsonb_build_object(
    'enabled', s.launch_at is not null,
    'server_now', v_now,
    'current', case when cur.id is null then null else _wk_summary(cur, v_uid) end,
    'last', case when prev.id is null then null else _wk_summary(prev, v_uid) end,
    'next_opens_at', v_next
  );
end $$;

-- Questions for the live challenge, WITHOUT answers. Starts the clock (once).
create or replace function public.start_weekly_challenge()
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_now timestamptz; cur weekly_challenges; a weekly_attempts;
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  perform _weekly_tick();
  v_now := _wk_now();
  select * into cur from weekly_challenges where number is not null and opens_at <= v_now and v_now < closes_at order by number desc limit 1;
  if cur.id is null then raise exception 'no_live_challenge'; end if;
  if exists (select 1 from weekly_entries where user_id = v_uid and week_start = cur.week_start) then
    raise exception 'already_completed';
  end if;
  insert into weekly_attempts (user_id, week_start, started_at) values (v_uid, cur.week_start, v_now) on conflict do nothing;
  select * into a from weekly_attempts where user_id = v_uid and week_start = cur.week_start;
  return jsonb_build_object(
    'number', cur.number, 'week_start', cur.week_start, 'closes_at', cur.closes_at,
    'started_at', a.started_at, 'server_now', v_now,
    'questions', (select jsonb_agg(jsonb_build_object('id', q.id, 'paper', q.paper, 'stem', q.stem, 'options', q.options) order by o.ord)
                    from unnest(cur.question_ids) with ordinality o(qid, ord) join weekly_questions q on q.id = o.qid));
end $$;

-- p_answers: [{ "question_id": <id from start_weekly_challenge>, "selected": 0-4 or -1 }]
create or replace function public.submit_weekly_challenge(p_answers jsonb)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_now timestamptz; a weekly_attempts; c weekly_challenges;
        v_clean jsonb; v_score int; v_total int; v_time int;
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  perform _weekly_tick();
  v_now := _wk_now();
  -- latest unsubmitted attempt; 30 minutes' grace if the challenge closed mid-attempt
  select t.* into a from weekly_attempts t join weekly_challenges w on w.week_start = t.week_start
   where t.user_id = v_uid and t.submitted_at is null and v_now < w.closes_at + interval '30 minutes'
   order by t.week_start desc limit 1;
  if a.user_id is null then
    if exists (select 1 from weekly_entries e join weekly_challenges w on w.week_start = e.week_start
                where e.user_id = v_uid and w.opens_at <= v_now and v_now < w.closes_at) then
      raise exception 'already_completed';
    end if;
    raise exception 'not_started';
  end if;
  select * into c from weekly_challenges where week_start = a.week_start;
  v_total := coalesce(array_length(c.question_ids, 1), 0);

  -- keep one sanitised answer per question in this challenge
  select coalesce(jsonb_agg(jsonb_build_object('question_id', qid, 'selected', coalesce(sel, -1)) order by ord), '[]'::jsonb),
         count(*) filter (where sel = q.correct_answer)
    into v_clean, v_score
    from unnest(c.question_ids) with ordinality o(qid, ord)
    join weekly_questions q on q.id = o.qid
    left join lateral (
      select (x->>'selected')::int sel
        from jsonb_array_elements(case when jsonb_typeof(p_answers) = 'array' then p_answers else '[]'::jsonb end) x
       where (x->>'question_id') ~ '^\d+$' and (x->>'question_id')::int = o.qid and (x->>'selected') ~ '^-?\d+$'
       limit 1) ans on true;

  v_time := greatest(1, extract(epoch from v_now - a.started_at))::int;
  update weekly_attempts set submitted_at = v_now, answers = v_clean where user_id = v_uid and week_start = a.week_start;
  insert into weekly_entries (user_id, week_start, score, total, time_taken, completed_at)
  values (v_uid, a.week_start, v_score, v_total, v_time, v_now)
  on conflict (user_id, week_start) do nothing;

  return _wk_mine(a.week_start, v_uid) || jsonb_build_object(
    'number', c.number, 'entrants', (select count(*) from weekly_entries where week_start = a.week_start),
    'review_opens_at', c.closes_at);
end $$;

-- Answers and explanations: only once the challenge has closed (Tuesday 00:01).
create or replace function public.get_weekly_review(p_number int)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_now timestamptz; c weekly_challenges; a weekly_attempts;
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  perform _weekly_tick();
  v_now := _wk_now();
  select * into c from weekly_challenges where number = p_number;
  if c.id is null then raise exception 'not_found'; end if;
  if v_now < c.closes_at then raise exception 'review_locked'; end if;
  select * into a from weekly_attempts where user_id = v_uid and week_start = c.week_start;
  return jsonb_build_object(
    'number', c.number, 'closes_at', c.closes_at, 'my', _wk_mine(c.week_start, v_uid),
    'answers', coalesce(a.answers, '[]'::jsonb),
    'questions', (select jsonb_agg(jsonb_build_object(
                    'id', q.id, 'question_id', q.question_id, 'paper', q.paper, 'topic', q.topic, 'type', q.type,
                    'domain', q.domain, 'stem', q.stem, 'options', q.options, 'correct_answer', q.correct_answer,
                    'tutor_content', q.tutor_content) order by o.ord)
                    from unnest(c.question_ids) with ordinality o(qid, ord) join weekly_questions q on q.id = o.qid));
end $$;

-- Dashboard pop-ups. 'results' (Tuesday onwards, for 8 days) takes priority over 'new'.
create or replace function public.get_weekly_alert()
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_now timestamptz; cur weekly_challenges; prev weekly_challenges; v_res jsonb; v_new jsonb;
begin
  if v_uid is null then return null; end if;
  perform _weekly_tick();
  v_now := _wk_now();
  select * into cur  from weekly_challenges where number is not null and opens_at <= v_now and v_now < closes_at order by number desc limit 1;
  select * into prev from weekly_challenges where number is not null and finalized_at is not null order by number desc limit 1;
  if prev.id is not null and v_now < prev.closes_at + interval '8 days'
     and not exists (select 1 from weekly_alert_seen where user_id = v_uid and week_start = prev.week_start and kind = 'results')
     and (exists (select 1 from weekly_entries where user_id = v_uid and week_start = prev.week_start) or prev.winner_id is not null) then
    v_res := _wk_summary(prev, v_uid) - 'board';
    v_res := v_res || jsonb_build_object('next_opens_at', case when cur.id is null then _wk_next_open(prev.closes_at) end);
  end if;
  if cur.id is not null
     and not exists (select 1 from weekly_alert_seen where user_id = v_uid and week_start = cur.week_start and kind = 'new')
     and not exists (select 1 from weekly_attempts where user_id = v_uid and week_start = cur.week_start) then
    v_new := _wk_summary(cur, v_uid) - 'board' - 'my';
    v_new := v_new || jsonb_build_object('last_champion', case when prev.id is null then null else _wk_summary(prev, v_uid)->'champion' end);
  end if;
  return jsonb_build_object('results', v_res, 'new', v_new, 'server_now', v_now);
end $$;

create or replace function public.ack_weekly_alert(p_kind text, p_week date)
returns void language sql volatile security definer set search_path = public as $$
  insert into weekly_alert_seen (user_id, week_start, kind)
  select auth.uid(), p_week, p_kind where auth.uid() is not null and p_kind in ('new', 'results')
  on conflict do nothing;
$$;

-- ── Permissions ─────────────────────────────────────────────────────────────
revoke all on function public._wk_now()                             from public, anon, authenticated;
revoke all on function public._wk_tuesday_on_or_after(date)         from public, anon, authenticated;
revoke all on function public._wk_first_close(timestamptz)          from public, anon, authenticated;
revoke all on function public._wk_next_open(timestamptz)            from public, anon, authenticated;
revoke all on function public._wk_close_for(timestamptz)            from public, anon, authenticated;
revoke all on function public._weekly_tick()                        from public, anon, authenticated;
revoke all on function public._wk_name(uuid)                        from public, anon, authenticated;
revoke all on function public._wk_board(date, int)                  from public, anon, authenticated;
revoke all on function public._wk_mine(date, uuid)                  from public, anon, authenticated;
revoke all on function public._wk_summary(public.weekly_challenges, uuid) from public, anon, authenticated;
revoke all on function public.get_weekly_state()                    from public, anon;
revoke all on function public.start_weekly_challenge()              from public, anon;
revoke all on function public.submit_weekly_challenge(jsonb)        from public, anon;
revoke all on function public.get_weekly_review(int)                from public, anon;
revoke all on function public.get_weekly_alert()                    from public, anon;
revoke all on function public.ack_weekly_alert(text, date)          from public, anon;
grant execute on function public.get_weekly_state()                 to authenticated;
grant execute on function public.start_weekly_challenge()           to authenticated;
grant execute on function public.submit_weekly_challenge(jsonb)     to authenticated;
grant execute on function public.get_weekly_review(int)             to authenticated;
grant execute on function public.get_weekly_alert()                 to authenticated;
grant execute on function public.ack_weekly_alert(text, date)       to authenticated;
