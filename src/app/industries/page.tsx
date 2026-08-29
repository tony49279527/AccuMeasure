import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Beef, Droplets, Factory, Gauge, Microscope, Shield, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industrial Measurement Solutions by Industry | AccuMeasure",
  description:
    "Find level, flow, and pressure instruments for water, oil and gas, chemicals, food, pharmaceutical, and manufacturing applications. Request model advice.",
  alternates: { canonical: "/industries" },
  openGraph: {
    url: "/industries",
    title: "Industries — Measurement Solutions by Application | AccuMeasure",
    description:
      "From water treatment to oil & gas, chemical processing to pharmaceuticals — find the right measurement instrument for your industry.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Industries" }],
  },
};

interface IndustryCard {
  icon: typeof Droplets;
  name: string;
  description: string;
  products: string[];
  image: string;
  highlight: string;
  applicationHref?: string;
  applicationLabel?: string;
}

const industries: IndustryCard[] = [
  {
    icon: Droplets,
    name: "Water & Wastewater Treatment",
    description:
      "Level measurement for raw water tanks, flocculation basins, sludge thickeners, and chemical dosing tanks. Flow metering for distribution networks, pump stations, and effluent discharge monitoring.",
    products: ["1", "3", "4", "5"],
    image: "/industries/water-treatment.jpg",
    highlight: "Confirm measurement principle, wetted materials, and current document scope for each water or dosing application.",
    applicationHref: "/applications/electromagnetic-flow-meter-for-water-treatment",
    applicationLabel: "Flow Meter for Water Treatment",
  },
  {
    icon: Beef,
    name: "Oil & Gas",
    description:
      "Evaluate level, pressure, and gas-flow options only after the area classification, hydrocarbon conditions, installation geometry, and required controlled documents are reviewed.",
    products: ["2", "7", "8"],
    image: "/industries/oil-gas.jpg",
    highlight: "Hazardous-area suitability requires a current document that names the exact quoted model, marking, holder, and scope.",
    applicationHref: "/applications/radar-level-sensor-for-oil-tank",
    applicationLabel: "Radar for Oil Storage Tanks",
  },
  {
    icon: Microscope,
    name: "Chemical Processing",
    description:
      "Chemical measurement starts with media compatibility, temperature, pressure, tank or pipe geometry, installation, and the required documentation for the project.",
    products: ["1", "2", "3", "5"],
    image: "/industries/chemical.jpg",
    highlight: "Request the current materials, configuration, and document review before using a product with an aggressive medium.",
  },
  {
    icon: Gauge,
    name: "Pharmaceutical & Life Sciences",
    description:
      "Evaluate flow, level, and pressure options from cleanability, material compatibility, process connection, documentation, and validation requirements.",
    products: ["5", "7", "9"],
    image: "/industries/pharma.jpg",
    highlight: "Confirm the current model data, materials, and project-specific validation documents before approval.",
  },
  {
    icon: Factory,
    name: "Food & Beverage",
    description:
      "Evaluate level, flow, and pressure options by media contact, cleaning process, process connection, installation access, and required documents.",
    products: ["3", "6", "9"],
    image: "/industries/food-beverage.jpg",
    highlight: "Choose a technology only after confirming cleaning, material, installation, and acceptance requirements for the exact project.",
  },
  {
    icon: Shield,
    name: "Manufacturing & Automation",
    description:
      "Review pressure, level, and flow options for machine integration, control signal, installation constraints, environmental conditions, and maintenance access.",
    products: ["4", "5", "8"],
    image: "/industries/manufacturing.jpg",
    highlight: "Confirm the current configuration, operating conditions, integration requirements, and documentation before release.",
    applicationHref: "/applications/pressure-transmitter-for-oem-equipment",
    applicationLabel: "Pressure Transmitters for OEM",
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
              Use industry context to structure the level, flow, or pressure technology review.
              Each application has its own process, installation, and documentation requirements.
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
                    <p className="text-sm font-medium text-dark mb-1">Project Checks</p>
                    <p className="text-sm text-muted">{ind.highlight}</p>
                  </div>

                  {prods.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-dark mb-3 text-sm uppercase tracking-wide">
                        Relevant Product Pages
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
                  {ind.applicationHref && (
                    <Link
                      href={ind.applicationHref}
                      className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:underline"
                    >
                      View {ind.applicationLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
            Tell us your application, installation conditions, and documentation needs.
            We will review the relevant technology and current model information.
          </p>
          <Link href="/contact" className="btn-primary">
            Tell Us Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
