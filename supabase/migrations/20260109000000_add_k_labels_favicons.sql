-- Migration: Add K-labels (favicons) table for 2KLEIGH system
-- Description: Create table to store K-prefix favicon labels with emoji representations

CREATE TABLE IF NOT EXISTS k_labels (
  id uuid primary key default gen_random_uuid(),
  label_name text not null unique,
  label_emoji text not null,
  description text,
  is_restricted boolean default false,
  status text default 'accepted',
  suggested_by text,
  approval_status text default 'approved',
  reward_given boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert K-labels with heart emoji containing tiny 'k'
INSERT INTO k_labels (label_name, label_emoji, description, is_restricted, status) VALUES
  ('K-cling', '❤️k', 'Feeling clingy, needy, or attached', false, 'accepted'),
  ('K-cuddle', '❤️k', 'Intimate, affectionate, hugging mood', false, 'accepted'),
  ('K-cry', '❤️k', 'Emotional, tearful, vulnerable feeling', false, 'accepted'),
  ('K-concern', '❤️k', 'Worried, anxious, or caring about something', false, 'accepted'),
  ('K-okay', '❤️k', 'Content, neutral, steady state', false, 'accepted'),
  ('K-climber', '❤️k', 'Ambitious, rising up, reaching high', false, 'accepted'),
  ('K-cowboy', '❤️k', 'Bold, adventurous, wild west energy', false, 'accepted'),
  ('K-kind', '❤️k', 'Compassionate, generous, heartfelt', false, 'accepted'),
  ('K-kudos', '❤️k', 'Celebrating, praising, giving props', false, 'accepted'),
  ('K-kin', '❤️k', 'Family-like, bonded, belonging', false, 'accepted'),
  ('K-crazy', '❤️k', 'Wild, uncontrolled, ecstatic energy', false, 'accepted'),
  ('K-calm', '❤️k', 'Peaceful, relaxed, serene', false, 'accepted'),
  ('K-crab', '❤️k', 'Defensive, grumpy, irritable mood', false, 'accepted'),
  ('K-confident', '❤️k', 'Assured, self-assured, bold', false, 'accepted'),
  ('K-mend', '❤️k', 'Healing, recovering, fixing things', false, 'accepted'),
  ('K-curious', '❤️k', 'Inquisitive, questioning, exploring', false, 'accepted'),
  ('K-courage', '❤️k', 'Brave, fearless, determined', false, 'accepted'),
  ('K-come-on', '❤️k', 'Encouraging, pushing forward, motivated', false, 'accepted');

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS k_labels_status_idx ON k_labels(status);
CREATE INDEX IF NOT EXISTS k_labels_approval_idx ON k_labels(approval_status);
CREATE INDEX IF NOT EXISTS k_labels_name_idx ON k_labels(label_name);

-- Enable RLS
ALTER TABLE k_labels ENABLE ROW LEVEL SECURITY;

-- Public can view all approved labels
CREATE POLICY "Public can view approved k_labels" ON k_labels
  FOR SELECT USING (status = 'accepted' AND approval_status = 'approved');

-- Authenticated users can view all labels
CREATE POLICY "Authenticated can view all k_labels" ON k_labels
  FOR SELECT USING (auth.role() = 'authenticated');

-- Authenticated users can suggest new labels
CREATE POLICY "Authenticated can insert k_labels" ON k_labels
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Only admins can update labels
CREATE POLICY "Admins can update k_labels" ON k_labels
  FOR UPDATE USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');
