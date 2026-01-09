-- Migration: Add artists table and seed Gregory D. Putnam

create table if not exists artists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  bio text,
  image text,
  is_proprietary boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Insert a record for Gregory D. Putnam (if not exists)
insert into artists (name, bio, image, is_proprietary)
select 'Gregory D. Putnam', 'Gregory D. Putnam is a writer and composer focused on intimate cinematic pop. This site features only proprietary music by Gregory.', null, true
where not exists (select 1 from artists where name = 'Gregory D. Putnam');
