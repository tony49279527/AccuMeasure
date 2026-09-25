import { NextResponse } from "next/server";

// TEMPORARY one-shot outreach sender. Added for a single authorized batch,
// reverted immediately after. Do not keep.
const SHARED_SECRET = "de1e8f12c69729df96066aa37f66233f705887587725de7d";
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

  const { to, subject, text, from } = body as Record<string, string>;
  if (!to || !subject || !text) {
    return NextResponse.json({ success: false, error: "missing fields" }, { status: 400 });
  }
  const sender = ALLOWED_FROM.includes(from) ? from : ALLOWED_FROM[0];

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
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    return NextResponse.json(
      { success: false, error: "resend failed", detail: data },
      { status: 502 },
    );
  }
  return NextResponse.json({ success: true, id: data.id });
}
