import { NextResponse } from 'next/server';
const KEY = "YyoQNYGK9oHnme1cCcb4t6Ijc2d4W6qp";
const ALLOW = ["info@processindustryinformer.com","kristen.kazarian@informa.com","rbassett@isa.org"];
async function send(to: string, subject: string, body: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "AccuMeasure <sales@accumeasuretech.com>", to: [to], subject, text: body }),
  });
  return { status: res.status, data: await res.json() };
}
export async function POST(req: Request) {
  if (req.headers.get('x-muse-key') !== KEY) return NextResponse.json({error:'no'},{status:401});
  const { to, subject, body } = await req.json();
  if (!ALLOW.includes(to)) return NextResponse.json({error:'bad to'},{status:400});
  return NextResponse.json(await send(to, subject, body));
}
