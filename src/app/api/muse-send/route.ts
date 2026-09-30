import { NextResponse } from "next/server";

// TEMPORARY route for SCOTTCHEN outreach 2026-09-30 (9-28 pending 15 + 9-30 9).
// Revert (delete this file) after the batch completes.
const TOKEN = "a308d0903e47f63797ea0be7a15160ed";
const FROM = "SCOTTCHEN <sales@scottchentools.com>";

function authed(request: Request) {
  return request.headers.get("x-muse-token") === TOKEN;
}

export async function POST(request: Request) {
  if (!authed(request)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "no_key" }, { status: 500 });
  }
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  if (body.action === "status") {
    const id = String(body.id ?? "");
    if (!id) return NextResponse.json({ ok: false, error: "no_id" }, { status: 400 });
    const r = await fetch(`https://api.resend.com/emails/${id}`, { headers });
    const j = await r.json().catch(() => ({}));
    return NextResponse.json({ ok: r.ok, status: r.status, data: j });
  }

  const to = String(body.to ?? "");
  const subject = String(body.subject ?? "");
  const text = String(body.text ?? "");
  const idemKey = String(body.idemKey ?? "");
  if (!to || !subject || !text) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  const sendHeaders: Record<string, string> = { ...headers };
  if (idemKey) sendHeaders["Idempotency-Key"] = idemKey;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: sendHeaders,
    body: JSON.stringify({ from: FROM, to: [to], subject, text }),
  });
  const j = await r.json().catch(() => ({}));
  return NextResponse.json({ ok: r.ok, status: r.status, data: j });
}
