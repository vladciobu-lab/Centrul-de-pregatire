// Generates docs/assets/og-image.jpg (1200x630) from the logo + theme color #0A5360.
// Usage: node scripts/og-image.mjs [path-to-logo]   (default: ../Logo.jpeg, the original logo)
import sharp from 'sharp';
const logoPath = process.argv[2] || '../Logo.jpeg';
const W = 1200, H = 630, L = 470;
const mask = Buffer.from(`<svg width="${L}" height="${L}"><rect width="${L}" height="${L}" rx="36" fill="#fff"/></svg>`);
const logo = await sharp(logoPath).resize(L, L).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
const text = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>.s{font-family:Georgia,serif}.t{font-family:'Segoe UI',Arial,sans-serif}</style>
  <text x="620" y="215" class="s" font-size="52" font-weight="600" fill="#ffffff">Meditații</text>
  <text x="620" y="275" class="s" font-size="52" font-weight="600" fill="#ffffff">în Constanța</text>
  <rect x="620" y="305" width="70" height="3" fill="#E8B4BC"/>
  <text x="620" y="360" class="t" font-size="28" fill="#F2D2D7">Evaluare Națională · Bacalaureat</text>
  <text x="620" y="400" class="t" font-size="28" fill="#F2D2D7">Recuperare la materie, orice clasă</text>
  <text x="620" y="470" class="t" font-size="30" font-weight="700" fill="#ffffff">Prima ședință e gratuită</text>
</svg>`);
await sharp({ create: { width: W, height: H, channels: 3, background: '#0A5360' } })
  .composite([{ input: logo, left: 80, top: 80 }, { input: text, left: 0, top: 0 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('docs/assets/og-image.jpg');
console.log('docs/assets/og-image.jpg written');
