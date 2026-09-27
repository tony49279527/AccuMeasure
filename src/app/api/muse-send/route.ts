import { NextResponse } from 'next/server';

// TEMPORARY one-shot forward endpoint for Muse outreach (HRL-27 WALT redirect).
// Deleted immediately after use.
const SECRET = '80bbd9147d84d75ef1bbd4a9eadeeb7331d1c35e2c44770bff4506607e56ef57';

const ALLOWED_FROM = [
  'Hello Red Light <sales@helloredlight.com>',
];

export async function POST(req: Request) {
  if (req.headers.get('x-muse-secret') !== SECRET) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }
  let body: { from?: string; to?: string; subject?: string; text?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }
  const { from, to, subject, text } = body;
  if (!from || !ALLOWED_FROM.includes(from) || !to || !subject || !text) {
    return NextResponse.json({ error: 'missing/invalid fields' }, { status: 400 });
  }
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      reply_to: 'leetony4927@gmail.com',
      to: [to],
      subject,
      text,
    }),
  });
  let data: unknown = {};
  try {
    data = await r.json();
  } catch {
    data = {};
  }
  return NextResponse.json({ resend_status: r.status, resend: data });
}
