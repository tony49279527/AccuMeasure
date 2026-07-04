import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

const teamMembers = [
  {
    name: "Zhang Wei",
    jobTitle: "Founder & CEO",
    description: "Former aerospace measurement engineer at AVIC. M.Sc. from Xi'an Jiaotong University. 18 years in industrial measurement.",
    image: "/team/zhang-wei.jpg",
  },
  {
    name: "Li Mei",
    jobTitle: "CTO",
    description: "Ph.D. in Instrument Science from Tsinghua University. 15 years in sensor R&D. Holds 12 patents in level measurement.",
    image: "/team/li-mei.jpg",
  },
  {
    name: "Wang Jun",
    jobTitle: "Head of Quality",
    description: "15 years in industrial QC. Led ISO 9001 implementation. Certified internal auditor (IRCA).",
    image: "/team/wang-jun.jpg",
  },
];

const certifications = [
  { name: "ISO 9001:2015", number: "CN-2019-ISO-0347", issuer: "SGS", image: "/certs/iso9001.jpg" },
  { name: "CE Marking", number: "EC-1282/2023", issuer: "TÜV Rheinland", image: "/certs/ce.jpg" },
  { name: "ATEX", number: "ATEX-2022-0158", issuer: "DEKRA", image: "/certs/atex.jpg" },
  { name: "RoHS", number: "RoHS-3.0-2024", issuer: "Intertek", image: "/certs/rohs.jpg" },
  { name: "Alibaba Gold Supplier", number: "Verified 8 years", issuer: "Alibaba.com", image: "/certs/alibaba-gold.jpg" },
];

export const metadata: Metadata = {
  title: "About Us — Measurement Instrument Factory in Xi'an",
  description:
    "Founded in 2014, AccuMeasure is a 82-person measurement instrument factory in Xi'an, China. From 3 people to exporting to 40+ countries. Aerospace-grade quality at 1/3 the cost.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AccuMeasure — Measurement Instrument Factory in Xi'an",
    description:
      "Founded in 2014 by Xi'an Jiaotong University and aerospace engineers. 82 employees, 2,600 sqm facility, exporting to 40+ countries.",
    images: [{ url: "/factory/1.jpg", width: 1200, height: 630, alt: "AccuMeasure Factory" }],
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
            <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-muted">Team Photo</span>
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
                  factory that picks up the phone at 3am — the one you can trust.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-muted">Founders Photo</span>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "AccuMeasure factory exterior in Xi'an High-Tech Zone",
              "Production line for level sensors and flow meters",
              "Calibration laboratory with GE Druck DPI 620",
              "72-hour aging test room with temperature cycling",
              "PCB assembly and soldering workstation",
              "Quality control inspection station",
              "Pressure transmitter assembly line",
              "Finished goods warehouse and shipping area",
            ].map((alt, i) => (
              <div
                key={i}
                className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={`/factory/${i + 1}.jpg`}
                  alt={alt}
                  width={300}
                  height={300}
                  className="object-cover"
                />
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
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.jobTitle} at AccuMeasure`}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
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
                <div className="aspect-[4/3] bg-primary/5 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate — ${cert.issuer}, number ${cert.number}`}
                    width={120}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <div className="font-medium text-dark text-sm">{cert.name}</div>
                <div className="text-xs text-muted mt-1">{cert.issuer}</div>
                <div className="text-xs text-muted font-mono">{cert.number}</div>
              </div>
            ))}
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
          image: `${siteConfig.url}${m.image}`,
          worksFor: { "@id": `${siteConfig.url}/#organization` },
        }))}
      />
    </div>
  );
}
