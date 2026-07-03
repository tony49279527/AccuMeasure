import type { Metadata } from "next";
import Link from "next/link";
import { Users, Factory, Award, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Measurement Instrument Factory in Xi'an",
  description:
    "Founded in 2014, AccuMeasure is a 82-person measurement instrument factory in Xi'an, China. From 3 people to exporting to 40+ countries. Aerospace-grade quality at 1/3 the cost.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
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
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center"
              >
                <span className="text-muted">Photo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["ISO 9001", "CE", "ATEX", "RoHS", "Gold Supplier"].map((cert, i) => (
              <div
                key={i}
                className="card text-center"
              >
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="font-medium text-dark">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
