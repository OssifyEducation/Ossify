-- Affiliate & referral programme (agreed with Ossi, 20 Oct 2026)
--
--   * Every user gets a personal link: <site>/?ref=CODE (code created on first visit to
--     Account > Refer & earn). Partners (societies, teachers…) get named codes made by an admin.
--   * The site remembers the code for 30 days in the visitor's browser (js/ossify-ref.js) and
--     passes it with sign-up (user metadata 'referral_code'). The auth.users trigger below
--     records who referred the new account. One referrer per account, never self.
--   * Reward: cash commission. When a referred account becomes a paying subscriber (profiles.
--     subscription_status turns 'active'), a commission is recorded once, at the code's rate
--     (default 20%) of the plan price in plan_prices. Unknown plan -> status 'review' for an
--     admin to price. Admins mark commissions paid (paid manually, e.g. bank transfer).
--   * Referrers see only counts and amounts, never who signed up. Admin data is checked in the
--     database (app_admins), not just in the browser.
--   * Triggers never block a sign-up or a subscription change: any error is swallowed.

-- ── Settings and prices ─────────────────────────────────────────────────────
create table if not exists public.plan_prices (
  plan        text primary key,
  label       text not null,
  price_pence integer not null check (price_pence >= 0)
);
insert into public.plan_prices (plan, label, price_pence) values
  ('3month', '3 months', 2000), ('6month', '6 months', 2500), ('1year', '1 year', 4000), ('12month', '1 year', 4000)
on conflict (plan) do nothing;

create table if not exists public.referral_settings (
  id                     boolean primary key default true check (id),
  default_commission_pct numeric(5,2) not null default 20 check (default_commission_pct between 0 and 100),
  attribution_days       integer not null default 30
);
insert into public.referral_settings (id) values (true) on conflict do nothing;

create table if not exists public.app_admins (
  email text primary key check (email = lower(email))
);
insert into public.app_admins (email) values
  ('henryarmes@yahoo.com'), ('kavindad@hotmail.com'), ('info@ossify.co.uk')
on conflict do nothing;

-- ── Codes, referrals, commissions ───────────────────────────────────────────
create table if not exists public.referral_codes (
  code           text primary key check (code ~ '^[A-Z0-9][A-Z0-9-]{2,23}$'),
  kind           text not null check (kind in ('user', 'partner')),
  owner_id       uuid unique references auth.users(id) on delete set null,
  label          text,                    -- partner name
  contact_email  text,                    -- partner contact for payouts
  commission_pct numeric(5,2) not null default 20 check (commission_pct between 0 and 100),
  active         boolean not null default true,
  visits         integer not null default 0,
  created_at     timestamptz not null default now()
);

create table if not exists public.referrals (
  referred_id uuid primary key references auth.users(id) on delete cascade,
  code        text not null references public.referral_codes(code) on update cascade,
  created_at  timestamptz not null default now()
);
create index if not exists referrals_code_idx on public.referrals (code);

create table if not exists public.referral_commissions (
  id               bigserial primary key,
  referred_id      uuid not null unique references auth.users(id) on delete cascade,
  code             text not null references public.referral_codes(code) on update cascade,
  plan             text,
  sale_pence       integer,
  commission_pct   numeric(5,2) not null,
  commission_pence integer,
  status           text not null default 'owed' check (status in ('owed', 'review', 'paid', 'void')),
  created_at       timestamptz not null default now(),
  paid_at          timestamptz,
  note             text
);
create index if not exists referral_commissions_code_idx on public.referral_commissions (code);

alter table public.plan_prices          enable row level security;
alter table public.referral_settings    enable row level security;
alter table public.app_admins           enable row level security;
alter table public.referral_codes       enable row level security;
alter table public.referrals            enable row level security;
alter table public.referral_commissions enable row level security;
revoke all on public.plan_prices, public.referral_settings, public.app_admins, public.referral_codes,
              public.referrals, public.referral_commissions from anon, authenticated;

-- ── Helpers ─────────────────────────────────────────────────────────────────
create or replace function public._ref_norm(p text)
returns text language sql immutable as $$
  select case when upper(trim(coalesce(p, ''))) ~ '^[A-Z0-9][A-Z0-9-]{2,23}$' then upper(trim(p)) end;
$$;

create or replace function public._ref_is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from app_admins where email = lower(coalesce(auth.jwt() ->> 'email', '')));
$$;

-- ── Sign-up: record who referred the new account ────────────────────────────
create or replace function public._ref_on_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare v_code text;
begin
  begin
    v_code := _ref_norm(new.raw_user_meta_data ->> 'referral_code');
    if v_code is not null and exists (
         select 1 from referral_codes c where c.code = v_code and c.active and c.owner_id is distinct from new.id) then
      insert into referrals (referred_id, code) values (new.id, v_code) on conflict do nothing;
    end if;
  exception when others then null;   -- never block a sign-up
  end;
  return new;
end $$;

drop trigger if exists on_auth_user_referral on auth.users;
create trigger on_auth_user_referral after insert on auth.users
  for each row execute function public._ref_on_new_user();

