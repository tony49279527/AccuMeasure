#!/usr/bin/env node
/**
 * EFD/EAR audit per the SEO+GEO methodology:
 *   EFD (extractable fact density) = atomic facts / 300 visible words * 100
 *   EAR (evidence-backed fact rate) = evidenced facts / atomic facts
 *
 * Atomic fact proxy = countable "entity + attribute + value" units in the
 * rendered HTML: spec table rows, key-spec cards, procurement terms, prices,
 * MOQ/lead-time, certification numbers, FAQ answers with numbers/standards.
 *
 * Usage: node scripts/efd-audit.cjs   (requires a prior `next build`)
 */

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(process.cwd(), ".next", "server", "app");

const PAGES = [
  { file: "index.html", label: "/" },
  { file: "products/am-cl100-capacitive-level-sensor.html", label: "AM-CL100 level" },
  { file: "products/am-rl80-80ghz-radar-level-transmitter.html", label: "AM-RL80 radar" },
  { file: "products/am-ul20-ultrasonic-level-sensor.html", label: "AM-UL20 ultrasonic" },
  { file: "products/am-wl50-iot-wifi-level-sensor.html", label: "AM-WL50 wifi" },
  { file: "products/am-emf100-electromagnetic-flow-meter.html", label: "AM-EMF100 emf" },
  { file: "products/am-uf200-ultrasonic-flow-meter.html", label: "AM-UF200 uf" },
  { file: "products/am-mf50-mass-flow-meter.html", label: "AM-MF50 mass" },
  { file: "products/am-pt300-pressure-transmitter.html", label: "AM-PT300 pt" },
  { file: "products/am-pg200-digital-pressure-gauge.html", label: "AM-PG200 gauge" },
  { file: "about.html", label: "/about" },
  { file: "quality.html", label: "/quality" },
  { file: "certificates.html", label: "/certificates" },
  { file: "customization.html", label: "/customization" },
];

// Value-bearing pattern: numbers with units, standards, ranges, model codes.
const FACT_PATTERNS = [
  /\b\d+(?:\.\d+)?\s*(?:%|mm|cm|m\b|MPa|kPa|bar|mA|V\b|Hz|GHz|°C|℃|days?|hours?|years?|units?|pcs|kg|sqm|inch)/gi,
  /\bIP6[5-9]\b/g,
  /\bISO\s?\d{4,5}\b/gi,
  /\bATEX\b|\bIECEx\b|\bRoHS\b|\bCE\b(?![a-z])/g,
  /\bEx\s?d\s?IIC\s?T\d\b/gi,
  /\b(?:4-20\s?mA|RS485|Modbus|HART|0-10\s?V)\b/gi,
  /\bDN\d{2,4}\b/g,
  /\bG\d\/\d"|\bG\d"|\bNPT\b|\bM20\b/g,
  /\bMOQ\b/gi,
  /\bFOB\b|\bCIF\b|\bEXW\b|\bT\/T\b|\bL\/C\b/g,
  /\$\d+/g,
  /\b(?:304|316L?)\s?(?:SS|stainless)/gi,
];

// Evidence markers: cert numbers, issuers, dates, verification links.
const EVIDENCE_PATTERNS = [
  /CN-\d{4}-ISO-\d{4}/g,
  /EC-\d{4}\/\d{4}/g,
  /ATEX-\d{4}-\d{4}/g,
  /RoHS-[\d.]+-\d{4}/g,
  /\b(?:SGS|TÜV|DEKRA|Intertek)\b/g,
  /\b20\d{2}-\d{2}-\d{2}\b/g,
  /datetime=/g,
  /calibration certificate/gi,
];

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countMatches(text, patterns) {
  let n = 0;
  for (const p of patterns) {
    const m = text.match(p);
    if (m) n += m.length;
  }
  return n;
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    console.error("Run `next build` first.");
    process.exit(1);
  }

  const rows = [];
  for (const page of PAGES) {
    const fp = path.join(APP_DIR, page.file);
    if (!fs.existsSync(fp)) {
      rows.push({ label: page.label, error: "not built" });
      continue;
    }
    const html = fs.readFileSync(fp, "utf8");
    const text = visibleText(html);
    const words = text.split(" ").length;
    const facts = countMatches(text, FACT_PATTERNS);
    const evidence = countMatches(text, EVIDENCE_PATTERNS);
    const efd = (facts / words) * 300;
    const ear = facts > 0 ? Math.min(evidence / facts, 1) : 0;
    rows.push({
      label: page.label,
      words,
      facts,
      efd: efd.toFixed(1),
      evidence,
      ear: ear.toFixed(2),
      verdict: efd >= 15 ? "strong" : efd >= 10 ? "good" : efd >= 5 ? "fair" : "LOW",
    });
  }

  console.log("\nEFD/EAR Audit (atomic-fact proxy, 300-word normalized)");
  console.log("=".repeat(78));
  console.log(
    "page".padEnd(22),
    "words".padStart(6),
    "facts".padStart(6),
    "EFD".padStart(6),
    "evid".padStart(5),
    "EAR".padStart(5),
    "  verdict",
  );
  for (const r of rows) {
    if (r.error) {
      console.log(r.label.padEnd(22), r.error);
      continue;
    }
    console.log(
      r.label.padEnd(22),
      String(r.words).padStart(6),
      String(r.facts).padStart(6),
      String(r.efd).padStart(6),
      String(r.evidence).padStart(5),
      String(r.ear).padStart(5),
      "  " + r.verdict,
    );
  }
  console.log("\nThresholds: EFD >=15 strong, 10-14 good, 5-9 fair, <5 low.");
  console.log("EAR: >0.6 strong, 0.3-0.6 medium, <0.3 weak.");
}

main();
