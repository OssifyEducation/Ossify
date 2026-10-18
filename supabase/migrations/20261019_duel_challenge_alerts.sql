-- Head-to-Head: "Challenge requested" alert on the dashboard.
--
-- A challenge becomes playable for the opponent once the challenger has finished
-- their turn (challenger_score is set). The dashboard shows a one-time alert for
-- each such challenge, then records that the opponent has seen it, so the alert
-- appears once per challenge across all of the opponent's devices.
--
-- Pages that hold a timed exam, mock or revision session never load the alert;
-- it waits until the user is next on the dashboard.

alter table public.duels
  add column if not exists opponent_notified_at timestamptz;

-- Challenges waiting for me that I haven't been alerted about yet.
create or replace function public.get_unseen_duel_challenges()
returns table (
  duel_id         uuid,
  challenger_name text,
  challenger_user text,
  expires_at      timestamptz
)
language sql
security definer
set search_path = public
as $$
  select d.id,
         nullif(trim(p.full_name), ''),
         nullif(trim(p.username), ''),
         d.expires_at
    from duels d
    join profiles p on p.id = d.challenger_id
   where d.opponent_id = auth.uid()
     and d.status = 'pending'
     and d.challenger_score is not null
     and d.opponent_score is null
     and d.opponent_notified_at is null
     and d.expires_at > now()
   order by d.created_at;
$$;

-- Mark alerts as seen. Only ever touches the caller's own incoming challenges.
create or replace function public.ack_duel_challenges(p_ids uuid[])
returns void
language sql
security definer
set search_path = public
as $$
  update duels
     set opponent_notified_at = now()
   where id = any(p_ids)
     and opponent_id = auth.uid()
     and opponent_notified_at is null;
$$;

revoke all on function public.get_unseen_duel_challenges() from public, anon;
revoke all on function public.ack_duel_challenges(uuid[])  from public, anon;
grant execute on function public.get_unseen_duel_challenges() to authenticated;
grant execute on function public.ack_duel_challenges(uuid[])  to authenticated;
