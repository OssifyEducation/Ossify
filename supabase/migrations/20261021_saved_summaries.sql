-- Saved high-yield summaries (CPS). One row per doctor per saved question.
-- The page never reads the table directly: everything goes through the functions
-- below, which only ever touch the signed-in doctor's own rows.

create table if not exists public.saved_summaries (
  user_id     uuid    not null references auth.users(id) on delete cascade,
  question_id integer not null references public.questions(id) on delete cascade,
  saved_at    timestamptz not null default now(),
  primary key (user_id, question_id)
);
alter table public.saved_summaries enable row level security;
revoke all on public.saved_summaries from anon, authenticated;

-- Save (idempotent). Only questions that actually have a high-yield summary can be saved.
create or replace function public.save_summary(p_question integer)
returns boolean language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid();
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  if not exists (select 1 from questions q where q.id = p_question
                 and length(coalesce(q.tutor_content->>'high_yield_summary', '')) > 0) then
    raise exception 'not_found';
  end if;
  if (select count(*) from saved_summaries where user_id = v_uid) >= 2000 then raise exception 'limit_reached'; end if;
  insert into saved_summaries (user_id, question_id) values (v_uid, p_question) on conflict do nothing;
  return true;
end $$;

create or replace function public.unsave_summary(p_question integer)
returns boolean language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid();
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  delete from saved_summaries where user_id = v_uid and question_id = p_question;
  return true;
end $$;

-- Just the ids, so question pages can show "Saved" on the button.
create or replace function public.get_saved_summary_ids()
returns setof integer language sql stable security definer set search_path = public as $$
  select question_id from saved_summaries where user_id = auth.uid();
$$;

-- Everything the Saved summaries page needs, newest first.
create or replace function public.get_saved_summaries()
returns table(question_id integer, question_code text, topic text, type text, domain text,
              stem text, emq_theme text, high_yield_summary text, saved_at timestamptz)
language sql stable security definer set search_path = public as $$
  select q.id, q.question_id, q.topic, q.type, q.domain, q.stem, q.emq_theme,
         q.tutor_content->>'high_yield_summary', s.saved_at
  from saved_summaries s join questions q on q.id = s.question_id
  where s.user_id = auth.uid()
  order by s.saved_at desc;
$$;

revoke all on function public.save_summary(integer)      from public, anon;
revoke all on function public.unsave_summary(integer)    from public, anon;
revoke all on function public.get_saved_summary_ids()    from public, anon;
revoke all on function public.get_saved_summaries()      from public, anon;
grant execute on function public.save_summary(integer)   to authenticated;
grant execute on function public.unsave_summary(integer) to authenticated;
grant execute on function public.get_saved_summary_ids() to authenticated;
grant execute on function public.get_saved_summaries()   to authenticated;
