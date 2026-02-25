-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- Creates the tour_views table with atomic increment support

CREATE TABLE IF NOT EXISTS tour_views (
    tour_id TEXT PRIMARY KEY,
    view_count BIGINT NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE tour_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to READ view counts
CREATE POLICY "Allow public read access"
ON tour_views FOR SELECT
TO anon
USING (true);

-- Allow anyone (anon) to INSERT a new tour row
CREATE POLICY "Allow public insert"
ON tour_views FOR INSERT
TO anon
WITH CHECK (true);

-- Allow anyone (anon) to UPDATE view counts (for incrementing)
CREATE POLICY "Allow public update"
ON tour_views FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);

-- Create an atomic increment function (avoids race conditions)
CREATE OR REPLACE FUNCTION increment_tour_view(p_tour_id TEXT)
RETURNS BIGINT
LANGUAGE plpgsql
AS $$
DECLARE
    new_count BIGINT;
BEGIN
    INSERT INTO tour_views (tour_id, view_count, updated_at)
    VALUES (p_tour_id, 1, NOW())
    ON CONFLICT (tour_id)
    DO UPDATE SET
        view_count = tour_views.view_count + 1,
        updated_at = NOW()
    RETURNING view_count INTO new_count;

    RETURN new_count;
END;
$$;

-- Grant execute permission to anon role
GRANT EXECUTE ON FUNCTION increment_tour_view(TEXT) TO anon;
