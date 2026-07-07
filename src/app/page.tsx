import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  Clock,
  Users,
  Calendar,
  Globe,
  Gauge,
  Waves,
  Activity,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "AccuMeasureTech | Level Sensor, Flow Meter & Pressure Transmitter Manufacturer",
  description:
    "Factory-direct industrial measurement instruments from Xi'an, China. Capacitive & radar level sensors, electromagnetic flow meters, pressure transmitters. ISO9001 certified. 10+ years exporting to 40+ countries.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  keywords: [
    "level sensor manufacturer",
    "radar level transmitter",
    "electromagnetic flow meter",
    "pressure transmitter",
    "industrial measurement instruments",
    "China factory",
  ],
};

const homeFactoryImages = [
  {
    src: "/home/factory-assembly.svg",
    alt: "AccuMeasure sensor assembly line for level transmitters and flow meters",
  },
  {
    src: "/home/factory-calibration.svg",
    alt: "Calibration bench for radar level transmitters and pressure sensors",
  },
  {
    src: "/home/factory-aging-test.svg",
    alt: "72-hour aging test racks for industrial measurement instruments",
  },
  {
    src: "/home/factory-qc-packaging.svg",
    alt: "Quality control and export packaging workflow at AccuMeasure",
  },
];

const homeProductCategories = [
  {
    icon: Gauge,
    eyebrow: "Level",
    title: "Level Measurement",
    description:
      "Capacitive, 80GHz radar, ultrasonic, and IoT WiFi level sensors.",
    href: "/products/level",
    image: "/products/am-rl80-v2.jpg",
    alt: "80GHz radar level transmitter for tanks and silos",
    chips: ["Radar", "Ultrasonic", "Capacitive"],
  },
  {
    icon: Waves,
    eyebrow: "Flow",
    title: "Flow Measurement",
    description:
      "Electromagnetic, ultrasonic, and digital mass flow meters for industrial lines.",
    href: "/products/flow",
    image: "/products/am-emf100-v2.jpg",
    alt: "Electromagnetic flow meter for water treatment and process pipelines",
    chips: ["Electromagnetic", "Ultrasonic", "Mass Flow"],
  },
  {
    icon: Activity,
    eyebrow: "Pressure",
    title: "Pressure Measurement",
    description:
      "Piezoresistive transmitters and smart digital pressure gauges.",
    href: "/products/pressure",
    image: "/products/am-pt300-v2.jpg",
    alt: "Pressure transmitter for OEM equipment and process measurement",
    chips: ["Transmitters", "Gauges", "OEM"],
  },
];

const homeCaseStudies = [
  {
    client: "Saudi Water Co.",
    product: "Radar Level Sensors",
    result: "Saved 71% vs European brand. 6 months, zero failures.",
    image: "/home/case-saudi-water.svg",
    alt: "Large water storage tanks using radar level sensors in a desert utility site",
  },
  {
    client: "Indonesia PDAM",
    product: "Electromagnetic Flow Meters",
    result: "200 units delivered. Repeat order for 500 more.",
    image: "/home/case-indonesia-flow.svg",
    alt: "Water treatment pipeline with electromagnetic flow meter installation",
  },
  {
    client: "Brazil Integrator",
    product: "OEM Digital Pressure Gauges",
    result: "Custom branded. First order 500, reorder 2,000.",
    image: "/home/case-brazil-oem.svg",
    alt: "OEM pressure gauge assembly and packaging for a system integrator",
  },
];

