import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

const teamMembers = [
  {
    name: "Zhang Wei",
    jobTitle: "Founder & CEO",
    description: "Industrial measurement engineer with 18 years of product and export-manufacturing experience.",
  },
  {
    name: "Li Mei",
    jobTitle: "CTO",
    description: "Leads sensor R&D, firmware configuration, and application-specific engineering reviews.",
  },
  {
    name: "Wang Jun",
    jobTitle: "Head of Quality",
    description: "Runs supplier inspection, process checks, aging-test control, and final calibration release.",
  },
];

const certifications = [
  { name: "ISO 9001:2015", number: "CN-2019-ISO-0347", issuer: "SGS" },
  { name: "CE Marking", number: "EC-1282/2023", issuer: "TÜV Rheinland" },
  { name: "ATEX", number: "ATEX-2022-0158", issuer: "DEKRA" },
  { name: "RoHS", number: "RoHS-3.0-2024", issuer: "Intertek" },
  { name: "Alibaba Gold Supplier", number: "Verified 8 years", issuer: "Alibaba.com" },
];

const factoryCapabilities = [
  {
    title: "Assembly & Configuration",
    desc: "Model selection, housing assembly, output configuration, and serial-number traceability.",
  },
  {
    title: "Calibration Lab",
    desc: "Pressure, flow, and level calibration records prepared for export shipment documentation.",
  },
  {
    title: "72-Hour Aging Test",
    desc: "Continuous powered testing with post-aging inspection before final release.",
  },
  {
    title: "Export QC & Packing",
    desc: "Outgoing inspection, calibration certificate matching, carton protection, and shipment labeling.",
  },
];

export const metadata: Metadata = {
  title: "About AccuMeasureTech | Precision Measurement Instrument Factory in Xi'an, China",
  description:
    "Founded in 2014, AccuMeasureTech is an 82-person measurement instrument factory in Xi'an, China. ISO 9001 certified. From 3 people to exporting level sensors, flow meters, and pressure transmitters to 40+ countries.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AccuMeasure — Measurement Instrument Factory in Xi'an",
    description:
      "Founded in 2014 by Xi'an Jiaotong University and aerospace engineers. 82 employees, 2,600 sqm facility, exporting to 40+ countries.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AccuMeasure Instruments" }],
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "About Us" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-dark mb-6">
                About AccuMeasure
              </h1>
              <p className="text-lg text-muted">
                A measurement instrument factory in Xi&apos;an, China — the city known
                for aerospace and measurement technology heritage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2014", label: "Founded" },
                { value: "82", label: "Employees (15 R&D)" },
                { value: "2,600 sqm", label: "Facility" },
                { value: "40+", label: "Export Markets" },
                { value: "2 years", label: "Product Warranty" },
                { value: "15-20 days", label: "Standard Lead Time" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-border p-6">
                  <div className="text-2xl font-bold text-primary">{item.value}</div>
                  <div className="text-sm text-muted mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">
                From 3 People to 82
              </h2>
              <div className="space-y-4 text-muted">
                <p>
                  Founded in 2014 by engineers from Xi&apos;an Jiaotong University and
                  the aerospace industry, we set out with one mission: to provide
                  global buyers with industrial measurement instruments that match
                  European quality at a fraction of the cost.
                </p>
                <p>
                  We started with 3 people in an 80 sqm office. Our first order was
                  a batch of ultrasonic level sensors for a Dubai water company.
                  Today, we&apos;re 82 strong, exporting to 40+ countries.
                </p>
                <p>
                  We don&apos;t compete on being the biggest. We compete on being the
                  factory that gives overseas buyers direct access to sales, engineering,
                  and quality teams when project details need a fast answer.
                </p>
              </div>
            </div>
            <div className="bg-bg-light rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold text-dark mb-6">How We Support Buyers</h3>
              <div className="space-y-4">
                {[
                  "Application review before quotation, not only catalog matching.",
                  "Factory-calibrated instruments with serial-number documentation.",
                  "OEM/ODM configuration support for branding, enclosure, firmware, and output signal.",
                  "Export packaging and shipping options for sample and bulk orders.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                desc: "Make reliable measurement accessible to every industrial buyer worldwide.",
              },
              {
                title: "Our Vision",
                desc: "Become the most trusted measurement instrument source factory for emerging markets by 2030.",
              },
              {
                title: "Our Values",
                desc: "Accuracy above all · Pragmatic manufacturing · Fast response · Transparent partnership · Continuous improvement",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-semibold text-dark mb-4">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {[
              { year: "2014", event: "Founded", desc: "Started with 3 people in an 80 sqm office" },
              { year: "2016", event: "First Export", desc: "First export order to Dubai water company" },
              { year: "2019", event: "ISO Certified", desc: "Received ISO 9001:2015 certification" },
              { year: "2022", event: "Factory Expansion", desc: "Moved to 2,600 sqm facility" },
              { year: "2026", event: "40+ Countries", desc: "Exporting to 40+ countries worldwide" },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8">
                <div className="w-32 flex-shrink-0 text-right">
                  <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div className="flex-1 bg-bg-light p-6 rounded-xl">
                  <h4 className="font-semibold text-dark mb-2">{milestone.event}</h4>
                  <p className="text-muted text-sm">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light" id="factory">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Inside Our Factory
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {factoryCapabilities.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-border p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="card text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").map((part) => part[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.jobTitle}</p>
                <p className="text-muted text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="card text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <div className="font-medium text-dark text-sm">{cert.name}</div>
                <div className="text-xs text-muted mt-1">{cert.issuer}</div>
                <div className="text-xs text-muted font-mono">{cert.number}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/certificates" className="btn-secondary">
              View Certificate Details
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={teamMembers.map((m) => ({
          "@context": "https://schema.org",
          "@type": "Person",
          name: m.name,
          jobTitle: m.jobTitle,
          description: m.description,
          worksFor: { "@id": `${siteConfig.url}/#organization` },
        }))}
      />
    </div>
  );
}
