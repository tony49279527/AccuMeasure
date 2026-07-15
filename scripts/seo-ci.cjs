#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(process.cwd(), ".next", "server", "app");
const TITLE_MAX = 70;
const DESCRIPTION_MIN = 70;
const DESCRIPTION_MAX = 170;

function findHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) findHtmlFiles(fullPath, files);
    else if (entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

function routeForFile(file) {
  const relative = path.relative(APP_DIR, file).replace(/\\/g, "/");
  const withoutExtension = relative.replace(/\.html$/, "");
  if (withoutExtension === "index") return "/";
  return `/${withoutExtension.replace(/\/index$/, "")}`;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&ndash;|&mdash;/g, "-");
}

function matchValue(html, regex) {
  return decodeHtml((html.match(regex) || [])[1] || "").trim();
}

function main() {
  const files = findHtmlFiles(APP_DIR);
  if (files.length === 0) {
    console.error("SEO CI: no built HTML found. Run `next build` first.");
    process.exit(1);
  }

  const pages = files.map((file) => {
    const html = fs.readFileSync(file, "utf8");
    return {
      file,
      route: routeForFile(file),
      html,
      title: matchValue(html, /<title>(.*?)<\/title>/s),
      description: matchValue(html, /<meta name="description" content="([^"]*)"/),
      canonical: matchValue(html, /<link rel="canonical" href="([^"]*)"/),
      ogUrl: matchValue(html, /<meta property="og:url" content="([^"]*)"/),
      ogImage: matchValue(html, /<meta property="og:image" content="([^"]*)"/),
      h1Count: (html.match(/<h1\b/g) || []).length,
    };
  });

  const routeSet = new Set(pages.map((page) => page.route));
  routeSet.add("/robots.txt");
  routeSet.add("/sitemap.xml");

  const errors = [];
  const titleOwners = new Map();
  const descriptionOwners = new Map();
  const inbound = new Map([...routeSet].map((route) => [route, 0]));

  for (const page of pages) {
    if (page.route !== "/_not-found") {
      if (!page.title) errors.push(`${page.route}: missing title`);
      if (page.title.length > TITLE_MAX) {
        errors.push(`${page.route}: title is ${page.title.length} characters (max ${TITLE_MAX})`);
      }
      if (page.description.length < DESCRIPTION_MIN || page.description.length > DESCRIPTION_MAX) {
        errors.push(
          `${page.route}: meta description is ${page.description.length} characters (target ${DESCRIPTION_MIN}-${DESCRIPTION_MAX})`,
        );
      }
      if (!page.canonical) errors.push(`${page.route}: missing canonical`);
      if (!page.ogUrl) errors.push(`${page.route}: missing og:url`);
      else if (page.ogUrl !== page.canonical) {
        errors.push(`${page.route}: og:url does not match canonical`);
      }
      if (!page.ogImage) errors.push(`${page.route}: missing og:image`);
      if (page.h1Count !== 1) errors.push(`${page.route}: expected 1 H1, found ${page.h1Count}`);

      const titleOwner = titleOwners.get(page.title);
      if (titleOwner) errors.push(`${page.route}: duplicate title also used by ${titleOwner}`);
      else titleOwners.set(page.title, page.route);

      const descriptionOwner = descriptionOwners.get(page.description);
      if (descriptionOwner) {
        errors.push(`${page.route}: duplicate meta description also used by ${descriptionOwner}`);
      } else {
        descriptionOwners.set(page.description, page.route);
      }
    }

    for (const image of page.html.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt="[^"]*"/.test(image[0])) {
        errors.push(`${page.route}: image missing alt text`);
      }
    }

    for (const anchor of page.html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) {
      let target = anchor[1].split("#")[0].split("?")[0];
      if (target.length > 1 && target.endsWith("/")) target = target.slice(0, -1);
      if (!target || target.startsWith("/api/") || target.startsWith("/downloads/")) continue;
      if (!routeSet.has(target)) errors.push(`${page.route}: broken internal link to ${target}`);
      else inbound.set(target, (inbound.get(target) || 0) + 1);
    }
  }

  const excludedFromOrphanCheck = new Set(["/", "/_not-found", "/privacy", "/terms"]);
  for (const page of pages) {
    if (!excludedFromOrphanCheck.has(page.route) && (inbound.get(page.route) || 0) === 0) {
      errors.push(`${page.route}: orphan page with no internal links`);
    }
  }

  console.log("\nSEO CI Report");
  console.log("=============");
  console.log(`HTML pages scanned: ${pages.length}`);
  console.log(`Validation errors: ${errors.length}\n`);

  if (errors.length > 0) {
    for (const error of errors) console.log(`  - ${error}`);
    console.log(`\nSEO CI: FAILED (${errors.length} errors)`);
    process.exit(1);
  }

  console.log("SEO CI: PASSED");
}

main();
