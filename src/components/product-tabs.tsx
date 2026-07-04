import { FileText, Settings, MessageSquare, Droplet, Droplets, FlaskConical, ShieldCheck, Fuel, Factory, Microscope, Beer, Package, Home, SprayCan, Filter, Trees, Thermometer } from "lucide-react";
import type { Product } from "@/lib/types";

const appIcons: Record<string, typeof Droplet> = {
  Oil: Fuel,
  Droplets: Droplets,
  FlaskConical: FlaskConical,
  ShieldCheck: ShieldCheck,
  Fuel: Fuel,
  Factory: Factory,
  Microscope: Microscope,
  Beer: Beer,
  Package: Package,
  Home: Home,
  SprayCan: SprayCan,
  Filter: Filter,
  Trees: Trees,
  Mud: Droplets,
  Thermometer: Thermometer,
};

export function ProductTabs({ product }: { product: Product }) {
  return (
    <div className="space-y-12">
      <nav
        aria-label="Product information"
        className="flex flex-wrap gap-2 border-b border-border pb-4"
      >
        <a href="#specifications" className="btn-secondary px-4 py-2">
          <Settings className="w-4 h-4" /> Specifications
        </a>
        <a href="#applications" className="btn-secondary px-4 py-2">
          <FileText className="w-4 h-4" /> Applications
        </a>
        <a href="#documents" className="btn-secondary px-4 py-2">
          <MessageSquare className="w-4 h-4" /> Technical Documents
        </a>
      </nav>

      <section id="specifications" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-dark mb-6">Specifications</h2>
        <div className="space-y-8">
          {product.specifications.map((group, gIdx) => (
            <div key={gIdx}>
              <h4 className="text-lg font-semibold text-dark mb-3 pb-2 border-b border-border">
                {group.group}
              </h4>
              <div className="grid md:grid-cols-2 gap-x-8">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="flex justify-between py-2 border-b border-border/50"
                  >
                    <span className="text-muted text-sm">{item.param}</span>
                    <span className="text-dark text-sm font-mono-num font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="applications" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-dark mb-6">Applications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.applications.map((app, idx) => {
            const Icon = appIcons[app.icon] || Droplet;
            return (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-dark mb-2">{app.name}</h4>
                <p className="text-muted text-sm">{app.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="documents" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-dark mb-2">Technical Documents</h2>
        <p className="text-muted mb-6">
          Request the latest controlled version and we will send it with your product quotation.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {product.downloads.map((dl, idx) => (
            <a
              key={idx}
              href={`/contact?product=${encodeURIComponent(product.id)}&document=${encodeURIComponent(dl.name)}`}
              className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-accent hover:bg-bg-light transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-dark">{dl.name}</div>
                  <div className="text-muted text-xs uppercase">{dl.type}</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Request <MessageSquare className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
