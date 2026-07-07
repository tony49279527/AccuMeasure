import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Beef, Droplets, Factory, Gauge, Microscope, Shield, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries — Measurement Solutions by Application | AccuMeasureTech",
  description:
    "Level, flow, and pressure measurement solutions for water treatment, oil & gas, chemical processing, food & beverage, pharmaceutical, and manufacturing industries. Factory-direct from Xi'an, China.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — Measurement Solutions by Application | AccuMeasureTech",
    description:
      "From water treatment to oil & gas, chemical processing to pharmaceuticals — find the right measurement instrument for your industry.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AccuMeasure Industries" }],
  },
};

const industries = [
  {
    icon: Droplets,
    name: "Water & Wastewater Treatment",
    description:
      "Level measurement for raw water tanks, flocculation basins, sludge thickeners, and chemical dosing tanks. Flow metering for distribution networks, pump stations, and effluent discharge monitoring.",
    products: ["1", "3", "4", "5"],
    image: "/industries/water-treatment.jpg",
    highlight: "±2mm radar accuracy for clean water; PVDF ultrasonic sensors for chemical dosing.",
  },
  {
    icon: Beef,
    name: "Oil & Gas",
    description:
      "ATEX/IECEx certified radar level transmitters for LPG/LNG storage, crude oil tanks, and separator vessels. Explosion-proof pressure transmitters for wellhead monitoring. Mass flow meters for gas distribution.",
    products: ["2", "7", "8"],
    image: "/industries/oil-gas.jpg",
    highlight: "80GHz FMCW radar with Ex d IIC T6 certification; thermal mass flow for custody transfer.",
  },
  {
    icon: Microscope,
    name: "Chemical Processing",
    description:
      "Corrosion-resistant capacitive level sensors (PVDF/316L) for acid and caustic tanks. Non-contact ultrasonic and radar level measurement for aggressive media. Electromagnetic flow meters with PTFE/PFA liners.",
    products: ["1", "2", "3", "5"],
    image: "/industries/chemical.jpg",
    highlight: "PVDF wetted parts for strong acids; PTFE-lined electromagnetic flow meters for corrosives.",
  },
  {
    icon: Gauge,
    name: "Pharmaceutical & Life Sciences",
    description:
      "High-accuracy thermal mass flow controllers for gas process control. Sanitary electromagnetic flow meters for WFI and CIP systems. Digital pressure gauges for cleanroom differential pressure monitoring.",
    products: ["5", "7", "9"],
    image: "/industries/pharma.jpg",
    highlight: "316L stainless steel construction; ±0.5% FS accuracy for process validation.",
  },
  {
    icon: Factory,
    name: "Food & Beverage",
    description:
      "Sanitary level sensors for dairy, brewery, and beverage tanks. Clamp-on ultrasonic flow meters for CIP return lines — no pipe cutting required. Digital pressure gauges for pasteurization and filling lines.",
    products: ["3", "6", "9"],
    image: "/industries/food-beverage.jpg",
    highlight: "Non-contact measurement preserves product purity; clamp-on flow meters eliminate contamination risk.",
  },
  {
    icon: Shield,
    name: "Manufacturing & Automation",
    description:
      "Pressure transmitters for hydraulic systems and pneumatic control. IoT WiFi level sensors for remote tank monitoring across facilities. Electromagnetic flow meters for coolant and lubricant distribution systems.",
    products: ["4", "5", "8"],
    image: "/industries/manufacturing.jpg",
    highlight: "Aerospace-grade vibration resistance; IoT sensors with 6-month battery life.",
  },
];

import { getProductById } from "@/lib/products";

export default function IndustriesPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "@id": `${siteConfig.url}/industries#industry-list`,
          name: "AccuMeasure industry measurement applications",
          numberOfItems: industries.length,
          itemListElement: industries.map((ind, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Thing",
              name: ind.name,
              description: ind.description,
              url: `${siteConfig.url}/industries#${ind.name.toLowerCase().replace(/\s+/g, "-")}`,
            },
          })),
        }}
      />

      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">
              Measurement Solutions by Industry
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find the right level, flow, and pressure instruments for your specific application.
              Each industry has unique requirements — we help you match the right technology.
            </p>
          </div>
        </div>
      </section>

      {industries.map((ind, idx) => {
        const prods = ind.products
          .map((pid) => getProductById(pid))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));

        return (
          <section
            key={idx}
            id={ind.name.toLowerCase().replace(/\s+/g, "-")}
            className={`py-16 ${idx % 2 === 1 ? "bg-bg-light" : ""}`}
          >
            <div className="container-max">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <ind.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-dark">{ind.name}</h2>
                  </div>
                  <p className="text-muted mb-4">{ind.description}</p>
                  <div className="bg-cta/5 border border-cta/20 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-dark mb-1">Key Capability</p>
                    <p className="text-sm text-muted">{ind.highlight}</p>
                  </div>

                  {prods.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-dark mb-3 text-sm uppercase tracking-wide">
                        Recommended Instruments
                      </h3>
                      <div className="space-y-3">
                        {prods.map((p) => (
                          <Link
                            key={p.id}
                            href={`/products/${p.slug}`}
                            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                          >
                            <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                              {p.model}
                            </span>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
                                {p.name}
                              </p>
                              <p className="text-xs text-muted">{p.tagline}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="aspect-[4/3] bg-primary/5 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={`${ind.name} measurement instruments — AccuMeasure`}
                    width={600}
                    height={450}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 bg-dark text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t see your industry?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            We work with clients across 40+ countries and many more industries.
            Tell us your application and we&apos;ll recommend the right instrument.
          </p>
          <Link href="/contact" className="btn-primary">
            Tell Us Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
