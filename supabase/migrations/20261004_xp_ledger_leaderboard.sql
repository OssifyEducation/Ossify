-- ════════════════════════════════════════════════════════════════════════════
-- XP ledger + server-side scoring pipeline + leaderboard
--
-- Before: XP was written only by the client (dashboard badge awards, weekly
-- challenge), never for answering questions; profiles.total_correct /
-- total_answered had no writer at all; correctness was supplied by the
-- client; profiles.xp/subscription/streak were user-editable; award_badge()
-- was callable by anyone for any user.
--
-- After (single source of truth):
--   user_progress   one row per user per question = first attempt (existing
--                   first-attempt-wins policy, enforced by UNIQUE(user_id,question_id))
--        │ AFTER INSERT trigger
--        ▼
--   xp_events       append-only ledger; UNIQUE(user_id, source, source_key)
--                   makes every award idempotent (question / badge / weekly)
--        │ AFTER INSERT trigger
--        ▼
--   profiles.xp, total_answered, total_correct   cached totals, updated in the
--                   same transaction; recalc_user_stats() rebuilds them exactly
--        ▼
--   get_leaderboard()   ranks by xp desc, total_correct desc (competition rank)
--
-- XP rules: correct first attempt = 10 XP, incorrect = 0 XP, repeat attempts
-- = 0 XP. Badges keep their existing xp_reward; weekly keeps score × 5.
-- ════════════════════════════════════════════════════════════════════════════

-- ── Ledger ──────────────────────────────────────────────────────────────────
create table if not exists public.xp_events (
  id          bigserial primary key,
  user_id     uuid not null references auth.users(id) on delete cascade,
  source      text not null check (source in ('question','badge','weekly','legacy')),
  source_key  text not null,
  xp          integer not null check (xp >= 0),
  created_at  timestamptz not null default now(),
  unique (user_id, source, source_key)
);
create index if not exists xp_events_user on public.xp_events (user_id);
alter table public.xp_events enable row level security;
drop policy if exists "Users can read own xp events" on public.xp_events;
create policy "Users can read own xp events" on public.xp_events for select using (auth.uid() = user_id);
revoke insert, update, delete on public.xp_events from anon, authenticated;
grant select on public.xp_events to authenticated;

create or replace function public._xp_for_answer(p_correct boolean)
returns integer language sql immutable as $$ select case when p_correct then 10 else 0 end $$;

-- ledger → cached profile total (same transaction, row-locked increment)
create or replace function public._trg_xp_event_apply()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.xp <> 0 then
    update profiles set xp = coalesce(xp, 0) + new.xp where id = new.user_id;
  end if;
  return null;
end $$;
drop trigger if exists xp_events_apply on public.xp_events;
create trigger xp_events_apply after insert on public.xp_events
  for each row execute function public._trg_xp_event_apply();

-- first attempt → counters + XP event (fires only for rows actually inserted,
-- so ON CONFLICT DO NOTHING duplicates never reach it)
create or replace function public._trg_user_progress_apply()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  update profiles set
    total_answered = coalesce(total_answered, 0) + 1,
    total_correct  = coalesce(total_correct, 0) + case when new.answered_correctly then 1 else 0 end
  where id = new.user_id;
  insert into xp_events (user_id, source, source_key, xp)
  values (new.user_id, 'question', new.question_id::text, public._xp_for_answer(coalesce(new.answered_correctly, false)))
  on conflict do nothing;
  return null;
end $$;
drop trigger if exists user_progress_apply on public.user_progress;
create trigger user_progress_apply after insert on public.user_progress
  for each row execute function public._trg_user_progress_apply();

create or replace function public._trg_user_badge_apply()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into xp_events (user_id, source, source_key, xp)
  select new.user_id, 'badge', new.badge_key, coalesce(b.xp_reward, 0) from badges b where b.key = new.badge_key
  on conflict do nothing;
  return null;
end $$;
drop trigger if exists user_badges_apply on public.user_badges;
create trigger user_badges_apply after insert on public.user_badges
  for each row execute function public._trg_user_badge_apply();

-- Weekly challenge keeps its existing rule (score × 5), awarded once per week.
-- score is still computed client-side by weekly.html, so it is bounded here.
create or replace function public._trg_weekly_entry_apply()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into xp_events (user_id, source, source_key, xp)
  values (new.user_id, 'weekly', new.week_start::text,
          5 * greatest(0, least(coalesce(new.score, 0), coalesce(new.total, 0), 20)))
  on conflict do nothing;
  return null;
end $$;
drop trigger if exists weekly_entries_apply on public.weekly_entries;
create trigger weekly_entries_apply after insert on public.weekly_entries
  for each row execute function public._trg_weekly_entry_apply();

