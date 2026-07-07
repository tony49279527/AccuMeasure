import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: "Home", url: siteConfig.url },
    ...items.map((it) => ({
      name: it.name,
      url: it.href === "/" ? siteConfig.url : `${siteConfig.url}${it.href}`,
    })),
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(schemaItems)} />
      <nav className="text-sm text-muted mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        {items.map((it, i) => (
          <span key={i}>
            <span className="mx-2">›</span>
            {i < items.length - 1 ? (
              <Link href={it.href} className="hover:text-primary">{it.name}</Link>
            ) : (
              <span className="text-dark">{it.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
