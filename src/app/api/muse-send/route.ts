import { NextResponse } from "next/server";

// TEMPORARY one-shot send endpoint for Muse outreach. Deleted after use.
// Protected by a one-time header key. Only allows the verified scottchentools.com sender.
const SEND_KEY = "0077e928a881bb08bb408fec5d0821e9b6eb84ffa97a6d03";
const ALLOWED_FROM = new Set(["sales@scottchentools.com"]);

export async function POST(request: Request) {
  if (request.headers.get("x-muse-key") !== SEND_KEY) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "no api key configured" }, { status: 500 });
  }
  let body: { to?: string; subject?: string; text?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const { to, subject, text } = body;
  if (!to || !subject || !text) {
    return NextResponse.json({ error: "to/subject/text required" }, { status: 400 });
  }
  const from = "SCOTTCHEN <sales@scottchentools.com>";
  if (!ALLOWED_FROM.has("sales@scottchentools.com")) {
    return NextResponse.json({ error: "sender not allowed" }, { status: 403 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, text }),
  });
  const data = await res.text();
  if (!res.ok) {
    return NextResponse.json({ error: `resend ${res.status}`, detail: data.slice(0, 300) }, { status: 502 });
  }
  return NextResponse.json({ ok: true, resend: data.slice(0, 300) });
}

export async function GET() {
  return NextResponse.json({ error: "method not allowed" }, { status: 405 });
}
