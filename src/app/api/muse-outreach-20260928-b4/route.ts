import { NextResponse } from "next/server";
export const runtime = "nodejs";
const SECRET = "167ba060bda40f494390beffc3d450c6c34b0b9c3bd39046";
const FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(req: Request) {
  if (req.headers.get("x-outreach-secret") !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  let payload: { to?: string; subject?: string; body?: string };
  try { payload = await req.json(); } catch { return NextResponse.json({ error: "bad request" }, { status: 400 }); }
  const { to, subject, body } = payload;
  if (!to || !subject || !body) return NextResponse.json({ error: "bad request" }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "no resend key" }, { status: 500 });
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], subject, text: body, reply_to: "sales@accumeasuretech.com" }),
  });
  const data = await r.json().catch(() => ({}));
  return NextResponse.json(data, { status: r.status });
}

export async function GET() {
  return NextResponse.json({ error: "method not allowed" }, { status: 405 });
}
