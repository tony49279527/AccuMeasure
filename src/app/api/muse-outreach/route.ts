import { NextResponse } from 'next/server';
const KEY = "5p-Ms49KEqM79rK_sHJ-Nf8Bgx8WltmZ";
const ALLOW = ["library@fvtc.edu","adam.bezdicek@hennepintech.edu","library@southplainscollege.edu","library@tvcc.cc","library@durhamtech.edu","lrcref@cfcc.edu","editor@coatingspromag.com","refdesk@pct.edu","chabotref@chabotcollege.edu","library@ladelta.edu"];
async function send(to: string, subject: string, body: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "SCOTTCHEN <sales@scottchentools.com>", to: [to], subject, text: body }),
  });
  return { status: res.status, data: await res.json() };
}
export async function POST(req: Request) {
  if (req.headers.get('x-muse-key') !== KEY) return NextResponse.json({error:'no'},{status:401});
  const { to, subject, body } = await req.json();
  if (!ALLOW.includes(to)) return NextResponse.json({error:'bad to'},{status:400});
  return NextResponse.json(await send(to, subject, body));
}
