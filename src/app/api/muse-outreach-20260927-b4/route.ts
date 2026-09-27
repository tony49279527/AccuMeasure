import { NextResponse } from "next/server";

// Temporary one-off outreach endpoint. DELETE AFTER USE.
const SECRET = "eaed5ea518dfb0384d4cdb4f1430a47e1b31c0996a49117c";

export async function POST(req: Request) {
  const secret = req.headers.get("x-outreach-secret");
  if (!secret || secret !== SECRET) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  const to: string = (body.to || "").trim();
  const subject: string = (body.subject || "").trim();
  const text: string = (body.text || "").trim();
  if (!to || !subject || !text || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return NextResponse.json({ error: "bad fields" }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "no key" }, { status: 500 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "AccuMeasure <sales@accumeasuretech.com>",
      to: [to],
      subject,
      text,
    }),
  });
  const data = await res.json();
  return NextResponse.json(
    { resend_status: res.status, resend: data },
    { status: res.status === 200 ? 200 : 502 }
  );
}
