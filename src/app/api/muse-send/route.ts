import { NextResponse } from 'next/server';

const SECRET = '18bd2c380a17b30c8a9e7ed1585c98ec61a87c09965d98778bf666c5be3a6741';

const ALLOWED_FROM = [
  'Hello Red Light <sales@helloredlight.com>',
  'AccuMeasure <sales@accumeasuretech.com>',
  'SCOTTCHEN <sales@scottchentools.com>',
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
