import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import * as fs from 'fs';
import * as path from 'path';

export interface CampaignContact {
    email: string;
    first_name: string;
    last_name: string;
    excursion_name: string;
    tour_date: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { contacts } = req.body as { contacts: CampaignContact[] };

    if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
        return res.status(400).json({ error: 'Missing or empty contacts array' });
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const reviewLink = process.env.REVIEW_LINK || 'https://g.page/r/CZhgynS1_UZOEBM/review';

    if (!supabaseUrl || !supabaseServiceKey || !resendApiKey) {
        console.error('Missing required environment variables for sending campaign');
        return res.status(500).json({ error: 'Server misconfiguration' });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);

    // Grouping assumes all contacts in one request belong to the same excursion/date
    // based on the brief "Kefalonian Adventure — 16/05/2026". We use the first contact's info.
    const excursionName = contacts[0].excursion_name;
    const tourDateStr = contacts[0].tour_date;
    
    // Parse tour_date from DD/MM/YYYY to YYYY-MM-DD for PostgreSQL DATE column
    const [day, month, year] = tourDateStr.split('/');
    const tourDate = `${year}-${month}-${day}`;

    // 1. Create Campaign Record
    const { data: campaign, error: campaignError } = await supabase
        .from('email_campaigns')
        .insert({
            excursion_name: excursionName,
            tour_date: tourDate,
            total_contacts: contacts.length,
            status: 'pending'
        })
        .select('id')
        .single();

    if (campaignError || !campaign) {
        console.error('Failed to create campaign record:', campaignError);
        return res.status(500).json({ error: 'Database error creating campaign' });
    }

    const campaignId = campaign.id;

    // Load template
    let templateHtml = '';
    try {
        const templatePath = path.join(process.cwd(), 'email-templates', 'tour-thankyou.html');
        templateHtml = fs.readFileSync(templatePath, 'utf8');
    } catch (e) {
        console.error('Failed to load email template:', e);
        // Fallback simple HTML
        templateHtml = `<p>Thank you for joining us, {{first_name}}! Review us here: {{review_link}}</p>`;
    }

    let sentCount = 0;
    let failedCount = 0;

    // 2. Loop through contacts and send emails
    for (const contact of contacts) {
        let status = 'sent';
        let errorMessage = null;

        try {
            // Replace variables in template manually since Resend React isn't used
            let personalizedHtml = templateHtml
                .replace(/{{first_name}}/g, contact.first_name)
                .replace(/{{excursion_name}}/g, contact.excursion_name)
                .replace(/{{tour_date}}/g, contact.tour_date)
                .replace(/{{review_link}}/g, reviewLink);

            const { error: sendError } = await resend.emails.send({
                from: 'KCG Tours <info@kcgtours.gr>',
                to: [contact.email],
                subject: `Thank you for joining us, ${contact.first_name}! 🌿`,
                html: personalizedHtml,
            });

            if (sendError) {
                console.error(`Failed to send email to ${contact.email}:`, sendError);
                status = 'failed';
                errorMessage = sendError.message || 'Resend error';
                failedCount++;
            } else {
                sentCount++;
            }
        } catch (e: any) {
            console.error(`Exception sending email to ${contact.email}:`, e);
            status = 'failed';
            errorMessage = e.message || 'Unknown error';
            failedCount++;
        }

        // 3. Insert email_sends record
        await supabase
            .from('email_sends')
            .insert({
                campaign_id: campaignId,
                email: contact.email,
                first_name: contact.first_name,
                last_name: contact.last_name || '',
                excursion_name: contact.excursion_name,
                tour_date: tourDate,
                status,
                error_message: errorMessage
            });
    }

    // 4. Update campaign status
    const finalStatus = failedCount === contacts.length ? 'failed' : 'sent';
    
    await supabase
        .from('email_campaigns')
        .update({
            sent_count: sentCount,
            failed_count: failedCount,
            status: finalStatus,
            sent_at: new Date().toISOString()
        })
        .eq('id', campaignId);

    // Return summary
    return res.status(200).json({
        sent: sentCount,
        failed: failedCount,
        campaignId
    });
}