-- ── Subscription turns active: record the commission once ───────────────────
create or replace function public._ref_on_paid()
returns trigger language plpgsql security definer set search_path = public as $$
declare r referrals; c referral_codes; v_price int;
begin
  if new.subscription_status = 'active'
     and (tg_op = 'INSERT' or old.subscription_status is distinct from 'active') then
    begin
      select * into r from referrals where referred_id = new.id;
      if r.referred_id is not null and not exists (select 1 from referral_commissions where referred_id = new.id) then
        select * into c from referral_codes where code = r.code;
        select price_pence into v_price from plan_prices where plan = new.subscription_plan;
        insert into referral_commissions (referred_id, code, plan, sale_pence, commission_pct, commission_pence, status)
        values (new.id, r.code, new.subscription_plan, v_price, c.commission_pct,
                case when v_price is null then null else round(v_price * c.commission_pct / 100.0)::int end,
                case when coalesce(v_price, 0) > 0 then 'owed' else 'review' end)
        on conflict (referred_id) do nothing;
      end if;
    exception when others then null;   -- never block a subscription change
    end;
  end if;
  return new;
end $$;

drop trigger if exists profiles_referral_commission on public.profiles;
create trigger profiles_referral_commission after insert or update of subscription_status on public.profiles
  for each row execute function public._ref_on_paid();

-- ── Website: count a link visit (anyone) ────────────────────────────────────
create or replace function public.record_referral_visit(p_code text)
returns void language sql volatile security definer set search_path = public as $$
  update referral_codes set visits = visits + 1 where code = _ref_norm(p_code) and active;
$$;

-- ── Website: my link and my numbers (signed in) ─────────────────────────────
create or replace function public.get_my_referral()
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); c referral_codes; v_base text; v_try text; i int := 0; s referral_settings;
begin
  if v_uid is null then raise exception 'not_signed_in'; end if;
  select * into s from referral_settings where id;
  select * into c from referral_codes where owner_id = v_uid;
  if c.code is null then
    select left(regexp_replace(upper(split_part(coalesce(nullif(trim(full_name), ''), 'Ossify'), ' ', 1)), '[^A-Z]', '', 'g'), 8)
      into v_base from profiles where id = v_uid;
    if coalesce(length(v_base), 0) < 2 then v_base := 'OSSIFY'; end if;
    loop
      i := i + 1;
      v_try := v_base || '-' || (select string_agg(substr('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', 1 + floor(random() * 32)::int, 1), '')
                                   from generate_series(1, 4));
      insert into referral_codes (code, kind, owner_id, commission_pct)
      values (v_try, 'user', v_uid, s.default_commission_pct)
      on conflict do nothing;
      select * into c from referral_codes where owner_id = v_uid;
      exit when c.code is not null or i > 20;
    end loop;
  end if;
  return jsonb_build_object(
    'code', c.code, 'active', c.active, 'commission_pct', c.commission_pct, 'visits', c.visits,
    'attribution_days', s.attribution_days,
    'signups',     (select count(*) from referrals where code = c.code),
    'subscribers', (select count(*) from referral_commissions where code = c.code and status <> 'void'),
    'owed_pence',  (select coalesce(sum(commission_pence), 0) from referral_commissions where code = c.code and status = 'owed'),
    'paid_pence',  (select coalesce(sum(commission_pence), 0) from referral_commissions where code = c.code and status = 'paid'),
    'review',      (select count(*) from referral_commissions where code = c.code and status = 'review'),
    'prices',      (select jsonb_agg(jsonb_build_object('plan', plan, 'label', label, 'price_pence', price_pence) order by price_pence)
                      from plan_prices where plan <> '12month'));
end $$;

-- ── Admin ───────────────────────────────────────────────────────────────────
create or replace function public.admin_referral_overview()
returns jsonb language plpgsql stable security definer set search_path = public as $$
begin
  if not _ref_is_admin() then raise exception 'forbidden'; end if;
  return jsonb_build_object(
    'default_commission_pct', (select default_commission_pct from referral_settings where id),
    'prices', (select jsonb_agg(jsonb_build_object('plan', plan, 'label', label, 'price_pence', price_pence) order by price_pence) from plan_prices),
    'codes', coalesce((select jsonb_agg(x order by x.owed_pence desc, x.signups desc, x.code) from (
        select c.code, c.kind, c.active, c.commission_pct, c.visits, c.created_at,
               coalesce(c.label, p.full_name) as name, coalesce(c.contact_email, p.email) as email,
               (select count(*) from referrals r where r.code = c.code) as signups,
               (select count(*) from referral_commissions m where m.code = c.code and m.status <> 'void') as subscribers,
               (select coalesce(sum(commission_pence), 0) from referral_commissions m where m.code = c.code and m.status = 'owed') as owed_pence,
               (select coalesce(sum(commission_pence), 0) from referral_commissions m where m.code = c.code and m.status = 'paid') as paid_pence
          from referral_codes c left join profiles p on p.id = c.owner_id
         where c.kind = 'partner' or c.visits > 0 or exists (select 1 from referrals r where r.code = c.code)) x), '[]'::jsonb),
    'commissions', coalesce((select jsonb_agg(x order by x.status_rank, x.created_at desc) from (
        select m.id, m.code, m.plan, m.sale_pence, m.commission_pct, m.commission_pence, m.status, m.created_at, m.paid_at, m.note,
               case m.status when 'owed' then 0 when 'review' then 1 when 'paid' then 2 else 3 end as status_rank,
               coalesce(c.label, op.full_name) as referrer_name, coalesce(c.contact_email, op.email) as referrer_email, c.kind,
               rp.full_name as referred_name, rp.email as referred_email
          from referral_commissions m
          join referral_codes c on c.code = m.code
          left join profiles op on op.id = c.owner_id
          left join profiles rp on rp.id = m.referred_id
         order by m.created_at desc limit 500) x), '[]'::jsonb),
    'totals', jsonb_build_object(
        'signups', (select count(*) from referrals),
        'subscribers', (select count(*) from referral_commissions where status <> 'void'),
        'owed_pence', (select coalesce(sum(commission_pence), 0) from referral_commissions where status = 'owed'),
        'paid_pence', (select coalesce(sum(commission_pence), 0) from referral_commissions where status = 'paid'),
        'review', (select count(*) from referral_commissions where status = 'review')));
