import { NextResponse } from "next/server";

// TEMPORARY outreach route for SCOTTCHEN batch 2026-09-28. Deleted after use.
const KEY = "8f571a87ae7848f38d6cee4c44603bb2";

export async function POST(req: Request) {
  if (req.headers.get("x-muse-key") !== KEY) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "missing RESEND_API_KEY" }, { status: 500 });
  let payload: { to?: string; subject?: string; body?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const { to, subject, body } = payload;
  if (!to || !subject || !body) {
    return NextResponse.json({ error: "to/subject/body required" }, { status: 400 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SCOTTCHEN Tools <sales@scottchentools.com>",
      to: [to],
      subject,
      text: body,
    }),
  });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json({ ok: res.ok, resendStatus: res.status, data });
}
