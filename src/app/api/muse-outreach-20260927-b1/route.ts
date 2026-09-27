// TEMPORARY one-shot outreach route (cron batch 2026-09-27 b1). Revert after use.
import { NextResponse } from "next/server";

const SECRET = "7063077f791e00e064b63c41dc821df9ed4a4b31e564c740";
const FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(req: Request) {
  if (req.headers.get("x-muse-secret") !== SECRET) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "no api key" }, { status: 500 });
  }
  let payload: { to?: string; subject?: string; body?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  if (!payload.to || !payload.subject || !payload.body) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [payload.to],
      reply_to: "sales@accumeasuretech.com",
      subject: payload.subject,
      text: payload.body,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return NextResponse.json({ ok: false, error: data }, { status: res.status });
  }
  return NextResponse.json({ ok: true, id: data.id });
}
