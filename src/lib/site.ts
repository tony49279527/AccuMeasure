export const siteConfig = {
  name: "AccuMeasure Instruments Co., Ltd.",
  shortName: "AccuMeasure",
  cnName: "西安精准测量仪器有限公司",
  url: "https://www.accumeasuretech.com",
  email: "info@accumeasuretech.com",
  whatsapp: "8618309285711",
  whatsappDisplay: "+86-183-0928-5711",
  phone: "+8618309285711",
  phoneDisplay: "+86-183-0928-5711",
  address: "High-Tech Zone, Xi'an, Shaanxi, China",
  officeHours: "Mon-Fri 9:00-18:00 (UTC+8)",
  responseTarget: "one business day (UTC+8)",
  description:
    "Factory-direct level sensors, flow meters, and pressure transmitters from Xi'an. ISO 9001, calibration certificates, and OEM support. Request a quote.",
  social: {
    // Only keep profiles we own. Wrong LinkedIn/YouTube sameAs links poison
    // entity trust (the previous LinkedIn URL pointed at an unrelated US firm).
    alibaba: "https://accumeasure.en.alibaba.com",
  } as { linkedin?: string; youtube?: string; alibaba?: string },
};

export const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi AccuMeasure, I'd like to get a quote for your measurement instruments.",
)}`;
export const telLink = `tel:${siteConfig.phone}`;

/** WhatsApp link pre-filled with a product-specific message — lowers the buyer's effort to start a conversation. */
export function waLinkFor(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
