"use client";

import { useSearchParams } from "next/navigation";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { getProductById } from "@/lib/products";
import type { DocumentRequestSource } from "@/lib/analytics";

/**
 * Reads prefill hints (?product= / ?document= / ?request=catalog) on the
 * client so the /contact route itself can stay fully static (CDN-cached).
 */
export function ContactInquiry() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") ?? undefined;
  const documentName = searchParams.get("document") ?? undefined;
  const rawDocumentSource = searchParams.get("source");
  const documentSource: DocumentRequestSource | undefined =
    rawDocumentSource === "product" ||
    rawDocumentSource === "resources" ||
    rawDocumentSource === "certificates" ||
    rawDocumentSource === "quality"
      ? rawDocumentSource
      : undefined;
  const product = productId ? getProductById(productId) : undefined;

  const defaultMessage =
    searchParams.get("request") === "catalog"
      ? "Please send me your latest product catalog."
      : product && documentName
        ? `Please send me the latest ${documentName} for ${product.model} ${product.name}.`
        : documentName
          ? `Please send me the latest ${documentName}.`
          : undefined;

  return (
    <InquiryForm
      productId={product?.id}
      productName={product?.name}
      documentName={documentName}
      documentSource={documentSource}
      defaultInterest={
        product
          ? product.category === "level"
            ? "Level Sensors"
            : product.category === "flow"
              ? "Flow Meters"
              : "Pressure Sensors"
          : undefined
      }
      defaultMessage={defaultMessage}
    />
  );
}
