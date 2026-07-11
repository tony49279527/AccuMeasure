const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const sourceHtmlPath = path.join(root, "docs/prototypes/gpt-landing-concept.html");
const logoPath = path.join(root, "public/logo.svg");
const ogImagePath = path.join(root, "public/og-image.jpg");
const outputDir = path.join(root, "dist/server");
const outputPath = path.join(outputDir, "index.js");

function js(value) {
  return JSON.stringify(value);
}

let html = fs.readFileSync(sourceHtmlPath, "utf8");
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);

if (!styleMatch) {
  throw new Error("Missing inline stylesheet in GPT landing prototype.");
}

const css = `${styleMatch[1].trim()}
.brand{display:inline-flex;align-items:center;gap:10px}
.brand-mark{width:32px;height:32px;display:block}
.hero-media{margin-top:30px;border-radius:10px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow)}
.hero-media img{display:block;width:100%;height:auto}
@media(max-width:860px){.hero-media{max-width:560px}}`;

html = html.replace(styleMatch[0], '<link rel="stylesheet" href="/assets/site.css">');
html = html.replace(
  '<a class="brand" href="https://www.accumeasuretech.com/">AccuMeasure<span>Tech</span></a>',
  '<a class="brand" href="https://www.accumeasuretech.com/"><img class="brand-mark" src="/logo.svg" width="32" height="32" alt="">AccuMeasure<span>Tech</span></a>',
);
html = html.replace(
  '<p class="hero-copy">AccuMeasure Tech helps engineers and procurement teams specify level, flow and pressure instruments with the accuracy, repeatability, controlled documentation and responsive support required for industrial projects.</p>',
  '<p class="hero-copy">AccuMeasure Tech helps engineers and procurement teams specify level, flow and pressure instruments with the accuracy, repeatability, controlled documentation and responsive support required for industrial projects.</p><div class="hero-media"><img src="/og-image.jpg" width="1200" height="630" alt="AccuMeasure industrial measurement instruments"></div>',
);

const logoSvg = fs.readFileSync(logoPath, "utf8");
const ogImageBase64 = fs.readFileSync(ogImagePath).toString("base64");

const worker = `const HTML = ${js(html)};
const CSS = ${js(css)};
const LOGO_SVG = ${js(logoSvg)};
const OG_IMAGE_BASE64 = ${js(ogImageBase64)};

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(HTML, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300",
        },
      });
    }

    if (url.pathname === "/assets/site.css") {
      return new Response(CSS, {
        headers: {
          "content-type": "text/css; charset=utf-8",
          "cache-control": "public, max-age=31536000, immutable",
        },
      });
    }

    if (url.pathname === "/logo.svg") {
      return new Response(LOGO_SVG, {
        headers: {
          "content-type": "image/svg+xml; charset=utf-8",
          "cache-control": "public, max-age=31536000, immutable",
        },
      });
    }

    if (url.pathname === "/og-image.jpg") {
      return new Response(decodeBase64(OG_IMAGE_BASE64), {
        headers: {
          "content-type": "image/jpeg",
          "cache-control": "public, max-age=31536000, immutable",
        },
      });
    }

    return new Response("Not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, worker);
console.log(`Built Sites worker at ${path.relative(root, outputPath)}`);
