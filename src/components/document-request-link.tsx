"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackDocumentRequest } from "@/lib/analytics";

interface DocumentRequestLinkProps {
  href: string;
  documentName: string;
  source: "product" | "resources" | "certificates" | "quality";
  productId?: string;
  productName?: string;
  className?: string;
  children: ReactNode;
}

export function DocumentRequestLink({
  href,
  documentName,
  source,
  productId,
  productName,
  className,
  children,
}: DocumentRequestLinkProps) {
  const hrefWithSource =
    href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")
      ? href
      : `${href}${href.includes("?") ? "&" : "?"}source=${encodeURIComponent(source)}`;

  return (
    <Link
      href={hrefWithSource}
      className={className}
      onClick={() =>
        trackDocumentRequest({
          documentName,
          source,
          productId,
          productName,
        })
      }
    >
      {children}
    </Link>
  );
}
