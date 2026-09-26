import { NextResponse } from "next/server";

const SEND_KEY = "hrl1-f07bea8903228fa24884476505d3c6bf";
const FROM_ALLOWLIST = ["sales@helloredlight.com"];

export async function POST(request: Request) {
  if (request.headers.get("x-muse-send-key") !== SEND_KEY) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "no_api_key" }, { status: 500 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }
  const { from, to, subject, text } = (body ?? {}) as Record<string, unknown>;
  if (
    typeof from !== "string" || !FROM_ALLOWLIST.includes(from) ||
    typeof to !== "string" || !to.includes("@") ||
    typeof subject !== "string" || subject.length === 0 ||
    typeof text !== "string" || text.length === 0
  ) {
    return NextResponse.json({ ok: false, error: "bad_params" }, { status: 400 });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Hello Red Light <${from}>`,
      to: [to],
      subject,
      text,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "resend_error", detail: data }, { status: 502 });
  }
  return NextResponse.json({ ok: true, id: (data as Record<string, unknown>).id });
}
