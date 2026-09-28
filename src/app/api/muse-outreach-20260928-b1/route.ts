import { NextRequest, NextResponse } from "next/server";
const SECRET = "79ce4bc75daa16e5a9478f8fc244d3277dcb74d7712bb047";
export async function POST(req: NextRequest) {
  if (req.headers.get("x-muse-secret") !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  let body: any = {};
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad json" }, { status: 400 }); }
  const { to, subject, text } = body;
  if (!to || !subject || !text) return NextResponse.json({ error: "missing fields" }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "no key" }, { status: 500 });
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "AccuMeasure <sales@accumeasuretech.com>", to: [to], subject, text }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) return NextResponse.json({ error: data, status: r.status }, { status: 502 });
  return NextResponse.json({ ok: true, id: data.id });
}
export async function GET() { return NextResponse.json({ error: "method not allowed" }, { status: 405 }); }