-- ── Exact rebuild of cached totals from the sources of truth ───────────────
create or replace function public.recalc_user_stats(p_user uuid default null)
returns integer language plpgsql security definer set search_path = public as $$
declare n int;
begin
  update profiles p set
    xp             = coalesce((select sum(e.xp) from xp_events e where e.user_id = p.id), 0),
    total_answered = (select count(*) from user_progress u where u.user_id = p.id),
    total_correct  = (select count(*) from user_progress u where u.user_id = p.id and u.answered_correctly)
  where p_user is null or p.id = p_user;
  get diagnostics n = row_count;
  return n;
end $$;

-- ── Answer recording (server grades; idempotent) ───────────────────────────
-- p_answers: [{ "question_id": <questions.id>, "selected": <option index>, "time_taken": <sec, optional> }]
create or replace function public.record_answers(p_answers jsonb)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid();
  v_res jsonb;
  v_xp  int;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  if jsonb_typeof(p_answers) <> 'array' or jsonb_array_length(p_answers) > 200 then
    raise exception 'invalid_answers';
  end if;

  with input as (
    select distinct on (qid) qid, sel, tt from (
      select case when jsonb_typeof(a->'question_id') = 'number' then (a->>'question_id')::numeric end as qidn,
             case when jsonb_typeof(a->'selected')    = 'number' then (a->>'selected')::numeric    end as seln,
             case when jsonb_typeof(a->'time_taken')  = 'number' then (a->>'time_taken')::numeric  end as ttn,
             o
        from jsonb_array_elements(p_answers) with ordinality x(a, o)
    ) r
    cross join lateral (select case when qidn = trunc(qidn) and abs(qidn) < 2147483647 then qidn::int end as qid,
                               case when seln = trunc(seln) and seln between 0 and 25 then seln::int end as sel,
                               case when ttn >= 0 and ttn < 86400 then round(ttn)::int end as tt) c
    where qid is not null and sel is not null
    order by qid, o                       -- first occurrence wins within a batch
  ), graded as (
    select i.qid, i.sel, i.tt, q.correct_answer, (i.sel = q.correct_answer) as is_correct
      from input i join questions q on q.id = i.qid
     where i.sel < jsonb_array_length(q.options)
  ), ins as (
    insert into user_progress (user_id, question_id, answered_correctly, answered_at, time_taken)
    select v_uid, qid, is_correct, now(), tt from graded
    on conflict (user_id, question_id) do nothing
    returning question_id, answered_correctly
  )
  select jsonb_build_object(
           'results', coalesce(jsonb_agg(jsonb_build_object(
               'question_id', g.qid,
               'is_correct', g.is_correct,
               'first_attempt', i.question_id is not null,
               'xp_awarded', case when i.question_id is not null then public._xp_for_answer(g.is_correct) else 0 end)
             order by g.qid), '[]'::jsonb),
           'xp_awarded', coalesce(sum(case when i.question_id is not null then public._xp_for_answer(g.is_correct) else 0 end), 0))
    into v_res
    from graded g left join ins i on i.question_id = g.qid;

  select xp into v_xp from profiles where id = v_uid;
  return v_res || jsonb_build_object('xp_total', coalesce(v_xp, 0));
end $$;

create or replace function public.record_answer(p_question_id integer, p_selected integer, p_time_taken integer default null)
returns jsonb language sql volatile security definer set search_path = public as $$
  select public.record_answers(jsonb_build_array(jsonb_build_object(
    'question_id', p_question_id, 'selected', p_selected, 'time_taken', p_time_taken)));
$$;

-- ── Streak (server-side; same rules as before: UTC days) ───────────────────
create or replace function public.touch_activity()
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); p profiles;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  update profiles pr set
    current_streak   = case when pr.last_active_date = current_date then pr.current_streak
                            when pr.last_active_date = current_date - 1 then coalesce(pr.current_streak, 0) + 1
                            else 1 end,
    last_active_date = current_date
  where pr.id = v_uid
  returning * into p;
  update profiles set best_streak = greatest(coalesce(best_streak, 0), coalesce(current_streak, 0)) where id = v_uid
  returning * into p;
  return jsonb_build_object('current_streak', p.current_streak, 'best_streak', p.best_streak);
end $$;

