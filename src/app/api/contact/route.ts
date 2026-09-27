import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  let data: unknown;
  try { data = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  if (!data || typeof data !== 'object') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  const fields = data as Record<string, unknown>;
  if (fields.website) return NextResponse.json({ ok: true });
  const name = typeof fields.name === 'string' ? fields.name.trim() : '';
  const email = typeof fields.email === 'string' ? fields.email.trim() : '';
  const message = typeof fields.message === 'string' ? fields.message.trim() : '';
  if (name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 4000) return NextResponse.json({ error: 'Invalid form fields.' }, { status: 422 });
  if (!webhook) return NextResponse.json({ error: 'Contact delivery is not configured.' }, { status: 503 });
  try {
    const response = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message, source: 'knoux.store' }), signal: AbortSignal.timeout(10000), cache: 'no-store' });
    if (!response.ok) throw new Error('Webhook rejected delivery.');
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: 'Delivery failed.' }, { status: 502 }); }
}
