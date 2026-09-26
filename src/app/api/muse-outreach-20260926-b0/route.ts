import { NextRequest, NextResponse } from "next/server";

const SECRET = "DkmsmGVlBhlOCdA8pacWL4aeW1MxS4bi";
const FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-muse-secret") !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  let body: { to?: string; subject?: string; html?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const { to, subject, html } = body;
  if (!to || !subject || !html) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to: [to], subject, html }),
  });
  const data = await r.json().catch(() => ({}));
  return NextResponse.json({ resend_status: r.status, data });
}