-- ── Badges (server evaluates the same rules dashboard.html used) ───────────
create or replace function public.claim_badges()
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid();
  v_ans int; v_cor int; v_streak int; v_new jsonb;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select count(*), count(*) filter (where answered_correctly) into v_ans, v_cor from user_progress where user_id = v_uid;
  select coalesce(current_streak, 0) into v_streak from profiles where id = v_uid;
  with eligible(k) as (
    select k from (values
      ('first_correct', v_cor >= 1),
      ('streak_3',  v_streak >= 3), ('streak_7', v_streak >= 7), ('streak_30', v_streak >= 30),
      ('q_50', v_ans >= 50), ('q_100', v_ans >= 100), ('q_500', v_ans >= 500),
      ('accuracy_80', v_ans >= 20 and v_cor * 100 >= 80 * v_ans)
    ) t(k, ok) where ok
  ), ins as (
    insert into user_badges (user_id, badge_key) select v_uid, k from eligible
    on conflict (user_id, badge_key) do nothing returning badge_key
  )
  select coalesce(jsonb_agg(badge_key), '[]'::jsonb) into v_new from ins;
  return jsonb_build_object('new_badges', v_new, 'xp_total', (select xp from profiles where id = v_uid));
end $$;

-- ── Leaderboard ────────────────────────────────────────────────────────────
-- Competition ranking (1, 2, 2, 4) on xp desc, then total_correct desc.
-- Returns the top p_limit plus the caller's own row, without exposing emails.
create or replace function public.get_leaderboard(p_limit integer default 100)
returns table (rank bigint, is_me boolean, display_name text, username text, subtitle text,
               xp integer, total_correct integer, total_answered integer, accuracy numeric, current_streak integer)
language sql stable security definer set search_path = public as $$
  with ranked as (
    select rank() over (order by coalesce(p.xp,0) desc, coalesce(p.total_correct,0) desc) as rnk,
           row_number() over (order by coalesce(p.xp,0) desc, coalesce(p.total_correct,0) desc, p.id) as rn,
           p.*
      from profiles p
     where coalesce(p.xp,0) > 0 or coalesce(p.total_answered,0) > 0 or p.id = auth.uid()
  )
  select rnk, id = auth.uid(),
         coalesce(nullif(btrim(full_name), ''), nullif(btrim(username), ''), split_part(email, '@', 1), 'Doctor'),
         nullif(btrim(username), ''),
         coalesce(nullif(btrim(hospital_trust), ''), nullif(btrim(role), '')),
         coalesce(xp,0), coalesce(total_correct,0), coalesce(total_answered,0),
         case when coalesce(total_answered,0) > 0 then round(total_correct * 100.0 / total_answered, 1) else 0 end,
         coalesce(current_streak,0)
    from ranked
   where auth.uid() is not null
     and (rn <= greatest(1, least(coalesce(p_limit,100), 500)) or id = auth.uid())
   order by rn;
$$;

-- ── Timed exam: report XP earned by the attempt ────────────────────────────
alter table public.exam_attempts add column if not exists xp_earned integer;

create or replace function public._timed_exam_summary(a public.exam_attempts)
returns jsonb language sql stable as $$
  select jsonb_build_object(
    'id', a.id, 'status', a.status, 'exam_type', a.exam_type, 'started_at', a.started_at,
    'completed_at', a.completed_at, 'end_reason', a.end_reason, 'total_questions', a.total_questions,
    'correct_count', a.correct_count, 'answered_count', a.answered_count, 'percentage', a.percentage,
    'time_taken_seconds', a.time_taken_seconds, 'duration_seconds', a.duration_seconds,
    'xp_earned', a.xp_earned);
$$;
revoke all on function public._timed_exam_summary(public.exam_attempts) from public, anon, authenticated;

create or replace function public._finalize_timed_exam(p_attempt_id uuid, p_reason text)
returns public.exam_attempts language plpgsql volatile security definer set search_path = public as $$
declare
  a public.exam_attempts; v_now timestamptz := now(); v_reason text; v_taken int; v_ans int; v_per_q int; v_xp int;
