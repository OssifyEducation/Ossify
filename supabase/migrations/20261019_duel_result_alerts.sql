-- Head-to-Head: animated win / lose alert for the challenger.
--
-- The opponent sees the result on duel.html the moment they finish their turn.
-- The challenger finds out later, so the dashboard shows them the result once
-- (live if they are on the dashboard, otherwise on their next visit) and then
-- records challenger_result_seen_at.

alter table public.duels
  add column if not exists challenger_result_seen_at timestamptz;

-- Duels finished before this feature existed shouldn't all pop up at once.
update public.duels
   set challenger_result_seen_at = coalesce(completed_at, now())
 where status = 'completed' and challenger_result_seen_at is null;

create or replace function public.get_unseen_duel_results()
returns table (
  duel_id       uuid,
  outcome       text,   -- 'won' | 'lost' | 'draw', from the caller's point of view
  my_score      integer,
  their_score   integer,
  total         integer,
  opponent_id   uuid,
  opponent_name text,
  opponent_user text
)
language sql
security definer
set search_path = public
as $$
  select d.id,
         case when d.winner_id is null then 'draw'
              when d.winner_id = auth.uid() then 'won'
              else 'lost' end,
         d.challenger_score,
         d.opponent_score,
         coalesce(array_length(d.question_ids, 1), 10),
         d.opponent_id,
         nullif(trim(p.full_name), ''),
         nullif(trim(p.username), '')
    from duels d
    join profiles p on p.id = d.opponent_id
   where d.challenger_id = auth.uid()
     and d.status = 'completed'
     and d.challenger_result_seen_at is null
     and d.completed_at > now() - interval '30 days'
   order by d.completed_at;
$$;

create or replace function public.ack_duel_results(p_ids uuid[])
returns void
language sql
security definer
set search_path = public
as $$
  update duels
     set challenger_result_seen_at = now()
   where id = any(p_ids)
     and challenger_id = auth.uid()
     and challenger_result_seen_at is null;
$$;

revoke all on function public.get_unseen_duel_results() from public, anon;
revoke all on function public.ack_duel_results(uuid[])   from public, anon;
grant execute on function public.get_unseen_duel_results() to authenticated;
grant execute on function public.ack_duel_results(uuid[])   to authenticated;
