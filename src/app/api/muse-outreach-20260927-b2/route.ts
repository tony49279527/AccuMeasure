import { NextResponse } from "next/server";

const SECRET = "ee7bc741bbc7fcb851c3db6fbe78777bc65412236305d4e8d3a2b3f39327a681";
const FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(req: Request) {
  if (req.headers.get("x-muse-secret") !== SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const { to, subject, text } = body || {};
  if (typeof to !== "string" || typeof subject !== "string" || typeof text !== "string") {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return NextResponse.json({ error: "bad to" }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "no key" }, { status: 500 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], subject, text }),
  });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
