import { NextResponse } from "next/server";

const SECRET = "ca7ee5ac9f2a624ad5c57e15f006478bd72b47ad8249ec7e3d30d93f61f08e3d";
const FROM = "AccuMeasure <sales@accumeasuretech.com>";

export async function POST(req: Request) {
  if (req.headers.get("x-outreach-secret") !== SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "no key configured" }, { status: 500 });
  }
  let body: { to?: string; subject?: string; text?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }
  if (!body.to || !body.subject || !body.text) {
    return NextResponse.json({ error: "missing to/subject/text" }, { status: 400 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [body.to],
      subject: body.subject,
      text: body.text,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return NextResponse.json({ error: "resend failed", detail: data }, { status: 502 });
  }
  return NextResponse.json({ ok: true, id: data.id });
}
