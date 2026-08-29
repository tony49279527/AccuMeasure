import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  FileCheck,
  Gauge,
  MessageSquare,
  SlidersHorizontal,
  Waves,
} from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industrial Level, Flow & Pressure Instruments | AccuMeasure",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    url: "/",
    title: "Industrial Level, Flow & Pressure Instruments | AccuMeasure",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AccuMeasure industrial measurement instruments",
      },
    ],
  },
  keywords: [
    "industrial level sensors",
    "industrial flow meters",
    "pressure transmitters",
    "industrial measurement instruments",
    "OEM measurement instruments",
  ],
};

const productCategories = [
  {
    icon: Gauge,
    eyebrow: "Level",
    title: "Level Measurement",
    description:
      "Compare radar, ultrasonic, capacitive, and connected level-sensing paths for tanks and silos.",
    href: "/products/level",
    image: "/products/am-rl80-v2.jpg",
    alt: "Radar level transmitter product image",
    chips: ["Radar", "Ultrasonic", "Capacitive"],
  },
  {
    icon: Waves,
    eyebrow: "Flow",
    title: "Flow Measurement",
    description:
      "Review electromagnetic, ultrasonic, and thermal mass measurement options for process lines.",
    href: "/products/flow",
    image: "/products/am-emf100-v2.jpg",
    alt: "Electromagnetic flow meter product image",
    chips: ["Electromagnetic", "Ultrasonic", "Thermal mass"],
  },
  {
    icon: Activity,
    eyebrow: "Pressure",
    title: "Pressure Measurement",
    description:
      "Evaluate pressure transmitters and digital gauges for process, equipment, and OEM requirements.",
    href: "/products/pressure",
    image: "/products/am-pt300-v2.jpg",
    alt: "Pressure transmitter product image",
    chips: ["Transmitters", "Gauges", "OEM"],
  },
];

const planningBriefs = [
  {
    href: "/case-studies/saudi-water-radar-level",
    title: "Water-storage level planning",
    description: "Collect tank geometry, medium, mounting, output, and document requirements before comparing models.",
  },
  {
    href: "/case-studies/indonesia-pdam-electromagnetic-flow",
    title: "Water-network flow planning",
    description: "Document conductivity, pipe details, installation, control-system, and inspection inputs for the RFQ.",
  },
  {
    href: "/case-studies/brazil-integrator-oem-pressure-gauge",
    title: "OEM pressure-instrument planning",
    description: "Align configuration, branding, sample approval, documentation, and commercial terms before release.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-bg-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-primary mb-4">Industrial measurement for B2B procurement</p>
              <h1 className="max-w-full break-words text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                Industrial Level, Flow &amp; Pressure Instruments
              </h1>
              <p className="text-lg text-muted mb-8 max-w-xl">
                Start with the application, then request the current model configuration, controlled technical documents,
                and project quotation. AccuMeasure supports buyers evaluating level, flow, pressure, and OEM measurement requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  <MessageSquare className="w-5 h-5" />
                  Start an RFQ
                </Link>
                <Link href="/products" className="btn-secondary">
                  Browse Product Categories
                </Link>
              </div>
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: ClipboardCheck, title: "Application review", body: "Share the medium, range, installation, and control-system context." },
                  { icon: SlidersHorizontal, title: "Model confirmation", body: "Confirm the exact configuration against the current datasheet." },
                  { icon: FileCheck, title: "Document review", body: "Request the current scope, revision, and project evidence before approval." },
                ].map((item) => (
                  <div key={item.title} className="border-t border-border pt-4">
                    <item.icon className="w-5 h-5 text-primary mb-2" />
                    <h2 className="font-semibold text-dark text-sm">{item.title}</h2>
                    <p className="text-xs text-muted mt-1">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/products/am-rl80-v2.jpg"
                  alt="Radar level transmitter product image"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 border border-border px-4 py-3 shadow-sm">
                <div className="text-sm font-semibold text-dark">Select by application, not a search snippet</div>
                <div className="text-xs text-muted mt-1">Confirm the current model, document scope, and commercial terms for the exact project.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">Explore Measurement Categories</h2>
            <p className="text-muted max-w-2xl mx-auto">Use the catalog to narrow a technology; confirm final suitability in the project RFQ.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Link key={category.href} href={category.href} className="card group overflow-hidden p-0">
                <div className="relative h-52 bg-bg-light overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-semibold text-primary shadow-sm">
                    <category.icon className="w-4 h-4" />
                    {category.eyebrow}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-3">{category.title}</h3>
                  <p className="text-muted mb-5">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.chips.map((chip) => (
                      <span key={chip} className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{chip}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent font-medium">
                    Explore products <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-primary mb-3">Before model approval</p>
              <h2 className="text-3xl font-bold text-dark mb-4">Build a decision record that purchasing can use</h2>
              <p className="text-muted max-w-xl">
                Keep published catalog information separate from the documents and commercial terms that must be confirmed for the selected configuration.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Measurement duty", "Medium, tank or pipe details, range, process conditions, and installation constraints."],
                ["Integration", "Power, output, control-system interface, enclosure, and environmental requirements."],
                ["Evidence", "Current datasheet, certificate scope, test or calibration records, and document revision."],
                ["Commercial terms", "Configuration, quantity, packaging, delivery, warranty, and acceptance criteria in writing."],
              ].map(([title, body]) => (
                <div key={title} className="bg-white border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-dark mb-2">{title}</h3>
                  <p className="text-sm text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-primary mb-3">Application planning</p>
              <h2 className="text-3xl font-bold text-dark">Start with project inputs</h2>
            </div>
            <Link href="/applications" className="inline-flex items-center gap-2 text-primary font-medium">
              Browse application guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {planningBriefs.map((brief) => (
              <Link key={brief.href} href={brief.href} className="card group">
                <BookOpen className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">{brief.title}</h3>
                <p className="text-sm text-muted mb-5">{brief.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                  Open planning brief <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to prepare an industrial RFQ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Send the measurement duty, configuration requirements, quantity, destination market, and required documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Start an RFQ</Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
