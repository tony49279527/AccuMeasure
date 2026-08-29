export interface SourceSnapshot {
  landingPage?: string;
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

const FIRST_TOUCH_KEY = "accumeasure:first-touch:v1";
const MAX_SOURCE_VALUE_LENGTH = 160;
const sourceKeys = [
  "landingPage",
  "pageUrl",
  "referrer",
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "utmContent",
  "utmTerm",
] as const;

function cleanValue(value: string | null | undefined): string {
  return (value ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, MAX_SOURCE_VALUE_LENGTH);
}

function cleanPath(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return cleanValue(path) || "/";
}

function cleanReferrer(referrer: string): string {
  if (!referrer) return "";
  try {
    const url = new URL(referrer);
    return cleanValue(`${url.origin}${cleanPath(url.pathname)}`);
  } catch {
    return "";
  }
}

function readFirstTouch(): SourceSnapshot | null {
  try {
    const raw = window.sessionStorage.getItem(FIRST_TOUCH_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    const stored = parsed as Record<string, unknown>;
    const snapshot: SourceSnapshot = {};
    for (const key of sourceKeys) {
      if (typeof stored[key] === "string") {
        snapshot[key] = cleanValue(stored[key]);
      }
    }
    return snapshot.landingPage ? snapshot : null;
  } catch {
    return null;
  }
}

function writeFirstTouch(snapshot: SourceSnapshot) {
  try {
    window.sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(snapshot));
  } catch {
    // Private browsing or storage restrictions should not block the RFQ form.
  }
}

function currentSnapshot(): SourceSnapshot {
  const params = new URLSearchParams(window.location.search);
  const path = cleanPath(window.location.pathname);
  return {
    landingPage: path,
    pageUrl: cleanValue(`${window.location.origin}${path}`),
    referrer: cleanReferrer(document.referrer),
    utmSource: cleanValue(params.get("utm_source")),
    utmMedium: cleanValue(params.get("utm_medium")),
    utmCampaign: cleanValue(params.get("utm_campaign")),
    utmContent: cleanValue(params.get("utm_content")),
    utmTerm: cleanValue(params.get("utm_term")),
  };
}

/**
 * Keep first-touch source data for one browser session, while exposing the
 * current form page separately. Query strings are deliberately excluded so
 * the lead pipeline does not retain incidental personal or order data.
 */
export function getSourceSnapshot(): SourceSnapshot {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return {};
  }

  const current = currentSnapshot();
  const storedFirstTouch = readFirstTouch();
  const firstTouch = storedFirstTouch ?? current;
  if (!storedFirstTouch) writeFirstTouch(firstTouch);

  return {
    landingPage: firstTouch.landingPage,
    pageUrl: current.pageUrl,
    referrer: firstTouch.referrer || current.referrer,
    utmSource: firstTouch.utmSource || current.utmSource,
    utmMedium: firstTouch.utmMedium || current.utmMedium,
    utmCampaign: firstTouch.utmCampaign || current.utmCampaign,
    utmContent: firstTouch.utmContent || current.utmContent,
    utmTerm: firstTouch.utmTerm || current.utmTerm,
  };
}
