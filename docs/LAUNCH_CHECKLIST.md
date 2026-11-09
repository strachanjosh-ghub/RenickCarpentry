# Implementation & launch checklist

## 1. Netlify + GitHub setup (≈30 min)
- [ ] Netlify → *Add new site → Import from Git* → `strachanjosh-ghub/RenickCarpentry`. Build settings come from `netlify.toml` (`npm run build`, publish `out`).
- [ ] **Production branch = `main`.** Review on the deploy preview of the `site-build` pull request first; merge only when approved.
- [ ] Add custom domain; choose apex (`renickcarpentary.com.au`) as primary; HTTPS auto-provisions. The www→apex redirect is in `netlify.toml`.
- [ ] **Forms:** Site configuration → Forms → *Enable form detection*, redeploy. The `enquiry` form appears (from `public/__forms.html`).
- [ ] Forms → Notifications → *Email notification* to `Alister@RenickCarpentary.com.au` (subject "New website enquiry").
- [ ] Submit a test enquiry with a photo from a phone; confirm the email + attachment arrive and the thank-you page shows.
- [ ] **Spam protection:** honeypot is built in and Netlify filters spam with Akismet. If spam appears, add Netlify's reCAPTCHA (`data-netlify-recaptcha="true"` + `<div data-netlify-recaptcha="true">`) to both form copies.
- [ ] Note Netlify Forms limits on the free tier (submissions/month and 8 MB per submission). Form validation already caps uploads at 5 photos / 8 MB.
- [ ] **CMS:** Site configuration → Identity → Enable; Registration = *Invite only*; Services → *Enable Git Gateway*. Invite Alister's email. (Decap CMS at `/admin/`.)

## 2. Content
- [ ] Resolve everything in `docs/MISSING_INFORMATION.md` (🔴 items are blockers).
- [ ] Replace placeholders: search the code for `PhotoSlot` without `src`, `placeholder-flag`, "Photo to come", "To complete".
- [ ] Photos: originals into `public/images/...`, run `npm run images`, pass `src` to `PhotoSlot` (or upload via CMS).
- [ ] Publish ≥3 real projects (`status: published`), or accept the "stories on their way" message.
- [ ] Alister reviews all service pages and articles.
- [ ] Production `NEXT_PUBLIC_SHOW_TEMPLATES=false` (already set in `netlify.toml`).

## 3. SEO / GEO
- [ ] Google Search Console: verify domain (DNS TXT), submit `/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console (feeds Copilot/ChatGPT search).
- [ ] Validate structured data with the Rich Results Test + Schema Markup Validator (home, one service page, one article).
- [ ] Google Business Profile — see `docs/SEO_GEO_PLAN.md` §4.
- [ ] Add verified credentials to `lib/schema.ts` and About once confirmed.

## 4. Analytics (privacy-conscious)
- [ ] Recommended: Plausible (cookie-free, no consent banner needed). Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=renickcarpentary.com.au`. Track goals: `tel:` clicks, `mailto:` clicks, form submit (thank-you page view).
- [ ] Alternative: GA4 — would need a cookie/consent notice and privacy-notice update.

## 5. QA before go-live (done on the preview build — repeat on Netlify)
- [x] Breakpoints 390 / 768 / 1440 px; no horizontal overflow.
- [x] Body text 18 px; nav 17 px; touch targets ≥ 44 px.
- [x] Contrast (WCAG AA): ink/cream 14.1:1, muted/cream 8.1:1, cream/deep 15.1:1, gold eyebrows on deep 7.2:1. Gold never used as small text on cream.
- [x] Logo: Option A light variant on cream, reversed variant on dark green.
- [x] One `<h1>` per page; unique titles and descriptions; canonical on every page; 0 broken internal links (`npm run check-links`).
- [x] Keyboard: skip link, visible focus, Esc closes menu, before/after slider keyboard-operable, FAQ uses native `<details>`.
- [x] Form: required-field validation, AU phone check, error summary focus, preview never claims a message was sent.
- [x] Australian English spelling.
- [ ] Lighthouse on the live Netlify URL (mobile) — target ≥ 90 performance/accessibility/SEO once real photos are in.
- [ ] Self-host fonts (optional, via `@fontsource`) to drop the Google Fonts request.
- [ ] Test on a real iPhone and Android phone, including tap-to-call.
