import { products } from "./products";

/**
 * Single source of truth for buyer-facing commercial facts.
 * Homepage / About / Contact FAQ / category meta must read from here —
 * never hardcode conflicting MOQ, lead time, price, or aging-test claims.
 */

const prices = products.map((p) => p.priceFrom);
const moqs = products.map((p) => p.moq);

export const companyFacts = {
  foundedYear: 2014,
  yearsExportingLabel: "Since 2014",
  yearsExportingShort: "12 years",
  facilitySqm: 2600,
  employees: 82,
  rdEngineers: 15,
  qcInspectors: 5,
  exportMarkets: "40+",
  warrantyYears: 2,
  warrantyLabel: "2 years",
  agingHours: 72,
  // Align Quality / Product / Certificates pages on one aging profile.
  agingTempRange: "0°C to 50°C",
  agingCycles: 3,
  agingSpec: "0°C to 50°C, 3 cycles",
  samplePolicy: "1 sample at unit price (refundable against first bulk order)",
  moqRangeLabel: `1 sample · bulk MOQ ${Math.min(...moqs)}–${Math.max(...moqs)} by model`,
  leadTimeStandard: "15-20 days",
  leadTimeCustom: "25-35 days",
  leadTimeLabel: "15-20 days standard · 25-35 days custom",
  priceFrom: Math.min(...prices),
  priceFromLabel: `From $${Math.min(...prices)} (FOB Xi'an)`,
  certificationsPublic: ["ISO 9001", "CE", "ATEX", "RoHS"] as const,
  // IECEx is listed on AM-RL80 but has no number/issuer yet — keep off homepage
  // until a verifiable certificate entry exists in certifications.ts.
};

export function categoryPriceFrom(category: "level" | "flow" | "pressure"): number {
  const list = products.filter((p) => p.category === category).map((p) => p.priceFrom);
  return Math.min(...list);
}

export const contactFaqs = [
  {
    q: "What's your MOQ?",
    a: `${companyFacts.samplePolicy}. Bulk MOQ ranges from ${Math.min(...moqs)} to ${Math.max(...moqs)} units depending on the model — see each product page for the exact figure.`,
  },
  {
    q: "How long is the lead time?",
    a: `${companyFacts.leadTimeStandard} for standard models, ${companyFacts.leadTimeCustom} for custom/OEM orders.`,
  },
  {
    q: "Do you provide calibration certificates?",
    a: "Yes. Every unit ships with an individual calibration certificate and serial-number traceability.",
  },
  {
    q: "Can I visit your factory?",
    a: "Yes — factory visits are welcome. A live video tour is also available on request.",
  },
  {
    q: "What payment methods do you accept?",
    a: "T/T, PayPal, L/C, and Alibaba Trade Assurance.",
  },
];
