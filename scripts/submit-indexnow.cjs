#!/usr/bin/env node
/**
 * Submit all sitemap URLs to IndexNow (Bing/Copilot fast indexing).
 * Usage: node scripts/submit-indexnow.cjs
 * Run after each deploy, or whenever key pages change.
 */

const HOST = "www.accumeasuretech.com";
const KEY = "9f4faaa67347bed5a9024eedaf2ce655";
const SITEMAP = `https://${HOST}/sitemap.xml`;

async function main() {
  const res = await fetch(SITEMAP);
  if (!res.ok) {
    console.error(`Failed to fetch sitemap: ${res.status}`);
    process.exit(1);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    console.error("No URLs found in sitemap.");
    process.exit(1);
  }
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const submit = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urls,
    }),
  });

  console.log(`IndexNow response: ${submit.status} ${submit.statusText}`);
  if (submit.status === 200 || submit.status === 202) {
    console.log("Submitted successfully.");
  } else {
    console.error(await submit.text().catch(() => ""));
    process.exit(1);
  }
}

main();
