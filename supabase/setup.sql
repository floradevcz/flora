-- Spusťte jednou v Supabase Dashboardu: SQL Editor → New query → Run.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 40),
  role text not null default 'member' check (role in ('member', 'admin')),
  created_at timestamptz not null default now()
);

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'admin@flora.local';
$$;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name, role)
  values (new.id, coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(new.email, '@', 1)), case when new.email = 'admin@flora.local' then 'admin' else 'member' end);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create or replace function public.protect_profile_role() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then new.role := old.role; end if;
  return new;
end;
$$;
drop trigger if exists protect_profile_role on public.profiles;
create trigger protect_profile_role before update on public.profiles for each row execute procedure public.protect_profile_role();

create table if not exists public.banned_users (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  banned_at timestamptz not null default now()
);
create or replace function public.is_banned() returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.banned_users where user_id = auth.uid());
$$;

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  content text not null check (char_length(trim(content)) between 1 and 1000),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.messages enable row level security;
alter table public.banned_users enable row level security;

drop policy if exists "profiles readable by members" on public.profiles;
create policy "profiles readable by members" on public.profiles for select to authenticated using (true);
drop policy if exists "members update own profile" on public.profiles;
create policy "members update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);
drop policy if exists "messages readable by members" on public.messages;
create policy "messages readable by members" on public.messages for select to authenticated using (true);
drop policy if exists "members send messages" on public.messages;
create policy "members send messages" on public.messages for insert to authenticated with check (auth.uid() = user_id and not public.is_banned());
drop policy if exists "author or admin deletes messages" on public.messages;
create policy "author or admin deletes messages" on public.messages for delete to authenticated using (auth.uid() = user_id or public.is_admin());
drop policy if exists "admin manages bans" on public.banned_users;
create policy "admin manages bans" on public.banned_users for all to authenticated using (public.is_admin()) with check (public.is_admin());

alter table public.messages replica identity full;
alter publication supabase_realtime add table public.messages;

-- Poté se zaregistrujte přes aplikaci účtem admin@flora.local.
-- Zvolte zobrazované jméno Admin a heslo AdminKvetin; po prvním přihlášení heslo změňte.
