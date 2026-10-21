-- Flag CPS questions for review. One row per doctor per flagged question.
-- Flags come from the Flag button on practice questions and from the Timed Exam
-- (flags made during an exam are added when it is submitted). The dashboard
-- "Flagged for review" box counts them and opens practice with them loaded.
-- Everything goes through the functions below, which only touch the signed-in
-- doctor's own rows.

create table if not exists public.flagged_questions (
  user_id     uuid    not null references auth.users(id) on delete cascade,
  question_id integer not null references public.questions(id) on delete cascade,
  flagged_at  timestamptz not null default now(),
  primary key (user_id, question_id)
);
alter table public.flagged_questions enable row level security;
revoke all on public.flagged_questions from anon, authenticated;

create or replace function public.flag_question(p_question integer)
returns boolean language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid();
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  if not exists (select 1 from questions where id = p_question) then raise exception 'not_found'; end if;
  if (select count(*) from flagged_questions where user_id = v_uid) >= 2000 then raise exception 'limit_reached'; end if;
  insert into flagged_questions (user_id, question_id) values (v_uid, p_question) on conflict do nothing;
  return true;
end $$;

create or replace function public.unflag_question(p_question integer)
returns boolean language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid();
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  delete from flagged_questions where user_id = v_uid and question_id = p_question;
  return true;
end $$;

-- Several at once (used when a Timed Exam is submitted). Unknown ids are ignored.
create or replace function public.flag_questions(p_questions integer[])
returns integer language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); n integer;
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  if coalesce(array_length(p_questions, 1), 0) = 0 then return 0; end if;
  if array_length(p_questions, 1) > 200 then raise exception 'too_many'; end if;
  insert into flagged_questions (user_id, question_id)
  select v_uid, q.id from questions q where q.id = any(p_questions)
  on conflict do nothing;
  get diagnostics n = row_count;
  return n;
end $$;

create or replace function public.get_flagged_ids()
returns setof integer language sql stable security definer set search_path = public as $$
  select question_id from flagged_questions where user_id = auth.uid();
$$;

-- Flagged questions in the same shape as get_random_questions, newest flags first.
create or replace function public.get_flagged_questions(p_count integer default 0)
returns table(id integer, paper text, topic text, type text, domain text, question_id text, emq_theme text,
              stem text, options jsonb, correct_answer integer, explanation text, tutor_content jsonb)
language sql stable security definer set search_path = public as $$
  select q.id, q.paper, q.topic, q.type, q.domain, q.question_id, q.emq_theme,
         q.stem, q.options, q.correct_answer, q.explanation, q.tutor_content
  from flagged_questions f join questions q on q.id = f.question_id
  where f.user_id = auth.uid()
  order by f.flagged_at desc
  limit case when p_count > 0 then p_count else 2000 end;
$$;

revoke all on function public.flag_question(integer)          from public, anon;
revoke all on function public.unflag_question(integer)        from public, anon;
revoke all on function public.flag_questions(integer[])       from public, anon;
revoke all on function public.get_flagged_ids()               from public, anon;
revoke all on function public.get_flagged_questions(integer)  from public, anon;
grant execute on function public.flag_question(integer)         to authenticated;
grant execute on function public.unflag_question(integer)       to authenticated;
grant execute on function public.flag_questions(integer[])      to authenticated;
grant execute on function public.get_flagged_ids()              to authenticated;
grant execute on function public.get_flagged_questions(integer) to authenticated;
