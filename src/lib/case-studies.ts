import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "saudi-water-radar-level",
    title: "Saudi Water Co. — Radar Level Sensors",
    datePublished: "2025-11-12",
    dateModified: "2026-06-20",
    clientType: "Water Utility",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    productIds: ["2"],
    background:
      "Saudi Water Co. operates dozens of large crude and water storage tanks across the Kingdom. They were sourcing 80GHz radar level transmitters from a leading European brand at premium pricing.",
    challenge:
      "Cut procurement cost by 60% without compromising on accuracy or reliability in 55°C+ desert ambient temperatures.",
    solution: [
      "Supplied AM-RL80 80GHz FMCW radar level transmitters as a drop-in replacement.",
      "Custom high-temperature antenna and epoxy rated to +120°C ambient.",
      "Every unit passed the 72-hour aging test including extended thermal cycling.",
    ],
    results: [
      { metric: "Cost Saved", value: "71%" },
      { metric: "Field Failures (6 months)", value: "0" },
      { metric: "Delivery Time", value: "18 days" },
    ],
    testimonial:
      "We were skeptical about switching from our European supplier, but AccuMeasure proved us wrong. Same quality, 1/3 the price.",
    testimonialAuthor: "Procurement Manager",
    image: "/cases/saudi-water.jpg",
  },
  {
    id: "2",
    slug: "indonesia-pdam-electromagnetic-flow",
    title: "Indonesia PDAM — Electromagnetic Flow Meters",
    datePublished: "2025-12-03",
    dateModified: "2026-06-20",
    clientType: "Water Utility",
    country: "Indonesia",
    flag: "🇮🇩",
    productIds: ["5"],
    background:
      "A regional Indonesian water utility (PDAM) needed accurate flow measurement for treated water distribution across a growing municipal network.",
    challenge:
      "Source 200 electromagnetic flow meters with PTFE liners within a tight budget and a 3-week deadline for a government-funded project.",
    solution: [
      "Delivered 200 units of AM-EMF100 electromagnetic flow meters, DN50-DN300.",
      "PTFE liners and 316L electrodes for treated water compatibility.",
      "Pre-calibrated in our lab with individual certificates to streamline commissioning.",
    ],
    results: [
      { metric: "Units Delivered", value: "200" },
      { metric: "Repeat Order", value: "500" },
      { metric: "Lead Time", value: "15 days" },
    ],
    testimonial:
      "The team is incredibly responsive. We had custom requirements, and they delivered in just 2 weeks. We've already placed a repeat order for 500 more.",
    testimonialAuthor: "Engineering Director",
    image: "/cases/indonesia-pdam.jpg",
  },
  {
    id: "3",
    slug: "brazil-integrator-oem-pressure-gauge",
    title: "Brazil Integrator — OEM Digital Pressure Gauges",
    datePublished: "2026-01-15",
    dateModified: "2026-06-20",
    clientType: "System Integrator",
    country: "Brazil",
    flag: "🇧🇷",
    productIds: ["9"],
    background:
      "A Brazilian system integrator wanted to launch their own branded line of digital pressure gauges without investing in manufacturing.",
    challenge:
      "Find an OEM partner for private-label digital pressure gauges with custom branding and a competitive unit price.",
    solution: [
      "OEM branding of AM-PG200 smart digital pressure gauges with the client's logo and packaging.",
      "Custom pressure ranges and display units configured in firmware.",
      "No tooling fee, MOQ 100 units for the first order.",
    ],
    results: [
      { metric: "First Order", value: "500" },
      { metric: "Reorder", value: "2,000" },
      { metric: "Margin Gain", value: "45%" },
    ],
    testimonial:
      "The OEM service is seamless. Our customers can't tell the difference — but we love the margin. AccuMeasure handles manufacturing so we can focus on sales.",
    testimonialAuthor: "CEO",
    image: "/cases/brazil-oem.jpg",
  },
];

export const clientLogos = [
  "Saudi Water Co.",
  "Indonesia PDAM",
  "Brazil Integrator",
  "Dubai Energy",
  "Vietnam Water",
  "Turkey Chemicals",
  "Kenya Mining",
  "Mexico Oil & Gas",
  "Philippines Utility",
  "Kuwait Refinery",
  "Chile Mining",
  "UAE EPC",
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesByProductId(productId: string): CaseStudy[] {
  return caseStudies.filter((c) => c.productIds.includes(productId));
}
