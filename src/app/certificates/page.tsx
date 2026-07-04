import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, FileCheck, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Certificates — ISO 9001, CE, ATEX, RoHS Certified | AccuMeasure",
  description:
    "AccuMeasure certificates and quality credentials. ISO 9001:2015 certified factory (SGS), CE Marking (TÜV Rheinland), ATEX Ex d IIC T6 (DEKRA), RoHS 3.0 (Intertek). 2-year warranty on every instrument.",
  alternates: { canonical: "/certificates" },
  openGraph: {
    title: "Certificates — ISO 9001, CE, ATEX, RoHS | AccuMeasure",
    description:
      "Download and verify AccuMeasure quality certifications. ISO 9001, CE, ATEX, RoHS. Every instrument ships with an individual calibration certificate.",
    images: [{ url: "/certs/iso9001.jpg", width: 1200, height: 630, alt: "ISO 9001 Certificate" }],
  },
};

const certifications = [
  {
    name: "ISO 9001:2015",
    number: "CN-2019-ISO-0347",
    issuer: "SGS",
    image: "/certs/iso9001.jpg",
    description:
      "Quality management system covering design, manufacturing, calibration, and after-sales service for industrial measurement instruments. Annual surveillance audit by SGS.",
    scope: "Design, manufacture, and servicing of level, flow, and pressure measurement instruments.",
    validUntil: "2027",
  },
  {
    name: "CE Marking",
    number: "EC-1282/2023",
    issuer: "TÜV Rheinland",
    image: "/certs/ce.jpg",
    description:
      "Conformity with EU safety, health, and environmental requirements for products sold within the European Economic Area. Covers electromagnetic compatibility (EMC) and low-voltage directive (LVD).",
    scope: "Level sensors, flow meters, and pressure transmitters exported to EU markets.",
    validUntil: "2028",
  },
  {
    name: "ATEX",
    number: "ATEX-2022-0158",
    issuer: "DEKRA",
    image: "/certs/atex.jpg",
    description:
      "Explosion-proof certification per ATEX Directive 2014/34/EU. Ex d IIC T6 protection level for hazardous area installations in oil & gas, chemical, and LPG/LNG applications.",
    scope: "80GHz radar level transmitters (AM-RL80) and explosion-proof pressure transmitters (AM-PT300).",
    validUntil: "2027",
  },
  {
    name: "RoHS 3.0",
    number: "RoHS-3.0-2024",
    issuer: "Intertek",
    image: "/certs/rohs.jpg",
    description:
      "Restriction of Hazardous Substances compliance per EU Directive 2015/863 (RoHS 3.0). All AccuMeasure products are free from lead, mercury, cadmium, hexavalent chromium, PBBs, PBDEs, DEHP, BBP, DBP, and DIBP.",
    scope: "All AccuMeasure products shipped to EU and international markets.",
    validUntil: "2029",
  },
  {
    name: "Alibaba Gold Supplier",
    number: "Verified 8 years",
    issuer: "Alibaba.com",
    image: "/certs/alibaba-gold.jpg",
    description:
      "Verified supplier status on Alibaba.com with on-site factory audit. Confirms legal status, manufacturing capability, and export history of AccuMeasure Instruments Co., Ltd.",
    scope: "Company verification and factory assessment by Alibaba.com.",
    validUntil: "2027",
  },
];

export default function CertificatesPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Certificates" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">Certificates &amp; Compliance</h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Every AccuMeasure instrument ships with an individual calibration certificate.
              Our manufacturing facility is ISO 9001 certified. Our products hold CE, ATEX, and RoHS certifications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="space-y-12">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-5 gap-8 items-start ${idx > 0 ? "pt-12 border-t border-border" : ""}`}
              >
                <div className="lg:col-span-2">
                  <div className="aspect-[4/3] bg-primary/5 rounded-xl flex items-center justify-center overflow-hidden border border-border">
                    <Image
                      src={cert.image}
                      alt={`${cert.name} certificate issued by ${cert.issuer} — number ${cert.number}`}
                      width={400}
                      height={300}
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-dark">{cert.name}</h2>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-bg-light rounded-lg p-3">
                      <p className="text-xs text-muted mb-1">Certificate Number</p>
                      <p className="text-sm font-mono-num font-semibold text-dark">{cert.number}</p>
                    </div>
                    <div className="bg-bg-light rounded-lg p-3">
                      <p className="text-xs text-muted mb-1">Issuing Body</p>
                      <p className="text-sm font-semibold text-dark">{cert.issuer}</p>
                    </div>
                    <div className="bg-bg-light rounded-lg p-3">
                      <p className="text-xs text-muted mb-1">Scope</p>
                      <p className="text-sm text-dark">{cert.scope}</p>
                    </div>
                    <div className="bg-bg-light rounded-lg p-3">
                      <p className="text-xs text-muted mb-1">Valid Until</p>
                      <p className="text-sm font-semibold text-dark">{cert.validUntil}</p>
                    </div>
                  </div>

                  <p className="text-muted text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-dark mb-4">Individual Calibration Certificate</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Every AccuMeasure instrument undergoes 72 hours of continuous testing with temperature cycling
              (0°C to 50°C) before shipping. A calibration certificate with traceable reference standards is
              included in every shipment at no extra charge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "5-Stage QC",
                desc: "Incoming inspection → In-process check → Calibration → Aging test → Final inspection.",
              },
              {
                icon: Award,
                title: "99.8% Pass Rate",
                desc: "Less than 0.3% field failure rate across 40+ countries over 10+ years of exports.",
              },
              {
                icon: FileCheck,
                title: "2-Year Warranty",
                desc: "Every instrument backed by a 2-year factory warranty with free technical support.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">
            Need to verify a certificate?
          </h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            Contact us with the certificate number and we&apos;ll provide verification documents
            from the issuing body within 48 hours.
          </p>
          <Link href="/contact" className="btn-primary flex items-center gap-2 mx-auto w-fit">
            Request Certificate Verification <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
