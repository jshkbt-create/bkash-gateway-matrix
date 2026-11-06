-- Table: competitor_profiles
CREATE TABLE competitor_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile TEXT NOT NULL,
  english_overview TEXT,
  bangla_touchpoints TEXT,
  core_features TEXT,
  content_model TEXT,
  ux_approach TEXT,
  monetization TEXT,
  local_gateway_integration TEXT,
  implementation_notes TEXT,
  phase1_priority TEXT CHECK (phase1_priority IN ('High', 'Medium-High', 'Medium', 'Low')),
  english_snippet TEXT,
  bangla_snippet TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE competitor_profiles ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read (for the MVP)
CREATE POLICY "Allow public read access" 
ON competitor_profiles FOR SELECT 
USING (true);

-- Create a policy that allows anyone to insert/update/delete (for the MVP)
-- Note: In production, you would restrict this to authenticated admins.
CREATE POLICY "Allow public all access" 
ON competitor_profiles FOR ALL 
USING (true) 
WITH CHECK (true);
