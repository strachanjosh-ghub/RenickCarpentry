// Builds a single-file, hash-routed preview of the static export (for sharing a private review link).
// Usage: NEXT_PUBLIC_PREVIEW=true npm run build && node scripts/build-preview.mjs preview.html
import fs from 'node:fs';
import path from 'node:path';
const out = path.resolve('out');
const dest = process.argv[2] || 'preview.html';
const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) { if (!/^(admin|_next|_not-found|404)$/.test(f)) walk(p); } else if (f === 'index.html') pages.push(p); } })(out);
const routeOf = (urlPath) => { const clean = urlPath.split(/[?#]/)[0].replace(/^\/|\/$/g, ''); return clean ? clean.replace(/\//g, '--') : 'home'; };
const dataUri = (rel) => { const p = path.join(out, rel); const ext = path.extname(p).slice(1); const mime = ext === 'svg' ? 'image/svg+xml' : `image/${ext}`; return `data:${mime};base64,${fs.readFileSync(p).toString('base64')}`; };
const fix = (html) => html
  .replace(/src="(\/(?:brand|images)\/[^"]+)"/g, (_, s) => `src="${dataUri(s)}"`)
  .replace(/href="(\/[^"]*)"/g, (m, h) => (h.startsWith('/_next') || /\.(png|svg|xml|txt|webmanifest)$/.test(h)) ? m : `href="#${routeOf(h)}"`)
  .replace(/href="#main"/g, 'href="#" data-skip');
const home = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
const header = fix(home.match(/<header[\s\S]*?<\/header>/)[0]);
const footer = fix(home.match(/<footer[\s\S]*?<\/footer>/)[0]);
const bar = fix(home.split('</footer>')[1].split('<script')[0]);
const css = [...home.matchAll(/<link rel="stylesheet" href="(\/_next\/[^"]+\.css)"/g)].map((m) => fs.readFileSync(path.join(out, m[1]), 'utf8')).join('\n');
const js = fs.readFileSync(path.join(out, 'js/site.js'), 'utf8');
const sections = pages.map((p) => {
  const rel = '/' + path.relative(out, path.dirname(p)).replace(/\\/g, '/');
  const html = fs.readFileSync(p, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1];
  const id = routeOf(rel === '/.' ? '/' : rel + '/');
  return `<section data-route="${id}" data-title="${title.replace(/"/g, '&quot;')}" hidden>${fix(main)}</section>`;
});
const doc = `<!DOCTYPE html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Renick Carpentry — Website Preview</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600;700&display=swap">
<style>${css}
.preview-banner{background:#FFF1C9;color:#5A3E00;border-bottom:1px dashed #A07A1F;font:600 14px/1.4 Montserrat,Arial,sans-serif;padding:.5rem 1rem;text-align:center}</style></head>
<body class="min-h-screen flex flex-col">
<div class="preview-banner">Private preview — not the live site. Placeholders are flagged in yellow. The enquiry form validates but does not send.</div>
${header}<main id="main" class="flex-1" tabindex="-1">${sections.join('\n')}</main>${footer}${bar}
<script>${js}</script>
<script>(function(){function show(){var id=(location.hash||'#home').slice(1);var s=document.querySelector('[data-route="'+id+'"]');if(!s){if(document.getElementById(id))return;s=document.querySelector('[data-route="home"]');}
document.querySelectorAll('[data-route]').forEach(function(x){x.hidden=x!==s});document.title=s.getAttribute('data-title');window.scrollTo(0,0);var h=document.querySelector('[data-header]');if(h){h.classList.remove('nav-open');}}
window.addEventListener('hashchange',show);show();
document.addEventListener('click',function(e){var k=e.target.closest&&e.target.closest('[data-skip]');if(k){e.preventDefault();document.getElementById('main').focus();}});})();</script>
</body></html>`;
fs.writeFileSync(dest, doc);
console.log(`Preview: ${pages.length} pages → ${dest} (${(doc.length / 1024).toFixed(0)} KB)`);
