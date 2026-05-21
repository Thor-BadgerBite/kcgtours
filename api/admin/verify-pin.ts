import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { pin } = req.body;
    const adminPin = process.env.ADMIN_PIN;

    if (!adminPin) {
        console.error('ADMIN_PIN is not configured');
        return res.status(500).json({ error: 'Server misconfiguration' });
    }

    if (pin === adminPin) {
        return res.status(200).json({ ok: true });
    } else {
        return res.status(401).json({ ok: false, error: 'Invalid PIN' });
    }
}
