const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
fs.mkdirSync(path.join(publicDir, "products"), { recursive: true });
fs.mkdirSync(path.join(publicDir, "cases"), { recursive: true });
fs.mkdirSync(path.join(publicDir, "factory"), { recursive: true });

function makePNG(width, height, bg, fg, text) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  function crc32(buf) {
    let c = ~0;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
    }
    return (~c) >>> 0;
  }
  function chunk(type, data) {
    const t = Buffer.from(type, "ascii");
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
    return Buffer.concat([len, t, data, crc]);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const bgRgb = [parseInt(bg.slice(1, 3), 16), parseInt(bg.slice(3, 5), 16), parseInt(bg.slice(5, 7), 16)];
  const fgRgb = [parseInt(fg.slice(1, 3), 16), parseInt(fg.slice(3, 5), 16), parseInt(fg.slice(5, 7), 16)];
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0;
    for (let x = 0; x < width; x++) {
      const cx = Math.floor(x / (width / Math.max(text.length, 8)));
      const useFg = text.length > 0 && cx < text.length && text[cx] !== " ";
      const c = useFg ? fgRgb : bgRgb;
      const off = y * (width * 4 + 1) + 1 + x * 4;
      raw[off] = c[0];
      raw[off + 1] = c[1];
      raw[off + 2] = c[2];
      raw[off + 3] = 255;
    }
  }
  const zlib = require("zlib");
  const idat = zlib.deflateSync(raw);
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

fs.writeFileSync(path.join(publicDir, "og-image.png"), makePNG(1200, 630, "#0C447C", "#EF9F27", "AccuMeasure"));
fs.writeFileSync(path.join(publicDir, "favicon.ico"), makePNG(32, 32, "#0C447C", "#FFFFFF", "A"));
fs.writeFileSync(path.join(publicDir, "apple-icon.png"), makePNG(180, 180, "#0C447C", "#FFFFFF", "A"));

const productSlugs = [
  "am-cl100", "am-rl80", "am-ul20", "am-wl50",
  "am-emf100", "am-uf200", "am-mf50",
  "am-pt300", "am-pg200",
];
productSlugs.forEach((slug) => {
  fs.writeFileSync(path.join(publicDir, "products", `${slug}.jpg`), makePNG(600, 400, "#F1EFE8", "#0C447C", slug));
});

["saudi-water", "indonesia-pdam", "brazil-oem"].forEach((name) => {
  fs.writeFileSync(path.join(publicDir, "cases", `${name}.jpg`), makePNG(600, 400, "#0C447C", "#EF9F27", name));
});

for (let i = 1; i <= 8; i++) {
  fs.writeFileSync(path.join(publicDir, "factory", `${i}.jpg`), makePNG(400, 300, "#F1EFE8", "#0C447C", `F${i}`));
}

console.log("Placeholder media generated in public/");
