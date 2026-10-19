-- Professional Dilemmas practice progress (dashboard bar).
--
-- Each practice answer is marked on the server with the same rules as the mocks
-- (_sjt_mock_score: ranking 4 marks per option minus 1 per place out; multiple
-- choice 4 marks per keyed option) and saved, one row per doctor per question.
-- Answering a question again replaces the earlier result, so the dashboard shows
-- where the doctor is now. The dashboard reads totals with get_sjt_practice_progress().

create table if not exists public.sjt_practice_answers (
  user_id           uuid not null references auth.users(id) on delete cascade,
  item_id           text not null references public.sjt_practice_items(id) on delete cascade,
  marks             integer not null check (marks >= 0),
  max_marks         integer not null check (max_marks > 0),
  response          jsonb not null,
  attempts          integer not null default 1,
  first_answered_at timestamptz not null default now(),
  last_answered_at  timestamptz not null default now(),
  primary key (user_id, item_id)
);
alter table public.sjt_practice_answers enable row level security;
revoke all on public.sjt_practice_answers from anon, authenticated;

-- p_response: option ids, e.g. ["C","A","D","B"] (ranking, best first) or ["A","D","E"] (choose 3)
create or replace function public.record_sjt_practice_answer(p_item text, p_response jsonb)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); q jsonb; v_marks int; v_max int;
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  select question into q from sjt_practice_items where id = p_item;
  if q is null then raise exception 'not_found'; end if;
  -- same checks as the page: right number of distinct, known options
  if jsonb_typeof(p_response) is distinct from 'array'
     or jsonb_array_length(p_response) <> _sjt_mock_needed(q)
     or exists (select 1 from jsonb_array_elements(p_response) x where jsonb_typeof(x) <> 'string')
     or exists (select 1 from jsonb_array_elements_text(p_response) x
                 where not exists (select 1 from jsonb_array_elements(q->'options') o where o->>'id' = x))
     or (select count(distinct x) from jsonb_array_elements_text(p_response) x) <> jsonb_array_length(p_response) then
    raise exception 'invalid_response';
  end if;
  v_marks := _sjt_mock_score(q, p_response);
  v_max   := _sjt_mock_max(q);
  insert into sjt_practice_answers (user_id, item_id, marks, max_marks, response)
  values (v_uid, p_item, v_marks, v_max, p_response)
  on conflict (user_id, item_id) do update
     set marks = excluded.marks, max_marks = excluded.max_marks, response = excluded.response,
         attempts = sjt_practice_answers.attempts + 1, last_answered_at = now();
  return jsonb_build_object('marks', v_marks, 'max', v_max);
end $$;

create or replace function public.get_sjt_practice_progress()
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare v_uid uuid := auth.uid();
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  return (
    select jsonb_build_object(
      'bank_total', (select count(*) from sjt_practice_items),
      'answered',   count(a.item_id),
      'marks',      coalesce(sum(a.marks), 0),
      'max_marks',  coalesce(sum(a.max_marks), 0),
      'strong',     count(*) filter (where a.marks * 100 >= a.max_marks * 80),
      'mid',        count(*) filter (where a.marks * 100 >= a.max_marks * 50 and a.marks * 100 < a.max_marks * 80),
      'low',        count(*) filter (where a.marks * 100 < a.max_marks * 50))
    from sjt_practice_answers a
    join sjt_practice_items i on i.id = a.item_id
    where a.user_id = v_uid);
end $$;

revoke all on function public.record_sjt_practice_answer(text, jsonb) from public, anon;
revoke all on function public.get_sjt_practice_progress()            from public, anon;
grant execute on function public.record_sjt_practice_answer(text, jsonb) to authenticated;
grant execute on function public.get_sjt_practice_progress()            to authenticated;
