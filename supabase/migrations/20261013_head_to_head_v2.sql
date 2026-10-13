-- ════════════════════════════════════════════════════════════════════════════
-- Head-to-Head v2
--   1. Challenges expire (48h for the challenger to play, then 72h for the
--      opponent); challengers can cancel before the opponent plays.
--   2. Winning awards XP (25 per win, 10 each for an exact draw) through the
--      xp_events ledger, and the Duel Victor badge on the first win.
--   3. Scoring is server-side: questions are served without answers, answers
--      are graded in the database, time is measured by the server, and
--      clients can no longer insert/update duels directly.
--   4. Duels require an active subscription (both players).
--   5. Profiles are no longer readable by every user (emails were exposed);
--      other players' public fields come from get_public_profiles().
--   6. Usernames are normalised: lowercase a-z 0-9 _ . (3–20 chars).
-- ════════════════════════════════════════════════════════════════════════════

-- ── Schema ──────────────────────────────────────────────────────────────────
alter table public.duels
  add column if not exists expires_at            timestamptz,
  add column if not exists challenger_started_at timestamptz,
  add column if not exists opponent_started_at   timestamptz,
  add column if not exists challenger_answers    jsonb,
  add column if not exists opponent_answers      jsonb,
  add column if not exists winner_id             uuid references auth.users(id);

update public.duels set expires_at = created_at + interval '48 hours' where expires_at is null;
alter table public.duels alter column expires_at set default now() + interval '48 hours';
alter table public.duels alter column created_at set default now();

alter table public.duels drop constraint if exists duels_status_check;
alter table public.duels add constraint duels_status_check
  check (status in ('pending','completed','declined','cancelled','expired'));

alter table public.xp_events drop constraint if exists xp_events_source_check;
alter table public.xp_events add constraint xp_events_source_check
  check (source in ('question','badge','weekly','legacy','duel'));

-- Usernames: lowercase so the unique index is effectively case-insensitive
update public.profiles set username = lower(btrim(username)) where username is not null and username <> lower(btrim(username));
update public.profiles set username = null where username is not null and username = '';
alter table public.profiles drop constraint if exists profiles_username_format;
alter table public.profiles add constraint profiles_username_format
  check (username is null or username ~ '^[a-z0-9_.]{3,20}$') not valid;

-- ── Writes only through the functions below ────────────────────────────────
alter policy "Users can create duels" on public.duels with check (false);
alter policy "Users can update own duels" on public.duels using (false) with check (false);

-- ── Helpers ────────────────────────────────────────────────────────────────
create or replace function public._has_duel_access(p_user uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from profiles
     where id = p_user
       and subscription_status = 'active'
       and (subscription_expires_at is null or subscription_expires_at > now())
  );
$$;

create or replace function public._expire_duels()
returns void language sql volatile security definer set search_path = public as $$
  update duels set status = 'expired'
   where status = 'pending' and expires_at < now();
$$;

create or replace function public._display_name(p profiles)
returns text language sql stable as $$
  select coalesce(nullif(btrim(p.full_name), ''),
                  case when nullif(btrim(p.username), '') is not null then '@' || btrim(p.username) end,
                  'Ossify player');
$$;

-- ── Public profile lookup (no email) ───────────────────────────────────────
create or replace function public.get_public_profiles(p_ids uuid[])
returns table (id uuid, full_name text, username text, hospital_trust text)
language sql stable security definer set search_path = public as $$
  select p.id, p.full_name, p.username, p.hospital_trust
    from profiles p
   where auth.uid() is not null and p.id = any(p_ids)
   limit 500;
$$;

-- ── Duel access check for the page ─────────────────────────────────────────
create or replace function public.duel_access()
returns boolean language sql stable security definer set search_path = public as $$
  select public._has_duel_access(auth.uid());
$$;

-- ── Create ─────────────────────────────────────────────────────────────────
create or replace function public.create_duel(p_opponent uuid)
returns uuid language plpgsql volatile security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid();
  v_ids int[];
  v_id  uuid;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  if not public._has_duel_access(v_uid) then raise exception 'duel_requires_subscription'; end if;
  if p_opponent is null or p_opponent = v_uid then raise exception 'invalid_opponent'; end if;
  if not exists (select 1 from profiles where id = p_opponent) then raise exception 'invalid_opponent'; end if;
  if not public._has_duel_access(p_opponent) then raise exception 'opponent_no_access'; end if;

  perform public._expire_duels();
  if exists (select 1 from duels
              where status = 'pending'
                and ((challenger_id = v_uid and opponent_id = p_opponent)
                  or (challenger_id = p_opponent and opponent_id = v_uid))) then
    raise exception 'duel_already_open';
  end if;
  if (select count(*) from duels where challenger_id = v_uid and created_at > now() - interval '24 hours') >= 20 then
    raise exception 'too_many_challenges';
  end if;

  select array_agg(id order by r) into v_ids from (
    select id, random() r from questions
     where type = 'SBA' and jsonb_typeof(options) = 'array' and jsonb_array_length(options) >= 2
     order by r limit 10
  ) q;
  if coalesce(array_length(v_ids, 1), 0) < 10 then raise exception 'not_enough_questions'; end if;

  insert into duels (challenger_id, opponent_id, question_ids, status, expires_at)
  values (v_uid, p_opponent, v_ids, 'pending', now() + interval '48 hours')
  returning id into v_id;
  return v_id;
