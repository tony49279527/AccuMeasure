import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = req.headers.get("x-muse-outreach-secret");
  if (secret !== "4a30e83ddcaa41c2be9834675e8d582c9deba4ee87c4d59d") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  let body: any;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const { to, subject, text } = body || {};
  if (!to || !subject || !text) {
    return NextResponse.json({ error: "to/subject/text required" }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "no key" }, { status: 500 });
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "AccuMeasure <sales@accumeasuretech.com>",
      to: [to],
      subject,
      text,
    }),
  });
  const data = await resp.json().catch(() => ({}));
  return NextResponse.json({ resend_status: resp.status, resend: data }, { status: resp.status === 200 ? 200 : 502 });
}
