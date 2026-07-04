#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.join(process.cwd(), ".next");
const REQUIRED_FIELDS = {
  Organization: ["name", "url", "address"],
  WebSite: ["name", "url"],
  Product: ["name", "offers", "brand"],
  BreadcrumbList: ["itemListElement"],
  FAQPage: ["mainEntity"],
  Article: ["headline", "author"],
  Person: ["name", "jobTitle"],
};

function findHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractJsonLd(html) {
  const blocks = [];
  const regex = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      if (Array.isArray(parsed)) {
        blocks.push(...parsed);
      } else {
        blocks.push(parsed);
      }
    } catch (e) {
      blocks.push({ __parseError: e.message, __raw: match[1].slice(0, 100) });
    }
  }
  return blocks;
}

function validateSchema(schema) {
  const errors = [];
  if (schema.__parseError) {
    errors.push(`JSON parse error: ${schema.__parseError}`);
    return errors;
  }
  const type = schema["@type"];
  if (!type) {
    errors.push("Missing @type");
    return errors;
  }
  const required = REQUIRED_FIELDS[type];
  if (!required) return errors;
  for (const field of required) {
    if (!schema[field]) {
      errors.push(`${type}: missing required field "${field}"`);
    }
  }
  return errors;
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("Schema CI: .next directory not found. Run build first.");
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(BUILD_DIR);
  if (htmlFiles.length === 0) {
    console.error("Schema CI: No HTML files found in .next");
    process.exit(1);
  }

  let totalSchemas = 0;
  let totalErrors = 0;
  const fileErrors = {};

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    const schemas = extractJsonLd(html);
    for (const schema of schemas) {
      totalSchemas++;
      const errors = validateSchema(schema);
      if (errors.length > 0) {
        const relPath = path.relative(process.cwd(), file);
        const type = schema["@type"] || "Unknown";
        if (!fileErrors[relPath]) fileErrors[relPath] = [];
        fileErrors[relPath].push({ type, errors });
        totalErrors += errors.length;
      }
    }
  }

  console.log(`\nSchema CI Report`);
  console.log(`================`);
  console.log(`HTML files scanned: ${htmlFiles.length}`);
  console.log(`JSON-LD blocks found: ${totalSchemas}`);
  console.log(`Validation errors: ${totalErrors}\n`);

  if (totalErrors > 0) {
    for (const [file, entries] of Object.entries(fileErrors)) {
      console.log(`  ${file}`);
      for (const entry of entries) {
        for (const err of entry.errors) {
          console.log(`    [${entry.type}] ${err}`);
        }
      }
    }
    console.log(`\nSchema CI: FAILED (${totalErrors} errors)`);
    process.exit(1);
  }

  console.log(`Schema CI: PASSED`);
  process.exit(0);
}

main();
