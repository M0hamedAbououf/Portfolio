-- Messages sent from the portfolio contact form.
-- Only the server (service role) writes here; RLS with no policies blocks the public keys entirely.
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 80),
  reach text not null check (char_length(reach) between 3 and 120),
  message text not null check (char_length(message) between 10 and 2000),
  lang text not null default 'en' check (lang in ('en', 'ar')),
  handled boolean not null default false
);

alter table public.contact_messages enable row level security;

create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);
