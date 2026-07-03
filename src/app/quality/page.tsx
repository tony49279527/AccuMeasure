import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Thermometer, Gauge, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance — 5-Stage QC & 72h Aging Test",
  description:
    "5-stage quality control, 72-hour aging test on every unit, calibration certificate with every shipment. 99.8% pass rate, <0.3% field failure rate. ISO 9001 certified.",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: "Quality Assurance — 5-Stage QC & 72h Aging Test",
    description:
      "Every unit undergoes 72 hours of continuous testing under temperature cycling. 99.8% pass rate. ISO 9001, CE, ATEX certified.",
    images: [{ url: "/factory/5.jpg", width: 1200, height: 630, alt: "72-Hour Aging Test" }],
  },
};

export default function QualityPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-dark mb-6">
            Quality You Can Trust
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            5-stage quality control. 72-hour aging test on every unit. Calibration certificate with every shipment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Our 5-Stage Quality Control
          </h2>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: 1, title: "IQC", desc: "Incoming Material Inspection" },
              { step: 2, title: "IPQC", desc: "In-Process Quality Control" },
              { step: 3, title: "72h", desc: "Aging Test", highlight: true },
              { step: 4, title: "OQC", desc: "Outgoing Quality Control" },
              { step: 5, title: "Cal", desc: "Lab Certification" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`card text-center ${
                  item.highlight ? "border-cta bg-cta/5" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">
                The 72-Hour Aging Test — Our Signature
              </h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Every single unit — not a sample, every unit — goes through 72 hours of continuous testing under:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Temperature cycling: -20°C to +70°C, 3 cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Vibration: 10g, 20-2000Hz, 2 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Power fluctuation simulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                    <span>Post-aging re-calibration to confirm zero drift</span>
                  </li>
                </ul>
                <p className="text-white/90 mt-6">
                  Why? Because in 2018, a batch came back from a Middle East customer because epoxy softened at 55°C ambient. We learned. Now we test every unit to the extreme.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/factory/5.jpg"
                alt="72-Hour Aging Test Room"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Calibration Laboratory
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gauge,
                title: "Pressure Calibration",
                desc: "GE Druck DPI 620, Class 0.025",
              },
              {
                icon: Thermometer,
                title: "Flow Calibration",
                desc: "Standard volume method, DN15-DN600",
              },
              {
                icon: Gauge,
                title: "Level Calibration",
                desc: "10m standard water tower",
              },
              {
                icon: Clock,
                title: "Data Traceability",
                desc: "2-year archive, traceable to national standards",
              },
            ].map((item, idx) => (
              <div key={idx} className="card">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Quality Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "99.8%", label: "Pass Rate" },
              { number: "<0.3%", label: "Field Failure Rate (1 year)" },
              { number: "<0.1%", label: "Return Rate" },
              { number: "100%", label: "Calibration Certificate Coverage" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-border text-center">
                <div className="text-4xl font-bold text-cta mb-2">{item.number}</div>
                <div className="text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
