// Creates responsive WebP versions of every JPG/PNG under public/images (skips brand art and existing variants).
// Run: npm run images   →  hero.jpg  ⇒  hero-640.webp, hero-1024.webp, hero-1600.webp
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const root = path.resolve('public/images');
const widths = [640, 1024, 1600];
const files = [];
(function walk(d) { if (!fs.existsSync(d)) return; for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : /\.(jpe?g|png)$/i.test(f) && !f.startsWith('og-') && files.push(p); } })(root);
for (const f of files) {
  const base = f.replace(/\.(jpe?g|png)$/i, '');
  for (const w of widths) {
    const outFile = `${base}-${w}.webp`;
    if (fs.existsSync(outFile) && fs.statSync(outFile).mtimeMs > fs.statSync(f).mtimeMs) continue;
    await sharp(f).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(outFile);
    console.log('✓', path.relative(root, outFile));
  }
}
console.log(`${files.length} source images processed.`);
