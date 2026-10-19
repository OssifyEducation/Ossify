-- Professional Dilemmas practice bank moves out of the public js/sjt-questions.js into the
-- database. Items are loaded by scripts/seed-sjt-practice.js (temporary token-guarded loader).
-- Practice questions for Professional Dilemmas: private table, signed-in read via RPC.
create table if not exists public.sjt_practice_items (
  id         text primary key check (id ~ '^sjt-[0-9]{3}$'),
  position   integer not null check (position > 0),
  question   jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.sjt_practice_items enable row level security;
revoke all on public.sjt_practice_items from anon, authenticated;

create or replace function public.get_sjt_practice_bank()
returns jsonb language plpgsql stable security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not_signed_in'; end if;
  return coalesce((select jsonb_agg(question order by position) from sjt_practice_items), '[]'::jsonb);
end $$;
revoke all on function public.get_sjt_practice_bank() from public, anon;
grant execute on function public.get_sjt_practice_bank() to authenticated;
