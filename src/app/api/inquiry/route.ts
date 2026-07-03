import { NextResponse } from "next/server";
import { inquirySchema, customizationSchema } from "@/lib/schema";

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

  // TODO: integrate email delivery (Resend/Nodemailer) or persistence (DB).
  // Inquiry data is logged server-side for now; wire up an email service via env vars.
  console.log(`[${formType.toUpperCase()}] New submission:`, parsed.data);

  return NextResponse.json({
    success: true,
    message:
      formType === "customization"
        ? "Custom request received. Our team will reply within 24 hours."
        : "Inquiry received. We will reply within 24 hours.",
  });
}
