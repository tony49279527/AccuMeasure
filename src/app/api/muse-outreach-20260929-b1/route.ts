import { NextRequest, NextResponse } from "next/server";

const SECRET = "Jdok8fvY_dHfRcgtoFjXQxvdjwHvxK7SBXTBmZwfbGI";
const FIXED_FROM = "AccuMeasure <sales@accumeasuretech.com>";
const RESEND_API = "https://api.resend.com/emails";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-outreach-secret") !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  let body: any;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad json" }, { status: 400 }); }
  const to: string = String(body.to || "").trim();
  const subject: string = String(body.subject || "").trim();
  const text: string = String(body.text || "").trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) return NextResponse.json({ error: "bad to" }, { status: 400 });
  if (!subject || !text) return NextResponse.json({ error: "missing fields" }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "no key" }, { status: 500 });
  const r = await fetch(RESEND_API, {
    method: "POST",
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FIXED_FROM, to: [to], subject, text, reply_to: "sales@accumeasuretech.com" }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) return NextResponse.json({ error: "resend", detail: data }, { status: 502 });
  return NextResponse.json({ id: data.id, to });
}

export async function GET() { return NextResponse.json({ error: "not found" }, { status: 404 }); }
