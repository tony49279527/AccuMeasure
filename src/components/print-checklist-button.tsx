"use client";

import { Printer } from "lucide-react";

export function PrintChecklistButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-secondary print:hidden"
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      Print or save as PDF
    </button>
  );
}
