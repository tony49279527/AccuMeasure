import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ProductsExplorer } from "@/components/products-explorer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { companyFacts } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Products — Level Sensors, Flow Meters & Pressure Transmitters",
  description:
    `Browse 9 factory-direct industrial measurement instruments: capacitive & 80GHz radar level sensors, electromagnetic & ultrasonic flow meters, piezoresistive pressure transmitters. From $${companyFacts.priceFrom}.`,
  alternates: { canonical: "/products" },
  robots: { index: true, follow: true },
  keywords: [
    "level sensor",
    "radar level transmitter",
    "electromagnetic flow meter",
    "pressure transmitter",
    "industrial measurement",
  ],
};

export default function ProductsPage() {
  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Products", href: "/products" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-4">
              Industrial Measurement Products: Level Sensors, Flow Meters &amp; Pressure Transmitters
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              Search factory-direct level, flow, and pressure instruments by model, application,
              output signal, certification, or measuring range. Every unit ships with a calibration certificate.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <ProductsExplorer />
      </Suspense>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="bg-white rounded-xl border border-border p-8 md:p-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">
                Looking for vortex, guided-wave, DP, or temperature instruments?
              </h2>
              <p className="text-muted mb-4">
                Our published catalog focuses on the nine core level, flow, and pressure models we
                manufacture and stock for export. Adjacent technologies (vortex, TDR/guided-wave radar,
                differential pressure, temperature transmitters) are available via OEM/ODM engineering —
                tell us the duty and we confirm feasibility within 7 days.
              </p>
              <p className="text-sm text-muted">
                Prefer application-first browsing? Start from our{" "}
                <Link href="/applications" className="text-accent hover:underline">
                  application guides
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/customization" className="btn-primary justify-center">
                Ask About Custom / OEM
              </Link>
              <Link href="/contact" className="btn-secondary justify-center">
                Send Specs for Matching
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
