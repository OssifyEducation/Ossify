-- ════════════════════════════════════════════════════════════════════════════
-- SJT mock exams: paid subscribers only
--
-- Starting a mock now needs an active subscription (same rule as
-- Head-to-Head: profiles.subscription_status = 'active' and not expired).
-- Deliberately NOT gated, so nobody loses work they have done:
--   • an attempt already in progress can be resumed, saved and submitted;
--   • completed attempts can always be reviewed.
-- get_sjt_mock_overview() reports 'access' so the page can show the upgrade
-- prompt instead of Start buttons.
-- ════════════════════════════════════════════════════════════════════════════

create or replace function public._has_paid_access(p_user uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles
     where id = p_user
       and subscription_status = 'active'
       and (subscription_expires_at is null or subscription_expires_at > now())
  );
$$;

create or replace function public.start_sjt_mock(p_mock text)
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  a     public.sjt_mock_attempts;
  v_ids text[];
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;

  select * into a from sjt_mock_attempts
   where user_id = v_uid and status = 'in_progress' limit 1 for update;
  if found then
    if now() < a.deadline_at then
      return public._sjt_mock_state(a);   -- resuming is never blocked
    end if;
    perform public._finalize_sjt_mock(a.id, 'timeout');
  end if;

  if not public._has_paid_access(v_uid) then
    raise exception 'subscription_required';
  end if;

  select array_agg(id order by position) into v_ids from sjt_items where pool = p_mock;
  if coalesce(array_length(v_ids, 1), 0) <> 50 then
    raise exception 'mock_unavailable';
  end if;

  begin
    insert into sjt_mock_attempts (user_id, mock, item_ids, total_items, duration_seconds, started_at, deadline_at)
    values (v_uid, p_mock, v_ids, 50, 5700, now(), now() + interval '5700 seconds')
    returning * into a;
  exception when unique_violation then
    select * into a from sjt_mock_attempts where user_id = v_uid and status = 'in_progress' limit 1;
  end;

  return public._sjt_mock_state(a);
end;
$$;

create or replace function public.get_sjt_mock_overview()
returns jsonb
language plpgsql
volatile
security definer
set search_path = public
as $$
declare
  v_uid    uuid := auth.uid();
  a        public.sjt_mock_attempts;
  v_active jsonb;
begin
  if v_uid is null then raise exception 'not_authenticated'; end if;

  select * into a from sjt_mock_attempts where user_id = v_uid and status = 'in_progress' limit 1;
  if found then
    if now() >= a.deadline_at then
      perform public._finalize_sjt_mock(a.id, 'timeout');
    else
      v_active := jsonb_build_object('id', a.id, 'mock', a.mock, 'deadline_at', a.deadline_at,
                                     'server_now', now(), 'answered', (select count(*) from jsonb_object_keys(a.answers)),
                                     'total_items', a.total_items);
    end if;
  end if;

  return jsonb_build_object(
    'access', public._has_paid_access(v_uid),
    'active', v_active,
    'mocks', coalesce((
      select jsonb_agg(jsonb_build_object('mock', pool, 'items', n, 'ranking', r, 'multiple_choice', m) order by pool)
        from (select pool, count(*)::int n,
                     count(*) filter (where format = 'ranking')::int r,
                     count(*) filter (where format = 'multiple_choice')::int m
                from sjt_items group by pool having count(*) = 50) p), '[]'::jsonb),
    'attempts', coalesce((
      select jsonb_agg(public._sjt_mock_summary(x) order by x.completed_at desc)
        from sjt_mock_attempts x
       where x.user_id = v_uid and x.status = 'completed'), '[]'::jsonb)
  );
end;
$$;

revoke all on function public._has_paid_access(uuid) from public, anon, authenticated;
revoke all on function public.start_sjt_mock(text) from public, anon;
revoke all on function public.get_sjt_mock_overview() from public, anon;
grant execute on function public.start_sjt_mock(text) to authenticated;
grant execute on function public.get_sjt_mock_overview() to authenticated;
