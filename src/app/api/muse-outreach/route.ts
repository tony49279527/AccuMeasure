import { NextResponse } from "next/server";

// TEMPORARY one-shot outreach sender. Added for a single authorized batch,
// reverted immediately after. Do not keep.
const SHARED_SECRET = "b58fa1551ec11e112aee0f0307d4784542ea4d58ea24ae77";
const ALLOWED_FROM = ["sales@accumeasuretech.com"];

export async function POST(request: Request) {
  if (request.headers.get("x-muse-send-key") !== SHARED_SECRET) {
    return NextResponse.json({ success: false, error: "forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "bad json" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const to = typeof data.to === "string" ? data.to : "";
  const subject = typeof data.subject === "string" ? data.subject : "";
  const text = typeof data.text === "string" ? data.text : "";
  const fromRaw = typeof data.from === "string" ? data.from : "";
  if (!to || !subject || !text) {
    return NextResponse.json({ success: false, error: "missing fields" }, { status: 400 });
  }
  const sender = ALLOWED_FROM.includes(fromRaw) ? fromRaw : ALLOWED_FROM[0];

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ success: false, error: "no key" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: sender, to: [to], subject, text }),
  });
  const resData = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    return NextResponse.json(
      { success: false, error: "resend failed", detail: resData },
      { status: 502 },
    );
  }
  return NextResponse.json({ success: true, id: resData.id });
}
