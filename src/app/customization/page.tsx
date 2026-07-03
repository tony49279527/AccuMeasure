import type { Metadata } from "next";
import Link from "next/link";
import {
  Tag,
  PenTool,
  Wrench,
  Check,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { CustomizationForm } from "@/components/forms/customization-form";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "OEM / ODM Custom Manufacturing | AccuMeasure",
  description:
    "OEM branding, ODM custom design, and non-standard engineering for level sensors, flow meters, and pressure transmitters. Get a solution in 7 days, samples in 45 days.",
  alternates: { canonical: "/customization" },
};

const services = [
  {
    icon: Tag,
    name: "OEM Branding",
    tagline: "Your brand, our proven design",
    moq: "100 units",
    leadTime: "25-30 days",
    fee: "No extra fee",
    featured: false,
    features: [
      "Custom logo & packaging",
      "Standard product specs, your branding",
      "No tooling required",
      "Fastest time to market",
      "Lowest MOQ for branded products",
    ],
  },
  {
    icon: PenTool,
    name: "ODM Customization",
    tagline: "Your specs, our full design",
    moq: "500 units",
    leadTime: "45-60 days (first order)",
    fee: "$3K-$15K (refundable at MOQ)",
    featured: true,
    features: [
      "Custom enclosure & PCB design",
      "Firmware customization",
      "New mold development",
      "Full engineering support",
      "Dev fee refundable at MOQ",
    ],
  },
  {
    icon: Wrench,
    name: "Non-Standard Engineering",
    tagline: "Special conditions, custom build",
    moq: "1 unit (sample)",
    leadTime: "15-20 days (sample)",
    fee: "Sample + engineering fee",
    featured: false,
    features: [
      "Extreme temperature ratings",
      "Special material requirements",
      "Unique form factor",
      "One-off or low-volume builds",
      "Direct engineer collaboration",
    ],
  },
];

const steps = [
  { day: "Day 1", title: "Requirement Discussion" },
  { day: "Day 3-5", title: "Solution & Quote" },
  { day: "Day 7", title: "Contract & Deposit" },
  { day: "Day 8-20", title: "Design & Development" },
  { day: "Day 21-25", title: "Sample Assembly & Testing" },
  { day: "Day 25-30", title: "Sample Delivery & Approval" },
  { day: "Day 31-55", title: "Mass Production & Shipping" },
];

const deliveredCases = [
  {
    title: "Saudi WiFi Level Sensor",
    desc: "Custom WiFi-enabled level sensor with Arabic app interface for water tank monitoring.",
    qty: "1,200 units",
  },
  {
    title: "Indonesia Electromagnetic Flow Meter",
    desc: "Battery-powered portable electromagnetic flow meter for remote irrigation monitoring.",
    qty: "300 units",
  },
  {
    title: "Brazil OEM Pressure Gauge",
    desc: "Private-label digital pressure gauge with custom display language and pressure ranges.",
    qty: "2,500 units",
  },
  {
    title: "Dubai High-Temp Radar",
    desc: "80GHz radar level transmitter rated for +150°C ambient in oil storage tanks.",
    qty: "80 units",
  },
];

export default function CustomizationPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-dark mb-6">
            OEM / ODM Custom Manufacturing
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Send your specs. Get a solution in 7 days. From sample to bulk order in 45 days.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#form" className="btn-primary">Submit Custom Request</a>
            <a href="#cases" className="btn-secondary">View Custom Cases</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 border-2 relative ${
                  s.featured ? "border-primary" : "border-border"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{s.name}</h3>
                <p className="text-muted text-sm mb-6">{s.tagline}</p>

                <div className="space-y-2 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">MOQ</span>
                    <span className="text-dark font-medium">{s.moq}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Lead time</span>
                    <span className="text-dark font-medium">{s.leadTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Fee</span>
                    <span className="text-dark font-medium">{s.fee}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dark">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-12 text-center">
            Our 7-Step Custom Process
          </h2>
          <div className="grid md:grid-cols-7 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-4 border border-border text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-cta text-xs font-medium mb-1">{step.day}</div>
                  <div className="text-dark text-sm font-medium">{step.title}</div>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-border absolute top-1/2 -right-3 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-12 text-center">
            Delivered Custom Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveredCases.map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-border">
                <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-muted text-xs">Project Photo</span>
                </div>
                <h3 className="font-semibold text-dark mb-2">{c.title}</h3>
                <p className="text-muted text-sm mb-4">{c.desc}</p>
                <div className="text-cta font-bold text-lg">{c.qty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-20 bg-bg-light">
        <div className="container-max max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark mb-2">
              Submit Your Custom Request
            </h2>
            <p className="text-muted">
              Tell us what you need. Our engineers will reply within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-border">
            <CustomizationForm />
          </div>
          <div className="text-center mt-6">
            <p className="text-muted text-sm mb-2">Prefer to chat first?</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-success font-medium"
            >
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