export default function Home() {
  return (
    <div>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-bg-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="min-w-0">
              <h1 className="max-w-full break-words text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6">
                Level Sensor, Flow Meter &amp; Pressure Transmitter Manufacturer
                <span className="text-primary block mt-2 break-words">
                  Factory-Direct from Xi&apos;an
                </span>
              </h1>
              <p className="text-lg text-muted mb-8 max-w-xl">
                Factory-direct level sensors, flow meters, and pressure transmitters
                from Xi&apos;an, China. 10 years exporting to 40+ countries.
                Aerospace-grade quality at 1/3 the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  <MessageSquare className="w-5 h-5" />
                  Get a Quote
                </Link>
                <Link href="/contact?request=catalog" className="btn-secondary">
                  Request Product Catalog
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted mt-1">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">40+</div>
                  <div className="text-sm text-muted mt-1">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">72h</div>
                  <div className="text-sm text-muted mt-1">Aging Test</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/products/am-rl80-v2.jpg"
                  alt="80GHz Radar Level Transmitter"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-primary">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Shield, label: "ISO 9001" },
              { icon: Award, label: "CE & ATEX" },
              { icon: Clock, label: "72h Test" },
              { icon: Users, label: "15 R&D" },
              { icon: Calendar, label: "7-Day Custom" },
              { icon: Globe, label: "40+ Country" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white">
                <item.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              What We Make
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive measurement solutions for your industrial needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeProductCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="card group overflow-hidden p-0">
                <div className="relative h-52 bg-bg-light overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-primary shadow-sm">
                    <cat.icon className="w-4 h-4" />
                    {cat.eyebrow}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-muted mb-5">{cat.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent font-medium">
                    Explore Products <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Why Buyers Choose AccuMeasure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "72h",
                title: "Aging Test on Every Unit",
                description:
                  "Every sensor runs 72 hours continuous testing under temperature cycling before shipping. Zero shortcuts.",
              },
              {
                number: "1/3",
                title: "European Brand Pricing",
                description:
                  "Same sensor core technology. We skip the European office and 40% brand markup. You get the saving.",
              },
              {
                number: "7 Days",
                title: "Custom Solution Turnaround",
                description:
                  "15-engineer R&D team. Send your specs, get a solution and quote in 7 days.",
              },
              {
                number: "24h",
                title: "Inquiry Response Time",
                description:
                  "We reply within 24 hours. Often faster. The factory owner picks up WhatsApp at 3am.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-border">
                <div className="text-4xl lg:text-5xl font-bold text-cta mb-4">
                  {item.number}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Trusted by Buyers Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeCaseStudies.map((cs) => (
              <div key={cs.client} className="card overflow-hidden p-0">
                <div className="relative h-48 bg-bg-light">
                  <Image
                    src={cs.image}
                    alt={cs.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted mb-2">{cs.product}</div>
                  <h3 className="text-xl font-semibold text-dark mb-4">
                    {cs.client}
                  </h3>
                  <p className="text-muted mb-6">{cs.result}</p>
                  <Link href="/case-studies" className="text-accent font-medium inline-flex items-center gap-2">
                    Read case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {homeFactoryImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
                Inside Our Factory
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted">
                    2,600 sqm facility in Xi&apos;an, China
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted">
                    SMT production line, CNC machining, assembly, aging test, calibration lab
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted">
                    82 employees, 15 R&D engineers, 5 QC inspectors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-muted">
                    Every unit: IQC → IPQC → 72h Aging → OQC → Calibration Certificate
                  </span>
                </li>
              </ul>
              <Link href="/about#factory" className="btn-secondary">
                Take a Virtual Tour <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4 text-center">
            AccuMeasure at a Glance
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            The facts buyers ask about first — before the catalog and the sales call.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: "Founded", value: "2014, Xi'an, China" },
              { label: "Facility", value: "2,600 sqm, High-Tech Zone" },
              { label: "Team", value: "82 staff, 15 R&D engineers" },
              { label: "Quality System", value: "ISO 9001:2015 (SGS)" },
              { label: "Product Certifications", value: "CE, ATEX, RoHS, IECEx" },
              { label: "Price Range", value: "From $35 (FOB Xi'an)" },
              { label: "MOQ", value: "1 sample · 50 units bulk" },
              { label: "Standard Lead Time", value: "15-20 days" },
              { label: "Burn-in Testing", value: "72-hour aging, every unit" },
              { label: "Documentation", value: "Calibration cert per unit" },
              { label: "Warranty", value: "2 years" },
              { label: "Export Markets", value: "40+ countries" },
            ].map((fact) => (
              <div key={fact.label} className="bg-bg-light rounded-lg border border-border p-4">
                <div className="text-xs text-muted uppercase tracking-wide mb-1">{fact.label}</div>
                <div className="text-sm font-semibold text-dark">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Source Reliable Measurement Instruments?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get a quote within 24 hours. No pressure, just specs and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
