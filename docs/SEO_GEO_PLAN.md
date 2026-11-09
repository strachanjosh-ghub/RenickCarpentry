# SEO & GEO plan — Renick Carpentry

Builds on the brand kit's `SEO_GEO_CONTENT_STRATEGY.md` and `KEYWORD_PAGE_MAP.csv`. Search phrases are **targeting hypotheses, not verified volumes**. Validate in Search Console after 8–12 weeks of data. No ranking or AI-citation outcome is guaranteed.

## 1. Page → primary intent map
| URL | Primary intent | Title |
|---|---|---|
| `/` | quality home renovations Geelong & Surf Coast (brand + category) | Quality Home Renovations Geelong & Surf Coast \| Renick Carpentry |
| `/services/` | renovation services Geelong (hub) | Renovation Services Geelong & Surf Coast \| Renick Carpentry |
| `/renovations-geelong/` | home renovations Geelong; renovation carpenter Geelong; home renovations Surf Coast | Home Renovations Geelong & Surf Coast \| Renick Carpentry |
| `/bathroom-renovations-geelong/` | bathroom renovations Geelong | Bathroom Renovations Geelong \| Quality Finishes \| Renick Carpentry |
| `/kitchen-renovations-geelong/` | kitchen renovations Geelong | Kitchen Renovations Geelong \| Renick Carpentry |
| `/outdoor-living-renovations/` | outdoor entertaining area builder Geelong; deck builders Geelong; outdoor living Surf Coast | Outdoor Living, Decks & Entertaining Areas \| Geelong & Surf Coast |
| `/custom-carpentry-geelong/` | custom carpentry Geelong; finishing carpentry | Custom Carpentry & Finishing Work Geelong \| Renick Carpentry |
| `/about/` | renovation carpenter Geelong (person/entity) | Meet Alister \| Renovation Carpenter Geelong \| Renick Carpentry |
| `/our-approach/` | how a renovation works / renovation planning & coordination | Our Renovation Approach \| From Idea to Handover |
| `/projects/` | renovation projects Geelong (proof) | Our Work \| Renovation Projects Geelong & Surf Coast |
| `/insights/` + 8 articles | informational, long-tail questions | per article |
| `/contact/` | contact renovation carpenter Geelong | Contact Renick Carpentry \| Renovations Geelong & Surf Coast |

Kit URLs were kept where they existed; `/services/`, `/custom-carpentry-geelong/`, `/our-approach/` and `/privacy/` were added. "Advice & Inspiration" lives at `/insights/` (kit URL).

Deliberately **not** built: suburb doorway pages. Location relevance comes from genuine local context on service pages, project stories tagged by suburb, and the Google Business Profile. Add a location page only if real projects and distinct content exist for that area (e.g. "Renovations in Torquay" with 3+ Torquay projects).

## 2. On-page implementation (done)
- Unique `<title>`, meta description, canonical, Open Graph/Twitter card on every page (`lib/seo.ts`).
- One H1 per page, logical H2/H3 hierarchy (checked by `npm run check-links`).
- Descriptive URLs, breadcrumbs (+ BreadcrumbList schema), internal links service ↔ service ↔ articles ↔ projects.
- `sitemap.xml` (only published projects; templates excluded) and `robots.txt` (allows all crawlers incl. AI crawlers; blocks `/admin/`).
- Templates and the thank-you page are `noindex`.
- Responsive WebP images with width-based `srcset`, lazy loading below the fold, descriptive alt text.

## 3. Structured data (done)
| Type | Where |
|---|---|
| `HomeAndConstructionBusiness` (LocalBusiness) with `areaServed`, `knowsAbout`, phone, email, logo, founder | every page |
| `Person` (Alister) | About |
| `Service` (provider → business) | each service page |
| `FAQPage` | pages with visible FAQs |
| `Article` | each article (author = business until Alister approves) |
| `HowTo` | Our Approach |
| `BreadcrumbList`, `ItemList` | inner pages, services hub |
| `CreativeWork` | published projects only |
Excluded until verified: street address, opening hours, ratings/reviews, founding date, credentials. Don't add `aggregateRating` from your own site's reviews (Google ignores self-serving review markup for LocalBusiness).

## 4. GEO (AI search) foundations (done)
- **Entity consistency:** same name, owner, services, region, phone and email everywhere (single source `lib/site.ts`).
- **Answer-first content:** each service hero paragraph answers "who does X in Geelong?"; each article opens with a boxed *question + short answer*.
- The six brief questions are answered verbatim on visible pages: home FAQ ("Who provides high-quality home renovations in Geelong?", "Can I discuss ideas before plans?", "Can a carpenter coordinate other trades?", "Who renovates outdoor areas on the Surf Coast?", "How do I choose a trusted carpenter?"), bathroom FAQ ("Who can help plan and complete a bathroom renovation?").
- Honest scope statements (what the business doesn't do) help AI systems describe it accurately.
- Next steps that matter most for AI visibility: real project case studies with suburb + photos, consistent listings (GBP, Bing Places, Apple Business Connect), and genuine reviews on Google.

## 5. Google Business Profile — recommendations
1. Create/claim **one** profile with the exact registered business name (no keywords added to the name).
2. Primary category: **Carpenter** or **Bathroom remodeler/Kitchen remodeler** — choose the one closest to most work; add secondary categories (Kitchen remodeler, Bathroom remodeler, Deck builder, Contractor) only if accurate.
3. Set up as a **service-area business**, hide the home address; add the validated suburbs/towns.
4. Phone and website exactly as on the site. Use a UTM on the website link (`?utm_source=gbp`) to measure.
5. Services list mirroring the five service pages; short honest descriptions.
6. Upload real work photos regularly (not stock); a photo of Alister builds trust.
7. **Reviews:** after each completed project, send a short personal message with the direct review link. Never incentivise or write reviews. Reply to every review.
8. Post a project update or article monthly.

## 6. Local citations / directories (consistent NAP)
Bing Places, Apple Business Connect, Hipages/Houzz *only if used for real work*, True Local, Yellow Pages, Geelong Chamber of Commerce (if member), Master Builders Victoria / HIA (only if a genuine member). Quality over quantity; consistency matters more than volume.

## 7. Content calendar (first 90 days)
- Weeks 1–2: launch; Search Console; GBP; 1–3 real projects.
- Weeks 3–6: one project story every 2 weeks; request reviews from recent clients.
- Months 2–3: refresh service pages using Search Console queries; add articles from the kit's editorial calendar (renovation materials, multi-trade coordination); add suburb mentions only via real projects.

## 8. Measurement
Search Console clicks/impressions by page and query; calls (tel: clicks), emails, form submissions; GBP calls/website clicks; qualified-lead rate (logged manually). Review quarterly.
