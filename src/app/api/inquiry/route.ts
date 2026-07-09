import { NextResponse } from "next/server";
import { inquirySchema, customizationSchema } from "@/lib/schema";

function formatEmailBody(formType: string, data: Record<string, unknown>): string {
  const lines = [
    `New ${formType} submission from accumeasuretech.com`,
    `Time: ${new Date().toISOString()}`,
    "",
    ...Object.entries(data)
      .filter(([k, v]) => k !== "formType" && v !== undefined && v !== "")
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : String(v)}`),
  ];
  return lines.join("\n");
}

function leadPayload(formType: string, data: Record<string, unknown>) {
  const cleanData = Object.fromEntries(
    Object.entries(data).filter(([key]) => key !== "website" && key !== "formType")
  );

  return {
    source: "accumeasuretech.com",
    formType,
    submittedAt: new Date().toISOString(),
    data: cleanData,
  };
}

async function deliverEmail(formType: string, data: Record<string, unknown>): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.EMAIL_TO;
  if (!apiKey || !to) return false;

  const from = process.env.EMAIL_FROM || "AccuMeasure Website <onboarding@resend.dev>";
  const subjectPrefix = formType === "customization" ? "[CUSTOM REQUEST]" : "[INQUIRY]";
  const country = typeof data.country === "string" ? ` — ${data.country}` : "";
  const company = typeof data.company === "string" ? ` — ${data.company}` : "";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: typeof data.email === "string" ? data.email : undefined,
      subject: `${subjectPrefix}${company}${country}`,
      text: formatEmailBody(formType, data),
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.error(`[${formType.toUpperCase()}] Email delivery failed (${res.status}):`, err);
    return false;
  }
  return true;
}

async function backupLead(formType: string, data: Record<string, unknown>): Promise<boolean> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (process.env.LEAD_WEBHOOK_SECRET) {
      headers["X-Lead-Webhook-Secret"] = process.env.LEAD_WEBHOOK_SECRET;
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(leadPayload(formType, data)),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error(`[${formType.toUpperCase()}] Lead backup failed (${res.status}).`);
      return false;
    }
    return true;
  } catch (e) {
    const reason = e instanceof Error ? e.name : "UnknownError";
    console.error(`[${formType.toUpperCase()}] Lead backup error:`, reason);
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;
  const formType = data.formType === "customization" ? "customization" : "inquiry";

  const schema = formType === "customization" ? customizationSchema : inquirySchema;
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot tripped: pretend success so bots don't adapt, but skip logging as
  // a lead and skip email delivery.
  if (typeof parsed.data.website === "string" && parsed.data.website.length > 0) {
    console.warn(`[${formType.toUpperCase()}] Honeypot triggered — dropped bot submission.`);
    return NextResponse.json({ success: true, message: "Inquiry received." });
  }

  // Avoid putting personal contact details into platform logs.
  console.info(`[${formType.toUpperCase()}] New valid submission received.`);

  const leadData = parsed.data as Record<string, unknown>;

  const backedUp = await backupLead(formType, leadData).catch((e) => {
    const reason = e instanceof Error ? e.name : "UnknownError";
    console.error(`[${formType.toUpperCase()}] Lead backup error:`, reason);
    return false;
  });
  if (!backedUp && process.env.LEAD_WEBHOOK_URL) {
    console.warn(`[${formType.toUpperCase()}] Lead backup NOT delivered.`);
  }

  const delivered = await deliverEmail(formType, leadData).catch(
    (e) => {
      console.error(`[${formType.toUpperCase()}] Email delivery error:`, e);
      return false;
    }
  );
  if (!delivered) {
    console.warn(
      `[${formType.toUpperCase()}] Email NOT delivered — set RESEND_API_KEY and EMAIL_TO env vars.`
    );
  }

  return NextResponse.json({
    success: true,
    message:
      formType === "customization"
        ? "Custom request received. Our team will reply within 24 hours."
        : "Inquiry received. We will reply within 24 hours.",
  });
}
