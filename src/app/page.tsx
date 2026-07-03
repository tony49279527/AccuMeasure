import type { Metadata } from "next";
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
import { products } from "@/lib/products";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "AccuMeasure | Level Sensor, Flow Meter & Pressure Transmitter Manufacturer",
  description:
    "Factory-direct industrial measurement instruments from Xi'an, China. Capacitive & radar level sensors, electromagnetic flow meters, pressure transmitters. ISO9001 certified. 10+ years exporting to 40+ countries.",
  alternates: { canonical: "/" },
  keywords: [
    "level sensor manufacturer",
    "radar level transmitter",
    "electromagnetic flow meter",
    "pressure transmitter",
    "industrial measurement instruments",
    "China factory",
  ],
};

export default function Home() {
  return (
    <div>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-bg-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark tracking-tight mb-6">
                Industrial Measurement Instruments,
                <span className="text-primary block mt-2">
                  Built to Last
                </span>
              </h1>
              <p className="text-lg text-muted mb-8 max-w-xl">
                Level · Flow · Pressure sensors from a factory in Xi&apos;an, China.
                10 years exporting to 40+ countries. Aerospace-grade quality at
                1/3 the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  <MessageSquare className="w-5 h-5" />
                  Get a Quote
                </Link>
                <button className="btn-secondary">
                  Download Catalog
                </button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
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
              <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Gauge className="w-32 h-32 text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted">Product Image</p>
                </div>
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
            {[
              {
                icon: Gauge,
                title: "Level Measurement",
                description:
                  "Capacitive, 80GHz radar, ultrasonic, and IoT WiFi level sensors.",
                href: "/products?category=level",
              },
              {
                icon: Waves,
                title: "Flow Measurement",
                description:
                  "Electromagnetic, ultrasonic, and digital mass flow meters.",
                href: "/products?category=flow",
              },
              {
                icon: Activity,
                title: "Pressure Measurement",
                description:
                  "Piezoresistive transmitters and smart digital pressure gauges.",
                href: "/products?category=pressure",
              },
            ].map((cat, idx) => (
              <Link key={idx} href={cat.href} className="card group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <cat.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {cat.title}
                </h3>
                <p className="text-muted mb-6">{cat.description}</p>
                <span className="inline-flex items-center gap-2 text-accent font-medium">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </span>
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
            {[
              {
                client: "Saudi Water Co.",
                product: "Radar Level Sensors",
                result: "Saved 71% vs European brand. 6 months, zero failures.",
              },
              {
                client: "Indonesia PDAM",
                product: "Electromagnetic Flow Meters",
                result: "200 units delivered. Repeat order for 500 more.",
              },
              {
                client: "Brazil Integrator",
                product: "OEM Digital Pressure Gauges",
                result: "Custom branded. First order 500, reorder 2,000.",
              },
            ].map((cs, idx) => (
              <div key={idx} className="card">
                <div className="text-sm text-muted mb-2">{cs.product}</div>
                <h3 className="text-xl font-semibold text-dark mb-4">
                  {cs.client}
                </h3>
                <p className="text-muted mb-6">{cs.result}</p>
                <Link href="/case-studies" className="text-accent font-medium inline-flex items-center gap-2">
                  Read case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center"
                >
                  <span className="text-muted">Factory Photo {i}</span>
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

      <section className="py-20 bg-primary">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Source Reliable Measurement Instruments?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get a quote within 24 hours. No pressure, just specs and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cta hover:bg-cta-hover text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-colors">
              Request a Quote
            </Link>
            <a
              href="https://wa.me/8613800000000"
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
