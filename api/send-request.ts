import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface RequestPayload {
  /** Which form sent this request */
  source: 'tour-private-request' | 'tailored-experience';
  name: string;
  email: string;
  tourTitle?: string;        // only for tour private requests
  guests?: string | number;
  date?: string;
  description?: string;      // message text on private tour requests → template var {{description}}
  message?: string;          // message text on tailored experience   → template var {{message}}
  places?: string[];         // only for tailored experience
}

// ─── Resend Template IDs ──────────────────────────────────────────────────────
// TODO: Upload each HTML file from /email-templates/ to Resend Dashboard → Templates,
//       then paste the published Template ID below.
const TEMPLATE_IDS = {
  privateTourRequest: 'f901732a-7935-4b3a-865d-29d4cc1100a0',
  tailoredExperience: '00946a3c-10f6-4c7c-b92b-09070a15d158',
};

// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || 'info@kcgtours.gr';

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const data: RequestPayload = req.body;

  if (!data.name || !data.email || !data.source) {
    return res.status(400).json({ error: 'Missing required fields: name, email, source' });
  }

  const resend = new Resend(apiKey);
  const isTourRequest = data.source === 'tour-private-request';

  try {
    if (isTourRequest) {
      // ── Template 1: Private Tour Request ──────────────────────────────
      const { error } = await resend.emails.send({
        from: 'KCG Tours <noreply@kcgtours.gr>',
        to: [toEmail],
        replyTo: data.email,
        subject: `🏖️ Private Request — ${data.tourTitle || 'Tour'} [${data.name}]`,
        template: {
          id: TEMPLATE_IDS.privateTourRequest,
          variables: {
            tourTitle: data.tourTitle || 'N/A',
            name: data.name,
            email: data.email,
            guests: String(data.guests || 'Not specified'),
            date: data.date || 'Flexible',
            description: data.description || '—',
          },
        },
      });

      if (error) {
        console.error('Resend error (tour request):', error);
        return res.status(502).json({ error: 'Failed to send email' });
      }

    } else {
      // ── Template 2: Tailored Experience ────────────────────────────────
      const placesText = data.places && data.places.length > 0
        ? data.places.map(p => `• ${p}`).join('\n')
        : 'None selected';

      const { error } = await resend.emails.send({
        from: 'KCG Tours <noreply@kcgtours.gr>',
        to: [toEmail],
        replyTo: data.email,
        subject: `✨ Custom Tour Request — ${data.name}`,
        template: {
          id: TEMPLATE_IDS.tailoredExperience,
          variables: {
            name: data.name,
            email: data.email,
            guests: String(data.guests || 'Not specified'),
            date: data.date || 'Flexible',
            places: placesText,
            message: data.message || '—',
          },
        },
      });

      if (error) {
        console.error('Resend error (tailored experience):', error);
        return res.status(502).json({ error: 'Failed to send email' });
      }
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Unexpected error sending email:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
