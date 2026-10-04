-- ════════════════════════════════════════════════════════════════════════════
-- Dashboard insights for the signed-in user (one call, server-side).
--   totals   answered / correct / bank size
--   topics   per specialty: bank_total, attempted, correct
--   daily    last 30 days: answered, correct per UTC day
--   platform average accuracy of OTHER doctors with ≥20 answers — returned only
--            when at least 5 such doctors exist (meaningful + not identifying);
--            otherwise null, and the dashboard says so instead of inventing one.
-- Returns null for anonymous callers. Read-only.
-- ════════════════════════════════════════════════════════════════════════════
create or replace function public.get_dashboard_insights()
returns jsonb language sql stable security definer set search_path = public as $$
with me as (select auth.uid() as uid),
up as (select u.question_id, u.answered_correctly, u.answered_at, q.topic
         from user_progress u join questions q on q.id = u.question_id, me
        where u.user_id = me.uid),
topics as (select topic, count(*) as bank_total from questions group by 1),
per as (select t.topic, t.bank_total, count(up.question_id) as attempted,
               count(up.question_id) filter (where up.answered_correctly) as correct
          from topics t left join up on up.topic = t.topic group by 1, 2),
days as (select d::date as day from generate_series(current_date - 29, current_date, interval '1 day') d),
daily as (select days.day, count(up.question_id) as answered,
                 count(up.question_id) filter (where up.answered_correctly) as correct
            from days left join up on (up.answered_at at time zone 'UTC')::date = days.day group by 1),
others as (select user_id, count(*) as n, count(*) filter (where answered_correctly) as c
             from user_progress, me where user_id <> me.uid group by 1 having count(*) >= 20)
select case when (select uid from me) is null then null else jsonb_build_object(
  'totals',   (select jsonb_build_object('answered', count(*), 'correct', count(*) filter (where answered_correctly),
                                         'bank_total', (select count(*) from questions)) from up),
  'topics',   (select jsonb_agg(jsonb_build_object('topic', topic, 'bank_total', bank_total, 'attempted', attempted, 'correct', correct) order by topic) from per),
  'daily',    (select jsonb_agg(jsonb_build_object('day', day, 'answered', answered, 'correct', correct) order by day) from daily),
  'platform', (select case when count(*) >= 5 then jsonb_build_object('doctors', count(*), 'avg_accuracy', round(avg(c * 100.0 / n), 1)) end from others)
) end;
$$;
revoke all on function public.get_dashboard_insights() from public, anon;
grant execute on function public.get_dashboard_insights() to authenticated;
