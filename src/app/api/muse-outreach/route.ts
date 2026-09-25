import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const KEY = "lLvROGu_C_gBUnbRUFcQmcdQRFgbhpYV";
const ALLOW = ["josborne@endeavorb2b.com","editor@wateronline.com","manuscripts@chemengonline.com"];
export async function POST(req: Request) {
  if (req.headers.get('x-muse-key') !== KEY) return NextResponse.json({error:'no'},{status:401});
  const { to, subject, body } = await req.json();
  if (!ALLOW.includes(to)) return NextResponse.json({error:'bad to'},{status:400});
  const resend = new Resend(process.env.RESEND_API_KEY);
  const r = await resend.emails.send({ from: 'AccuMeasure <sales@accumeasuretech.com>', to, subject, text: body });
  return NextResponse.json(r);
}
export async function GET(req: Request) {
  if (req.headers.get('x-muse-key') !== KEY) return NextResponse.json({error:'no'},{status:401});
  const resend = new Resend(process.env.RESEND_API_KEY);
  const r = await resend.emails.list({ limit: 10 });
  return NextResponse.json(r);
}
