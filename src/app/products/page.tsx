import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ProductsExplorer } from "@/components/products-explorer";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Industrial Sensors & Flow Meters | AccuMeasure",
  description:
    "Compare level sensors, flow meters, and pressure instruments by application and published selection data. Request current specifications and project terms.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: "/products",
    title: "Industrial Sensors & Flow Meters | AccuMeasure",
    description:
      "Compare level sensors, flow meters, and pressure instruments by application and published selection data. Request current specifications and project terms.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Industrial Sensors" }],
  },
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
              output signal, documentation need, or measuring range. Confirm the current datasheet,
              document scope, and commercial terms for the selected configuration before ordering.
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
                currently present for buyer review. For adjacent technologies such as vortex,
                TDR/guided-wave radar, differential pressure, or temperature transmitters, send the
                duty for an engineering feasibility review before treating the configuration as available.
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
