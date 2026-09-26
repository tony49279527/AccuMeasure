"use client";

import type { ReactNode } from "react";
import { trackContactClick } from "@/lib/analytics";

/**
 * Wraps a contact-channel anchor (email / WhatsApp / phone) so the click is
 * reported as a `contact_click` analytics event. Keeps parent pages fully
 * static (server-rendered) — only this tiny wrapper is client-side.
 */
export function TrackedContactLink({
  href,
  channel,
  label,
  className,
  target,
  rel,
  children,
}: {
  href: string;
  channel: "whatsapp" | "email" | "phone";
  label?: string;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => trackContactClick(channel, label)}
    >
      {children}
    </a>
  );
}
