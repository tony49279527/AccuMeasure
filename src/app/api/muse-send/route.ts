import { NextResponse } from 'next/server';

const SECRET = 'c7a0bed0973b4ae85d1b5fcc2f042e38c9d09774ddb4c8b4581b7c6905386bc6';

export async function POST(req: Request) {
  if (req.headers.get('x-muse-secret') !== SECRET) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }
  let body: { to?: string; subject?: string; text?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad json' }, { status: 400 });
  }
  const { to, subject, text } = body;
  if (!to || !subject || !text) {
    return NextResponse.json({ error: 'missing fields' }, { status: 400 });
  }
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Hello Red Light <sales@helloredlight.com>',
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
