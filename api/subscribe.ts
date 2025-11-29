// Simple serverless subscribe endpoint (Vercel / Netlify compatible)
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  // In production, forward to Mailchimp/ConvertKit/other provider using an API key stored
  // in environment variables. This stub simply returns success so the frontend can be
  // wired and tested without exposing secrets.

  console.log('Subscribe request received for', email);
  return res.status(200).json({ ok: true, email });
}
