import sharp from 'sharp';
import { stat, rename, writeFile } from 'fs/promises';

// Compress sediu-1.webp in-place (source == dest, use tmp)
try {
  const src = './assets/sediu-1.webp';
  const before = (await stat(src)).size;
  const buf = await sharp(src).webp({ quality: 78 }).toBuffer();
  await writeFile(src, buf);
  const after = (await stat(src)).size;
  console.log(`sediu-1.webp: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB`);
} catch(e) {
  console.log('sediu-1.webp: SKIP — ' + e.message.slice(0,80));
}
