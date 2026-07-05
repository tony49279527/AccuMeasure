export const siteConfig = {
  name: "AccuMeasure Instruments Co., Ltd.",
  shortName: "AccuMeasure",
  cnName: "西安精准测量仪器有限公司",
  url: "https://www.accumeasuretech.com",
  email: "info@accumeasuretech.com",
  whatsapp: "8613800000000",
  whatsappDisplay: "+86-138-0000-0000",
  phone: "+8613800000000",
  phoneDisplay: "+86-138-0000-0000",
  address: "High-Tech Zone, Xi'an, Shaanxi, China",
  officeHours: "Mon-Fri 9:00-18:00 (UTC+8)",
  description:
    "Factory-direct industrial measurement instruments from Xi'an, China. Capacitive & radar level sensors, electromagnetic flow meters, pressure transmitters. ISO9001 certified. 10+ years exporting to 40+ countries.",
  social: {
    linkedin: "https://www.linkedin.com/company/accumeasure",
    youtube: "https://youtube.com/@accumeasure",
    alibaba: "https://accumeasure.en.alibaba.com",
  },
};

export const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi AccuMeasure, I'd like to get a quote for your measurement instruments.",
)}`;
export const telLink = `tel:${siteConfig.phone}`;

/** WhatsApp link pre-filled with a product-specific message — lowers the buyer's effort to start a conversation. */
export function waLinkFor(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
