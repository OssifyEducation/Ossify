-- Head-to-Head: fix player search + live duel updates
-- 1) New signups: copy the name the user typed into profiles.full_name
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    nullif(trim(coalesce(
      new.raw_user_meta_data->>'full_name',
      concat_ws(' ', new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'surname')
    )), '')
  );
  return new;
end;
$$;

-- 2) Backfill existing profiles whose name is in auth metadata but never reached profiles
update public.profiles p
set full_name = nullif(trim(coalesce(
      u.raw_user_meta_data->>'full_name',
      concat_ws(' ', u.raw_user_meta_data->>'first_name', u.raw_user_meta_data->>'surname')
    )), '')
from auth.users u
where u.id = p.id
  and (p.full_name is null or p.full_name = '');

-- 3) Search RPC: case-insensitive, partial match on name/username, exact match on email.
--    Returns no email addresses, so players can be found by email without exposing them.
create or replace function public.search_players(p_query text)
returns table (id uuid, full_name text, username text, hospital_trust text)
language sql
stable
security definer
set search_path = public
as $$
  with q as (select lower(trim(both from ltrim(trim(p_query), '@'))) as v)
  select p.id, p.full_name, p.username, p.hospital_trust
  from public.profiles p, q
  where auth.uid() is not null
    and p.id <> auth.uid()
    and length(q.v) >= 2
    and (
      lower(p.username) like '%' || q.v || '%'
      or lower(p.full_name) like '%' || q.v || '%'
      or lower(p.email) = q.v
    )
  order by (lower(p.username) = q.v) desc nulls last,
           (lower(p.email) = q.v) desc nulls last,
           p.full_name nulls last
  limit 8;
$$;

revoke all on function public.search_players(text) from public, anon;
grant execute on function public.search_players(text) to authenticated;

-- 4) Duels list should refresh live when a challenge arrives / is played
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'duels'
  ) then
    alter publication supabase_realtime add table public.duels;
  end if;
end $$;
