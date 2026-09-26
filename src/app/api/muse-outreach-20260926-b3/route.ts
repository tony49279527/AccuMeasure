// Temporary one-off outreach send endpoint (batch b3, 2026-09-26).
// Reverted immediately after the batch is sent.
import { NextResponse } from "next/server";

const SECRET = "6619c8d8b0d87d5bf49d05ea53c9e4d823306eb98f3d0d50";
const FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(request: Request) {
  if (request.headers.get("x-muse-secret") !== SECRET) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  const data = body as { to?: string; subject?: string; text?: string };
  if (typeof data.to !== "string" || typeof data.subject !== "string" || typeof data.text !== "string") {
    return NextResponse.json({ ok: false, error: "missing to/subject/text" }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "no key" }, { status: 500 });
  }
  let resendRes: Response;
  try {
    resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: FROM, to: [data.to], subject: data.subject, text: data.text }),
    });
  } catch (e) {
    const reason = e instanceof Error ? e.message : "unknown";
    return NextResponse.json({ ok: false, error: `resend fetch failed: ${reason}` }, { status: 502 });
  }
  const resendBody = await resendRes.text();
  if (!resendRes.ok) {
    return NextResponse.json(
      { ok: false, error: `resend ${resendRes.status}: ${resendBody.slice(0, 300)}` },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}

export const runtime = "nodejs";
