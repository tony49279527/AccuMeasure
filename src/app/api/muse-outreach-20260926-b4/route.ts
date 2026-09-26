import { NextRequest, NextResponse } from "next/server";

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
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to: [to], subject, text }),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => "send failed");
    return NextResponse.json({ error: err }, { status: 502 });
  }
  const data = await res.json();
  return NextResponse.json({ id: data.id });
}
