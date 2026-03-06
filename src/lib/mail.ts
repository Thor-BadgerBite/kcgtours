/**
 * mail.ts — Client-side helper for sending form requests via the
 * /api/send-request serverless function.
 *
 * The actual email is sent server-side (Vercel Function) so the
 * Resend API key is NEVER exposed to the browser.
 */

export interface TourPrivateRequestPayload {
    source: 'tour-private-request';
    name: string;
    email: string;
    tourTitle: string;
    guests: string | number;
    date: string;
    description?: string;   // maps to {{description}} in the Resend template
}

export interface TailoredExperiencePayload {
    source: 'tailored-experience';
    name: string;
    email: string;
    guests: string;
    date: string;
    places: string[];
    message: string;
}

export type MailPayload = TourPrivateRequestPayload | TailoredExperiencePayload;

export interface MailResult {
    success: boolean;
    error?: string;
}

/**
 * Sends a form submission to the /api/send-request endpoint.
 * Returns { success: true } on success or { success: false, error: string } on failure.
 */
export async function sendMailRequest(payload: MailPayload): Promise<MailResult> {
    try {
        const res = await fetch('/api/send-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            return { success: false, error: (body as { error?: string }).error || 'Server error' };
        }

        return { success: true };
    } catch (err) {
        console.error('sendMailRequest failed:', err);
        return { success: false, error: 'Network error — please try again.' };
    }
}
