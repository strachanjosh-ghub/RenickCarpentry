// Checks every internal link and asset in the static build (out/) resolves. Run after `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
const out = path.resolve('out');
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(out);
let bad = 0;
const exists = (u) => { const clean = decodeURI(u.split(/[?#]/)[0]); const p = path.join(out, clean); return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html'))); };
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (m[1].startsWith('//')) continue;
    if (!exists(m[1])) { bad++; console.log(`✗ ${path.relative(out, f)} → ${m[1]}`); }
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1 && !f.includes('__forms') && !f.includes('admin')) { bad++; console.log(`✗ ${path.relative(out, f)} has ${h1} <h1>`); }
}
console.log(`${files.length} pages checked, ${bad} problems`);
process.exit(bad ? 1 : 0);