end $$;

-- ── Start (or resume) your turn: questions without answers ────────────────
create or replace function public.start_duel_turn(p_duel uuid)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare
  v_uid  uuid := auth.uid();
  d      duels;
  v_role text;
  v_started timestamptz;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  if not public._has_duel_access(v_uid) then raise exception 'duel_requires_subscription'; end if;
  perform public._expire_duels();

  select * into d from duels where id = p_duel for update;
  if not found or v_uid not in (d.challenger_id, d.opponent_id) then raise exception 'duel_not_found'; end if;
  if d.status = 'expired' then raise exception 'duel_expired'; end if;
  if d.status <> 'pending' then raise exception 'duel_closed'; end if;

  if v_uid = d.challenger_id then
    v_role := 'challenger';
    if d.challenger_score is not null then raise exception 'turn_already_played'; end if;
    v_started := coalesce(d.challenger_started_at, now());
    update duels set challenger_started_at = v_started where id = d.id;
  else
    v_role := 'opponent';
    if d.challenger_score is null then raise exception 'waiting_for_challenger'; end if;
    if d.opponent_score is not null then raise exception 'turn_already_played'; end if;
    v_started := coalesce(d.opponent_started_at, now());
    update duels set opponent_started_at = v_started where id = d.id;
  end if;

  return jsonb_build_object(
    'duel_id', d.id,
    'role', v_role,
    'started_at', v_started,
    'elapsed', greatest(0, extract(epoch from now() - v_started))::int,
    'questions', (
      select coalesce(jsonb_agg(jsonb_build_object('id', q.id, 'stem', q.stem, 'options', q.options) order by x.o), '[]'::jsonb)
        from unnest(d.question_ids) with ordinality x(qid, o)
        join questions q on q.id = x.qid
    )
  );
end $$;

-- ── Submit your turn: graded here ─────────────────────────────────────────
-- p_answers: [{ "question_id": <questions.id>, "selected": <option index> }]
create or replace function public.submit_duel_turn(p_duel uuid, p_answers jsonb)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare
  v_uid   uuid := auth.uid();
  d       duels;
  v_role  text;
  v_score int;
  v_time  int;
  v_graded jsonb;
  v_winner uuid;
  v_done  boolean := false;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  if jsonb_typeof(p_answers) <> 'array' or jsonb_array_length(p_answers) > 50 then raise exception 'invalid_answers'; end if;

  select * into d from duels where id = p_duel for update;
  if not found or v_uid not in (d.challenger_id, d.opponent_id) then raise exception 'duel_not_found'; end if;
  if d.status <> 'pending' then raise exception 'duel_closed'; end if;

  v_role := case when v_uid = d.challenger_id then 'challenger' else 'opponent' end;
  if v_role = 'challenger' and (d.challenger_score is not null or d.challenger_started_at is null) then raise exception 'turn_not_active'; end if;
  if v_role = 'opponent'   and (d.opponent_score   is not null or d.opponent_started_at   is null) then raise exception 'turn_not_active'; end if;
  -- A turn started before expiry may be finished; a stale one may not.
  if d.expires_at < now() - interval '1 hour' then
    update duels set status = 'expired' where id = d.id;
    raise exception 'duel_expired';
  end if;

  with given as (
    select distinct on (qid) qid, sel from (
      select case when jsonb_typeof(a->'question_id') = 'number' then (a->>'question_id')::numeric::int end qid,
             case when jsonb_typeof(a->'selected')    = 'number' then (a->>'selected')::numeric::int    end sel,
             o
        from jsonb_array_elements(p_answers) with ordinality x(a, o)
    ) r where qid is not null order by qid, o
  )
  select coalesce(sum(case when g.sel = q.correct_answer then 1 else 0 end), 0),
         jsonb_agg(jsonb_build_object('question_id', q.id, 'selected', g.sel,
                                      'correct_answer', q.correct_answer,
                                      'is_correct', coalesce(g.sel = q.correct_answer, false)) order by x.o)
    into v_score, v_graded
    from unnest(d.question_ids) with ordinality x(qid, o)
    join questions q on q.id = x.qid
    left join given g on g.qid = q.id;

  if v_role = 'challenger' then
    v_time := greatest(1, extract(epoch from now() - d.challenger_started_at))::int;
    update duels set challenger_score = v_score, challenger_time = v_time, challenger_answers = v_graded,
                     expires_at = now() + interval '72 hours'
     where id = d.id returning * into d;
  else
    v_time := greatest(1, extract(epoch from now() - d.opponent_started_at))::int;
    v_winner := case
      when v_score > d.challenger_score then d.opponent_id
      when v_score < d.challenger_score then d.challenger_id
      when v_time  < d.challenger_time  then d.opponent_id
      when v_time  > d.challenger_time  then d.challenger_id
      else null end;
    update duels set opponent_score = v_score, opponent_time = v_time, opponent_answers = v_graded,
                     status = 'completed', completed_at = now(), winner_id = v_winner
     where id = d.id returning * into d;
    v_done := true;

    if v_winner is not null then
      insert into xp_events (user_id, source, source_key, xp)
      values (v_winner, 'duel', d.id::text, 25) on conflict do nothing;
      insert into user_badges (user_id, badge_key) values (v_winner, 'duel_winner')
      on conflict (user_id, badge_key) do nothing;
    else
      insert into xp_events (user_id, source, source_key, xp)
      values (d.challenger_id, 'duel', d.id::text, 10), (d.opponent_id, 'duel', d.id::text, 10)
      on conflict do nothing;
    end if;
  end if;

  return jsonb_build_object(
    'role', v_role, 'score', v_score, 'time', v_time, 'total', array_length(d.question_ids, 1),
    'answers', v_graded, 'completed', v_done,
    'challenger_score', d.challenger_score, 'challenger_time', d.challenger_time,
    'opponent_score', d.opponent_score, 'opponent_time', d.opponent_time,
    'winner_id', d.winner_id,
    'xp_awarded', case when not v_done then 0 when d.winner_id = v_uid then 25 when d.winner_id is null then 10 else 0 end
  );
