import { NextRequest, NextResponse } from "next/server";

const SECRET = "c6c2750eb36f4fe6175977d46e5205b591fec4c59bcd7ed3";
const ALLOW_FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-muse-secret") !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const { to, subject, text } = await req.json();
  if (!to || !subject || !text) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: ALLOW_FROM, to, subject, text }),
  });
  const data = await res.json();
  return NextResponse.json({ resend_status: res.status, resend: data }, { status: res.status });
}
