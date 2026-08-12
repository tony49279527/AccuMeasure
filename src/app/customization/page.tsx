import type { Metadata } from "next";
import Image from "next/image";
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
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "OEM / ODM Instrument Customization | AccuMeasure",
  description:
    "Request an engineering review for OEM branding, ODM design, or non-standard level, flow, and pressure instruments. Scope, MOQ, and schedule are confirmed per project.",
  alternates: { canonical: "/customization" },
  openGraph: {
    url: "/customization",
    title: "OEM / ODM Instrument Customization | AccuMeasure",
    description:
      "Send application and interface requirements for a project-specific feasibility, documentation, MOQ, and schedule review.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Custom Manufacturing" }],
  },
};

const services = [
  {
    icon: Tag,
    name: "OEM Branding",
    tagline: "Branding review for an existing model",
    scope: "Logo, label, packaging, documents",
    decision: "Model and artwork review required",
    featured: false,
    features: [
      "Custom logo & packaging",
      "Standard product specs, your branding",
      "Specification and label review",
      "Artwork approval before production",
      "MOQ and schedule confirmed by model",
    ],
  },
  {
    icon: PenTool,
    name: "ODM Customization",
    tagline: "Design review against your requirements",
    scope: "Housing, electronics, firmware, interface",
    decision: "Feasibility and validation plan required",
    featured: true,
    features: [
      "Custom enclosure & PCB design",
      "Firmware customization",
      "New mold development",
      "Engineering review and test planning",
      "Tooling, fee, MOQ, and schedule quoted by scope",
    ],
  },
  {
    icon: Wrench,
    name: "Non-Standard Engineering",
    tagline: "Application review for non-standard conditions",
    scope: "Materials, process connection, range, output",
    decision: "Operating envelope must be verified",
    featured: false,
    features: [
      "Extreme temperature ratings",
      "Special material requirements",
      "Unique form factor",
      "Prototype or low-volume feasibility review",
      "Direct engineer collaboration",
      "Commercial terms confirmed after review",
    ],
  },
];

const steps = [
  { stage: "Input", title: "Requirement Review" },
  { stage: "Scope", title: "Feasibility Check" },
  { stage: "Plan", title: "Quote & Validation Plan" },
  { stage: "Design", title: "Engineering Review" },
  { stage: "Sample", title: "Assembly & Testing" },
  { stage: "Approval", title: "Customer Evaluation" },
  { stage: "Release", title: "Production Planning" },
];

const reviewExamples = [
  {
    title: "Connected Tank Monitoring",
    desc: "Review wireless connectivity, local interface, tank geometry, power, and alarm requirements.",
    check: "Verify protocol, environment, and data ownership",
    image: "/products/am-wl50-v2.jpg",
    alt: "Wireless level sensor for a connected tank monitoring requirements review",
  },
  {
    title: "Remote Water Flow Measurement",
    desc: "Review fluid conductivity, pipe size, installation constraints, power, output, and enclosure needs.",
    check: "Verify fluid, pipe, power, and installation data",
    image: "/products/am-emf100-v2.jpg",
    alt: "Electromagnetic flow meter for a remote water measurement requirements review",
  },
  {
    title: "Private-Label Pressure Display",
    desc: "Review pressure range, process media, connection, display, language, label, and packaging inputs.",
    check: "Verify range, wetted materials, and labeling",
    image: "/products/am-pg200-v2.jpg",
    alt: "Digital pressure gauge for a private-label requirements review",
  },
  {
    title: "Elevated-Temperature Radar Level",
    desc: "Review process and ambient temperatures, pressure, vapor, tank geometry, mounting, and area classification.",
    check: "Verify the complete operating envelope",
    image: "/products/am-rl80-v2.jpg",
    alt: "Radar level transmitter for an elevated-temperature application requirements review",
  },
];

export default function CustomizationPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "OEM / ODM Customization", href: "/customization" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">
              OEM / ODM Instrument Customization
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Send the application, interface, documentation, and quantity requirements. We will review feasibility and confirm the project scope before quoting commercial terms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#form" className="btn-primary">Submit Custom Request</a>
              <a href="#examples" className="btn-secondary">Review Input Examples</a>
            </div>
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
                    <span className="text-muted">Review scope</span>
                    <span className="text-dark font-medium text-right ml-4">{s.scope}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Before quote</span>
                    <span className="text-dark font-medium text-right ml-4">{s.decision}</span>
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
            Project Review and Validation Process
          </h2>
          <div className="grid sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-4 border border-border text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-cta text-xs font-medium mb-1">{step.stage}</div>
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

      <section id="examples" className="py-20">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-12 text-center">
            Requirements Review Examples
          </h2>
          <p className="text-muted text-center max-w-3xl mx-auto mb-12">
            These are example review paths, not published customer deliveries. Final specifications, compliance scope, MOQ, price, and schedule depend on the approved project requirements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewExamples.map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-border">
                <div className="relative aspect-video bg-primary/10 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-dark mb-2">{c.title}</h3>
                <p className="text-muted text-sm mb-4">{c.desc}</p>
                <div className="text-cta font-medium text-sm">{c.check}</div>
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
              Tell us what you need. Our engineers aim to reply within {siteConfig.responseTarget}.
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
