"use client";

import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { waLink, telLink } from "@/lib/site";

export function FloatingButtons() {
  return (
    <>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform group"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-white text-dark text-sm px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border h-14 flex items-center justify-around">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-1/3 h-full transition-colors"
          style={{ color: "#128C47" }}
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-xs">WhatsApp</span>
        </a>
        <a
          href={telLink}
          className="flex flex-col items-center justify-center w-1/3 h-full text-primary hover:bg-primary/5 transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-xs">Call</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center w-1/3 h-full text-cta hover:bg-cta/5 transition-colors"
        >
          <Mail className="w-5 h-5 mb-0.5" />
          <span className="text-xs">Quote</span>
        </Link>
      </div>
    </>
  );
}
