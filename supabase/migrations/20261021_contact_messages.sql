-- Contact form messages. Every message is kept here as a backup, and the
-- contact-email Edge Function emails it to info@ossify.co.uk via Resend.
-- Only the Edge Function (service role) reads or writes this table.
create table if not exists public.contact_messages (
  id          bigint generated always as identity primary key,
  user_id     uuid references auth.users(id) on delete set null,
  name        text not null,
  email       text not null,
  subject     text not null,
  message     text not null,
  created_at  timestamptz not null default now(),
  emailed_at  timestamptz,
  email_error text
);
create index if not exists contact_messages_user_time on public.contact_messages (user_id, created_at desc);
alter table public.contact_messages enable row level security;
revoke all on public.contact_messages from anon, authenticated;