begin
  select * into a from exam_attempts where id = p_attempt_id for update;
  if not found or a.status <> 'in_progress' then return a; end if;
  v_reason := case when p_reason = 'timeout' or v_now >= a.deadline_at then 'timeout' else 'finished' end;
  v_taken := least(a.duration_seconds,
                   greatest(0, ceil(extract(epoch from (least(v_now, a.deadline_at) - a.started_at)))::int));
  update exam_attempts e set
    status = 'completed', completed_at = v_now, end_reason = v_reason, time_taken_seconds = v_taken,
    results = s.results, correct_count = s.correct_n, answered_count = s.answered_n,
    percentage = round(s.correct_n * 100.0 / nullif(e.total_questions, 0), 1)
  from (
    select jsonb_agg(jsonb_build_object(
             'id', t.id, 'selected', e2.answers -> t.id::text, 'correct', q.correct_answer,
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
  v_ans := coalesce(a.answered_count, 0);
  v_per_q := case when v_ans > 0 then round(v_taken::numeric / v_ans) end;
  -- Same pipeline as practice: first attempts only; the user_progress trigger
  -- awards XP, so questions already answered elsewhere are never counted twice.
  with ins as (
    insert into user_progress (user_id, question_id, answered_correctly, answered_at, time_taken)
    select a.user_id, (k.key)::int, (k.value #>> '{}')::int = q.correct_answer, v_now, v_per_q
      from jsonb_each(a.answers) k join questions q on q.id = (k.key)::int
    on conflict (user_id, question_id) do nothing
    returning answered_correctly
  )
  select coalesce(sum(public._xp_for_answer(answered_correctly)), 0) into v_xp from ins;
  update exam_attempts set xp_earned = v_xp where id = a.id returning * into a;
  begin
    perform 1;   -- streak: same server-side rule as touch_activity()
    update profiles p set
      current_streak = case when p.last_active_date = current_date then p.current_streak
                            when p.last_active_date = current_date - 1 then coalesce(p.current_streak, 0) + 1 else 1 end,
      last_active_date = current_date
    where p.id = a.user_id;
    update profiles set best_streak = greatest(coalesce(best_streak,0), coalesce(current_streak,0)) where id = a.user_id;
  exception when others then null;
  end;
  return a;
end $$;
revoke all on function public._finalize_timed_exam(uuid, text) from public, anon, authenticated;

-- ── Lock down client writes ────────────────────────────────────────────────
-- profiles: users may edit only their own descriptive fields
revoke update on public.profiles from anon, authenticated;
grant update (full_name, username, role, hospital_trust, course_started_at, learning_path, study_mode, exam_date)
  on public.profiles to authenticated;

-- user_progress: written only by record_answers() / exam finalisation
drop policy if exists "Users can insert own progress" on public.user_progress;
revoke insert, update, delete on public.user_progress from anon, authenticated;

-- user_badges: written only by claim_badges()
drop policy if exists "Users can insert own badges" on public.user_badges;
revoke insert, update, delete on public.user_badges from anon, authenticated;

-- award_badge(any_user, any_badge) was callable by anyone, including anon
revoke all on function public.award_badge(uuid, text) from public, anon, authenticated;

revoke all on function public._xp_for_answer(boolean) from public, anon, authenticated;
revoke all on function public._trg_xp_event_apply() from public, anon, authenticated;
revoke all on function public._trg_user_progress_apply() from public, anon, authenticated;
revoke all on function public._trg_user_badge_apply() from public, anon, authenticated;
revoke all on function public._trg_weekly_entry_apply() from public, anon, authenticated;
revoke all on function public.recalc_user_stats(uuid) from public, anon, authenticated;
revoke all on function public.record_answers(jsonb) from public, anon;
revoke all on function public.record_answer(integer, integer, integer) from public, anon;
revoke all on function public.touch_activity() from public, anon;
revoke all on function public.claim_badges() from public, anon;
revoke all on function public.get_leaderboard(integer) from public, anon;
grant execute on function public.record_answers(jsonb) to authenticated;
grant execute on function public.record_answer(integer, integer, integer) to authenticated;
grant execute on function public.touch_activity() to authenticated;
grant execute on function public.claim_badges() to authenticated;
grant execute on function public.get_leaderboard(integer) to authenticated;

-- ── Backfill history (idempotent) ──────────────────────────────────────────
-- Snapshot pre-ledger XP first: the ledger trigger below increments profiles.xp.
create temp table _xp_before on commit drop as select id, coalesce(xp, 0) as xp from public.profiles;
create temp table _ledger_was_empty on commit drop as select not exists (select 1 from public.xp_events) as v;
insert into xp_events (user_id, source, source_key, xp, created_at)
select user_id, 'question', question_id::text, public._xp_for_answer(coalesce(answered_correctly,false)), coalesce(answered_at, now())
  from user_progress where user_id is not null and question_id is not null
on conflict do nothing;

insert into xp_events (user_id, source, source_key, xp, created_at)
select ub.user_id, 'badge', ub.badge_key, coalesce(b.xp_reward,0), coalesce(ub.earned_at, now())
  from user_badges ub join badges b on b.key = ub.badge_key
on conflict do nothing;

insert into xp_events (user_id, source, source_key, xp, created_at)
select user_id, 'weekly', week_start::text, 5 * greatest(0, least(coalesce(score,0), coalesce(total,0), 20)), coalesce(completed_at, now())
  from weekly_entries
on conflict do nothing;

-- XP earned under the old client-side system that no surviving record explains
-- is preserved as a single 'legacy' event, so nobody's total goes down.
insert into xp_events (user_id, source, source_key, xp)
select b.id, 'legacy', 'pre-ledger-2026-10-04', b.xp - coalesce(o.other, 0)
  from _xp_before b
  cross join lateral (select sum(e.xp) as other from xp_events e
                       where e.user_id = b.id and e.source in ('badge','weekly')) o
 where b.xp - coalesce(o.other, 0) > 0
   and (select v from _ledger_was_empty)              -- only on the first run
on conflict do nothing;

select public.recalc_user_stats();
