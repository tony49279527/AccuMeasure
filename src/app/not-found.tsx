import Link from "next/link";
import { ArrowRight, Home, MessageSquare, Search } from "lucide-react";

const quickLinks = [
  { label: "Level Sensors", href: "/products/level" },
  { label: "Flow Meters", href: "/products/flow" },
  { label: "Pressure Sensors", href: "/products/pressure" },
  { label: "Technical Blog", href: "/blog" },
];

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 bg-bg-light min-h-[70vh]">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="w-10 h-10 text-primary" />
          </div>
          <p className="text-sm font-semibold text-primary mb-3">404 · Page not found</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            This measurement page is not available
          </h1>
          <p className="text-lg text-muted mb-10">
            The URL may have changed, or the product may require a custom configuration.
            Use the links below to find level sensors, flow meters, pressure transmitters,
            or ask our engineers for a recommendation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-secondary">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link href="/contact" className="btn-primary">
              <MessageSquare className="w-4 h-4" />
              Ask an Engineer
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-border rounded-xl p-5 text-left group hover:border-primary transition-colors"
              >
                <span className="font-medium text-dark group-hover:text-primary">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted mt-3 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
