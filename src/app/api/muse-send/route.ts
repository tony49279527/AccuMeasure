import { NextResponse } from "next/server";

// TEMPORARY one-shot send endpoint for Muse outreach. Deleted after use.
const SEND_KEY = "44d224e375c86e2dcf866a8ab3f5438c44b9b2454f820caa";

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
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SCOTTCHEN <sales@scottchentools.com>",
      to: [to],
      subject,
      text,
    }),
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
