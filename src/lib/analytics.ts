/**
 * Client-side analytics helper for Google Analytics 4 (GA4) & Lead Tracking.
 * Safe to invoke anywhere on the client (handles SSR and uninitialized gtag gracefully).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

/**
 * Dispatches a custom event to GA4 if initialized.
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Dev Log] ${eventName}:`, params);
  }
}

/**
 * Standard B2B Lead Conversion event when a buyer submits an inquiry or RFQ.
 */
export function trackLeadEvent(data: {
  formType: "inquiry" | "customization";
  productId?: string;
  productName?: string;
  category?: string;
  country?: string;
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}) {
  trackEvent("generate_lead", {
    event_category: "Engagement",
    event_label: data.productName || data.formType,
    form_type: data.formType,
    product_id: data.productId || "general",
    buyer_country: data.country || "unknown",
    landing_page: data.landingPage || "",
    referrer: data.referrer || "",
    utm_source: data.utmSource || "",
    utm_medium: data.utmMedium || "",
    utm_campaign: data.utmCampaign || "",
  });
}

/**
 * Dispatched when a buyer clicks direct contact actions (WhatsApp, Email, Call).
 */
export function trackContactClick(channel: "whatsapp" | "email" | "phone", label?: string) {
  trackEvent("contact_click", {
    event_category: "Lead Intent",
    event_label: label || channel,
    channel: channel,
  });
}

/**
 * Dispatched when a buyer requests a controlled datasheet, manual, 3D model, or certificate scan.
 */
export type DocumentRequestSource = "product" | "resources" | "certificates" | "quality";

export function trackDocumentRequest(data: {
  documentName: string;
  productId?: string;
  productName?: string;
  source: DocumentRequestSource;
}) {
  trackEvent("document_request", {
    event_category: "Lead Intent",
    event_label: data.documentName,
    document_name: data.documentName,
    product_id: data.productId || "general",
    product_name: data.productName || "general",
    source: data.source,
  });
}
