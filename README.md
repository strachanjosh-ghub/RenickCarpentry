# Renick Carpentry — website

**Quality Home Renovations · Thoughtfully planned, beautifully finished.**
Geelong & the Surf Coast, Victoria.

Next.js 16 (static export) · Tailwind CSS 4 · Markdown content · Netlify (hosting, Forms, Identity) · Decap CMS.

> ⚠ **Not approved for launch.** Work through `docs/MISSING_INFORMATION.md` and `docs/LAUNCH_CHECKLIST.md` first.

## Quick start
```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # static site → out/
npm run check-links    # after build: internal links, assets, one <h1> per page
npm run images         # make responsive WebP versions of photos in public/images
```

## Structure
| Path | What it is |
|---|---|
| `lib/site.ts` | **Business details** (name, phone, email, service areas). One source of truth for header, footer, contact page and structured data. |
| `lib/services.ts` | All five service pages' copy, FAQs, SEO titles and descriptions. |
| `lib/testimonials.ts` | Genuine client reviews (empty until supplied with permission). |
| `content/projects/*.md` | Project case studies ("Our Work"). Templates are hidden on the live site. |
| `content/articles/*.md` | Advice & Inspiration articles. |
| `app/` | Pages (App Router). `app/[service]` renders the five service pages. |
| `components/` | Header, Footer, sticky mobile call bar, PhotoSlot, BeforeAfter, FAQ, CTA, EnquiryForm, JSON-LD. |
| `app/globals.css` | Design tokens (brand kit colours/type) and component styles. |
| `public/brand/` | Approved Option A logo files from the brand kit (`*-web.svg` = same artwork, whitespace trimmed for the header). |
| `public/js/site.js` | Mobile menu, form validation/submission, before/after slider (vanilla JS, no framework runtime needed). |
| `public/__forms.html` | Netlify Forms detection file — keep field names in sync with `EnquiryForm.tsx`. |
| `public/admin/` | Decap CMS (browser editor for Alister). |
| `netlify.toml` | Build, env vars, redirects, security/caching headers. |
| `scripts/build-preview.mjs` | Builds a single-file review preview. |
| `docs/` | Launch checklist, missing info, content guide for Alister, SEO/GEO plan, design system. |

## Environment variables (set in `netlify.toml` / Netlify UI)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://renickcarpentary.com.au`). |
| `NEXT_PUBLIC_SHOW_TEMPLATES` | `false` on production hides project/review templates; `true` on branch previews. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional — enables cookie-free Plausible analytics. |
| `NEXT_PUBLIC_PREVIEW` | `true` only for the offline review preview (form never submits). |
