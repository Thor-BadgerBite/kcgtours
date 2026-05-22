import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const campaignId = req.query.id as string;
    if (!campaignId) {
        return res.status(400).json({ error: 'Missing campaign id' });
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
        return res.status(500).json({ error: 'Server misconfiguration' });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
        .from('email_sends')
        .select('email, first_name, last_name, status, error_message')
        .eq('campaign_id', campaignId)
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Failed to fetch campaign details:', error);
        return res.status(500).json({ error: 'Database error' });
    }

    return res.status(200).json({ details: data });
}
