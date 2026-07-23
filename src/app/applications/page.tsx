import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, CheckCircle2, Gauge, Waves } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { applicationPages } from "@/lib/applications";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industrial Sensor Application Guides | AccuMeasure",
  description:
    "Choose level, flow, or pressure instruments by medium, process conditions, installation, output, and certification. Review application guides and RFQ inputs.",
  alternates: { canonical: "/applications" },
  openGraph: {
    url: "/applications",
    title: "Application Guides | AccuMeasure",
    description:
      "Buyer-focused application pages linking AccuMeasure instruments to real industrial use cases.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Applications" }],
  },
};

const measurementJobs = [
  {
    title: "Level measurement",
    href: "/products/level",
    icon: Waves,
    description:
      "Measure liquids or bulk solids in tanks, vessels, and silos. Start with medium, measuring range, vapor or dust, foam, nozzle geometry, temperature, pressure, and hazardous-area classification.",
    choice:
      "Radar suits difficult vapor, dust, foam, narrow nozzles, and long ranges. Ultrasonic is a practical lower-cost option for clean liquids and open channels. Contact probes suit compact vessels when the medium is compatible.",
  },
  {
    title: "Flow measurement",
    href: "/products/flow",
    icon: Activity,
    description:
      "Measure conductive liquids, non-invasive pipe flow, or gas consumption. Define medium conductivity, pipe size and material, flow range, pressure, temperature, installation constraints, and straight-run availability.",
    choice:
      "Electromagnetic meters suit conductive liquids with no moving parts. Clamp-on ultrasonic meters avoid pipe cutting. Thermal mass meters are designed for gas measurement and control.",
  },
  {
    title: "Pressure measurement",
    href: "/products/pressure",
    icon: Gauge,
    description:
      "Measure gauge, absolute, or differential pressure in process equipment and OEM systems. Confirm normal and surge pressure, wetted materials, process connection, ambient conditions, and required accuracy.",
    choice:
      "Transmitters integrate with PLC and control systems. Digital gauges support local indication and retrofit work. Hazardous sites require the exact protection concept and certificate scope to be checked before ordering.",
  },
];

const rfqInputs = [
  "Medium, concentration, conductivity, viscosity, and whether solids, foam, vapor, or dust are present",
  "Normal and maximum temperature, pressure, range, and expected process surges",
  "Tank drawing or pipe size, connection standard, available mounting space, and installation constraints",
  "Power supply, 4-20mA, pulse, HART, RS485 Modbus, or other control-system interface",
  "Required IP rating, hazardous-area classification, material, calibration, and market documentation",
  "Sample quantity, annual volume, delivery country, target date, branding, and packaging requirements",
];

export default function ApplicationsIndexPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "@id": `${siteConfig.url}/applications#itemlist`,
          name: "AccuMeasure industrial measurement application guides",
          numberOfItems: applicationPages.length,
          itemListElement: applicationPages.map((page, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: page.h1,
            url: `${siteConfig.url}/applications/${page.slug}`,
          })),
        }}
      />

      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Applications", href: "/applications" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-dark mb-4">
              Industrial Measurement Application Guides
            </h1>
            <p className="text-lg text-muted">
              Select level sensors, flow meters, and pressure transmitters from the
              process conditions outward. These guides connect measurement jobs to
              suitable technologies, product specifications, installation checks, and
              the information needed for an engineering review.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold text-dark mb-3">
              Start with the measurement job
            </h2>
            <p className="text-muted">
              A reliable selection starts with the medium, process limits, installation,
              and control-system requirements. Use the three paths below to narrow the
              technology before comparing individual models.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {measurementJobs.map((job) => {
              const Icon = job.icon;
              return (
                <article key={job.title} className="card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">{job.title}</h3>
                  <p className="text-muted text-sm leading-6 mb-3">{job.description}</p>
                  <p className="text-muted text-sm leading-6 mb-5">{job.choice}</p>
                  <Link href={job.href} className="inline-flex items-center gap-2 text-primary font-medium">
                    Compare instruments <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold text-dark mb-3">Application and selection guides</h2>
            <p className="text-muted">
              Review common use cases, the operating conditions that change the
              recommendation, related instruments, and a focused checklist for your RFQ.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {applicationPages.map((page) => (
              <Link
                key={page.slug}
                href={`/applications/${page.slug}`}
                className="card group bg-white"
              >
                <div className="text-sm font-medium text-primary mb-2">{page.industry}</div>
                <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
                  {page.h1}
                </h3>
                <p className="text-muted text-sm mb-6 line-clamp-3">{page.description}</p>
                <span className="inline-flex items-center gap-2 text-accent font-medium">
                  Open guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-3">Prepare an engineering-ready RFQ</h2>
            <p className="text-muted mb-8 max-w-3xl">
              Complete inputs reduce follow-up questions and help us check range,
              materials, installation, signal integration, documentation, and delivery
              before recommending a model. Send drawings or datasheets when available.
            </p>
            <ul className="grid gap-4">
              {rfqInputs.map((input) => (
                <li key={input} className="flex gap-3 text-sm text-muted leading-6">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{input}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="border-l-4 border-primary pl-6 py-2">
            <h2 className="text-xl font-bold text-dark mb-3">Need a model recommendation?</h2>
            <p className="text-muted text-sm leading-6 mb-6">
              Share the application and operating conditions. Our team will aim to
              respond within {siteConfig.responseTarget} and identify any missing inputs
              before a formal quotation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Send application details
              </Link>
              <Link href="/compare" className="btn-secondary">
                Compare technologies
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