end $$;

-- ── Cancel / decline ───────────────────────────────────────────────────────
create or replace function public.cancel_duel(p_duel uuid)
returns void language plpgsql volatile security definer set search_path = public as $$
begin
  update duels set status = 'cancelled'
   where id = p_duel and challenger_id = auth.uid() and status = 'pending' and opponent_started_at is null;
  if not found then raise exception 'cannot_cancel'; end if;
end $$;

create or replace function public.decline_duel(p_duel uuid)
returns void language plpgsql volatile security definer set search_path = public as $$
begin
  update duels set status = 'declined'
   where id = p_duel and opponent_id = auth.uid() and status = 'pending' and opponent_started_at is null;
  if not found then raise exception 'cannot_decline'; end if;
end $$;

-- ── My duels (expires stale ones first) ────────────────────────────────────
create or replace function public.get_my_duels(p_limit int default 30)
returns table (id uuid, role text, other_id uuid, other_name text, other_username text,
               status text, my_score int, their_score int, my_time int, their_time int,
               total int, winner_id uuid, created_at timestamptz, expires_at timestamptz,
               completed_at timestamptz, my_turn boolean, my_started boolean)
language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid();
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;
  perform public._expire_duels();
  return query
  select d.id,
         case when d.challenger_id = v_uid then 'challenger' else 'opponent' end,
         o.id, public._display_name(o), o.username,
         d.status,
         case when d.challenger_id = v_uid then d.challenger_score else d.opponent_score end,
         case when d.challenger_id = v_uid then d.opponent_score else d.challenger_score end,
         case when d.challenger_id = v_uid then d.challenger_time else d.opponent_time end,
         case when d.challenger_id = v_uid then d.opponent_time else d.challenger_time end,
         coalesce(array_length(d.question_ids, 1), 0),
         d.winner_id, d.created_at, d.expires_at, d.completed_at,
         d.status = 'pending' and (
           (d.challenger_id = v_uid and d.challenger_score is null) or
           (d.opponent_id = v_uid and d.challenger_score is not null and d.opponent_score is null)),
         case when d.challenger_id = v_uid then d.challenger_started_at is not null else d.opponent_started_at is not null end
    from duels d
    join profiles o on o.id = case when d.challenger_id = v_uid then d.opponent_id else d.challenger_id end
   where v_uid in (d.challenger_id, d.opponent_id)
   order by (d.status = 'pending') desc, d.created_at desc
   limit greatest(1, least(coalesce(p_limit, 30), 100));
end $$;

-- ── Profiles: own row only (others via search_players / get_public_profiles /
--    get_leaderboard, none of which return email) ───────────────────────────
alter policy "Authenticated can read profiles" on public.profiles using (auth.uid() = id);

-- ── Grants ─────────────────────────────────────────────────────────────────
revoke all on function public._has_duel_access(uuid) from public, anon, authenticated;
revoke all on function public._expire_duels() from public, anon, authenticated;
revoke all on function public._display_name(profiles) from public, anon, authenticated;
do $$
declare f text;
begin
  foreach f in array array[
    'public.get_public_profiles(uuid[])', 'public.duel_access()', 'public.create_duel(uuid)',
    'public.start_duel_turn(uuid)', 'public.submit_duel_turn(uuid, jsonb)', 'public.cancel_duel(uuid)',
    'public.decline_duel(uuid)', 'public.get_my_duels(integer)'] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated', f);
  end loop;
end $$;
