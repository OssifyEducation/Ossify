-- ════════════════════════════════════════════════════════════════════════════
-- Revision queue + weak-area practice
--
-- Revision queue = questions whose FIRST attempt was wrong (user_progress.
-- answered_correctly = false) and that have not since been answered correctly
-- in revision. Answering one correctly in revision sets revised_correct_at and
-- removes it from the queue; a wrong revision answer leaves it there. Revision
-- answers never award XP (XP stays first-attempt only) and never change the
-- recorded first attempt, so scores and the leaderboard are unaffected.
--
-- Weak areas = the user's 3 lowest-accuracy specialties with ≥5 answers;
-- questions are drawn from them, unseen questions first.
-- All functions grade on the server and act only on the caller's own data.
-- ════════════════════════════════════════════════════════════════════════════
alter table public.user_progress add column if not exists revised_correct_at timestamptz;
create index if not exists user_progress_revision on public.user_progress (user_id) where answered_correctly = false and revised_correct_at is null;

create or replace function public.get_revision_queue(p_count integer default 0)
returns table (id integer, paper text, topic text, type text, domain text, question_id text, emq_theme text,
               stem text, options jsonb, correct_answer integer, explanation text, tutor_content jsonb)
language sql stable security definer set search_path = public as $$
  select q.id, q.paper, q.topic, q.type, q.domain, q.question_id, q.emq_theme, q.stem, q.options, q.correct_answer, q.explanation, q.tutor_content
    from user_progress u join questions q on q.id = u.question_id
   where u.user_id = auth.uid() and u.answered_correctly = false and u.revised_correct_at is null
   order by u.answered_at, q.id
   limit greatest(1, least(coalesce(nullif(p_count, 0), 100), 100));
$$;

create or replace function public.record_revision(p_question_id integer, p_selected integer)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_correct int; v_nopt int; v_ok boolean; v_hit int; v_left int;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  select correct_answer, jsonb_array_length(options) into v_correct, v_nopt from questions where id = p_question_id;
  if not found or p_selected is null or p_selected < 0 or p_selected >= v_nopt then raise exception 'invalid_answer'; end if;
  v_ok := (p_selected = v_correct);
  update user_progress set review_count = coalesce(review_count, 0) + 1,
         revised_correct_at = case when v_ok then now() else revised_correct_at end
   where user_id = v_uid and question_id = p_question_id and answered_correctly = false and revised_correct_at is null;
  get diagnostics v_hit = row_count;
  select count(*) into v_left from user_progress where user_id = v_uid and answered_correctly = false and revised_correct_at is null;
  return jsonb_build_object('is_correct', v_ok, 'in_queue', v_hit > 0, 'cleared', v_ok and v_hit > 0, 'remaining', v_left);
end $$;

create or replace function public.get_weak_area_questions(p_count integer default 0)
returns table (id integer, paper text, topic text, type text, domain text, question_id text, emq_theme text,
               stem text, options jsonb, correct_answer integer, explanation text, tutor_content jsonb)
language sql volatile security definer set search_path = public as $$
  with mine as (
    select q.topic, count(*) as n, count(*) filter (where u.answered_correctly) as c
      from user_progress u join questions q on q.id = u.question_id
     where u.user_id = auth.uid() group by 1 having count(*) >= 5),
  weak as (select topic from mine order by c::numeric / n, n desc limit 3),
  cand as (
    select q.*, exists (select 1 from user_progress u where u.user_id = auth.uid() and u.question_id = q.id) as seen
      from questions q where q.topic in (select topic from weak))
  select id, paper, topic, type, domain, question_id, emq_theme, stem, options, correct_answer, explanation, tutor_content
    from cand
   order by seen, random()
   limit greatest(1, least(coalesce(nullif(p_count, 0), 20), 100));
$$;

-- dashboard insights: add revision_count and weak_topics
create or replace function public.get_dashboard_insights()
returns jsonb language sql stable security definer set search_path = public as $$
with me as (select auth.uid() as uid),
up as (select u.question_id, u.answered_correctly, u.answered_at, u.revised_correct_at, q.topic
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
  'platform', (select case when count(*) >= 5 then jsonb_build_object('doctors', count(*), 'avg_accuracy', round(avg(c * 100.0 / n), 1)) end from others),
  'revision_count', (select count(*) from up where answered_correctly = false and revised_correct_at is null),
  'weak_topics', (select coalesce(jsonb_agg(topic), '[]'::jsonb) from (select topic from per where attempted >= 5 order by correct::numeric / attempted, attempted desc limit 3) w)
) end;
$$;

revoke all on function public.get_revision_queue(integer) from public, anon;
revoke all on function public.record_revision(integer, integer) from public, anon;
revoke all on function public.get_weak_area_questions(integer) from public, anon;
revoke all on function public.get_dashboard_insights() from public, anon;
grant execute on function public.get_revision_queue(integer), public.record_revision(integer, integer),
                          public.get_weak_area_questions(integer), public.get_dashboard_insights() to authenticated;
