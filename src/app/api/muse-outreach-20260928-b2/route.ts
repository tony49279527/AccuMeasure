import { NextResponse } from "next/server";

const SECRET = 'e4ff196f6305428eec3fc2eae33d31c143a0f50fb71e7c65'; // one-time, reverted after batch

export async function POST(req: Request) {
  const key = req.headers.get("x-muse-outreach-key") || "";
  if (!SECRET || key !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const { to, subject, text } = body || {};
  if (!to || !subject || !text) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "no resend key" }, { status: 500 });
  }
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "AccuMeasure <sales@accumeasuretech.com>",
      to: [to],
      subject,
      text,
      reply_to: "sales@accumeasuretech.com",
    }),
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    return NextResponse.json({ error: "resend failed", detail: data }, { status: 502 });
  }
  return NextResponse.json({ ok: true, id: data.id });
}