end $$;

create or replace function public.admin_create_partner_code(p_code text, p_label text, p_contact_email text, p_pct numeric)
returns jsonb language plpgsql volatile security definer set search_path = public as $$
declare v_code text := _ref_norm(p_code);
begin
  if not _ref_is_admin() then raise exception 'forbidden'; end if;
  if v_code is null then raise exception 'invalid_code'; end if;
  if nullif(trim(coalesce(p_label, '')), '') is null then raise exception 'name_required'; end if;
  if exists (select 1 from referral_codes where code = v_code) then raise exception 'code_taken'; end if;
  insert into referral_codes (code, kind, label, contact_email, commission_pct)
  values (v_code, 'partner', trim(p_label), nullif(trim(coalesce(p_contact_email, '')), ''),
          coalesce(p_pct, (select default_commission_pct from referral_settings where id)));
  return jsonb_build_object('code', v_code);
end $$;

create or replace function public.admin_update_referral_code(p_code text, p_pct numeric, p_active boolean)
returns void language plpgsql volatile security definer set search_path = public as $$
begin
  if not _ref_is_admin() then raise exception 'forbidden'; end if;
  if p_pct is not null and (p_pct < 0 or p_pct > 100) then raise exception 'invalid_pct'; end if;
  update referral_codes set commission_pct = coalesce(p_pct, commission_pct), active = coalesce(p_active, active)
   where code = _ref_norm(p_code);
end $$;

-- p_status: 'owed' | 'paid' | 'void'; p_amount_pence sets the amount (e.g. for a 'review' row)
create or replace function public.admin_set_commission(p_id bigint, p_status text, p_amount_pence integer, p_note text)
returns void language plpgsql volatile security definer set search_path = public as $$
begin
  if not _ref_is_admin() then raise exception 'forbidden'; end if;
  if p_status is not null and p_status not in ('owed', 'paid', 'void') then raise exception 'invalid_status'; end if;
  if p_amount_pence is not null and p_amount_pence < 0 then raise exception 'invalid_amount'; end if;
  update referral_commissions
     set commission_pence = coalesce(p_amount_pence, commission_pence),
         status  = coalesce(p_status, case when status = 'review' and p_amount_pence is not null then 'owed' else status end),
         paid_at = case when p_status = 'paid' then now() when p_status in ('owed', 'void') then null else paid_at end,
         note    = coalesce(nullif(trim(coalesce(p_note, '')), ''), note)
   where id = p_id;
end $$;

-- ── Permissions ─────────────────────────────────────────────────────────────
revoke all on function public._ref_norm(text)                    from public, anon, authenticated;
revoke all on function public._ref_is_admin()                    from public, anon, authenticated;
revoke all on function public._ref_on_new_user()                 from public, anon, authenticated;
revoke all on function public._ref_on_paid()                     from public, anon, authenticated;
revoke all on function public.record_referral_visit(text)        from public;
revoke all on function public.get_my_referral()                  from public, anon;
revoke all on function public.admin_referral_overview()          from public, anon;
revoke all on function public.admin_create_partner_code(text, text, text, numeric) from public, anon;
revoke all on function public.admin_update_referral_code(text, numeric, boolean)   from public, anon;
revoke all on function public.admin_set_commission(bigint, text, integer, text)    from public, anon;
grant execute on function public.record_referral_visit(text)     to anon, authenticated;
grant execute on function public.get_my_referral()               to authenticated;
grant execute on function public.admin_referral_overview()       to authenticated;
grant execute on function public.admin_create_partner_code(text, text, text, numeric) to authenticated;
grant execute on function public.admin_update_referral_code(text, numeric, boolean)   to authenticated;
grant execute on function public.admin_set_commission(bigint, text, integer, text)    to authenticated;
