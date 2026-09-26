import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SECRET = "d312ebaf1ce3673ddb6a6ed62158eb3ae4948a3a1eb2370f";
const FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-muse-secret") !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const { to, subject, text } = await req.json();
  if (!to || !subject || !text) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [to],
    subject,
    text,
  });
  if (error) {
    return NextResponse.json({ error: String(error) }, { status: 502 });
  }
  return NextResponse.json({ id: data?.id });
}
