# Business information requiring confirmation

Nothing below has been invented on the site. Where information is missing, the site either leaves it out or shows a yellow **placeholder** flag (visible on previews only where noted).

## 🔴 Must confirm before launch
| # | Item | Current state on site | Why it matters |
|---|---|---|---|
| 1 | **Trading name spelling** — "Renick **Carpentry**" (logo, brand kit, all page copy) vs "Renick**Carpentary**" (email + domain) | Kept exactly as supplied. Logo and copy say *Carpentry*; email/domain say *Carpentary*. | NAP consistency for Google, AI search and trust. If the domain is a typo, register `renickcarpentry.com.au` and redirect. Check ABN / business-name registration. |
| 2 | **Phone number** `0409 423 724` | Used everywhere (single setting in `lib/site.ts`). | The brief says "verify before publishing". ⚠ An earlier record also had **0409 432 724** — the digits differ. Confirm which is correct. |
| 3 | **Owner's name spelling** — "Alister" | "Alister" used throughout, per the brief and brand kit. | ⚠ An earlier record had "Alistair" (email `Alistair@…`). Confirm spelling and that `Alister@RenickCarpentary.com.au` receives mail. |
| 4 | **Domain ownership & DNS** for `RenickCarpentary.com.au` | Canonical set to `https://renickcarpentary.com.au` (non-www). | Needed for Netlify, Search Console and email deliverability. |
| 5 | **Licences, registration and contracting limits** | **No** licence, registration, insurance or qualification claims anywhere. Copy says regulated work is done by appropriately licensed professionals. | In Victoria, some domestic building work (by scope/value, or needing a permit) requires a registered building practitioner. Confirm what Alister is registered for so bathroom/kitchen/"trade coordination" wording is accurate and legally compliant. Add verified credentials to About + schema afterwards. |
| 6 | **Service area** | Geelong, Highton, Belmont, Newtown, Grovedale, Waurn Ponds, Torquay, Jan Juc, Anglesea, Ocean Grove, Barwon Heads (from the brief). | Brief marks these "to validate". Edit `lib/site.ts`. |
| 7 | **Services offered / not offered** | Five services as briefed; site states no fencing/handyman/gate work. | Confirm decks are wanted as a headline service and any exclusions. |

## 🟠 Needed for a strong launch (site works without them)
| # | Item | Where it goes |
|---|---|---|
| 8 | Genuine photo of Alister (with consent) | Home "Meet Alister", About. Placeholder flagged. |
| 9 | Real project photography (1 wide, 3–5 details, 1 context per project; before/after pairs from the same angle) | Hero, service pages, Our Work. Placeholders flagged. |
| 10 | 3 real, homeowner-approved project stories | `content/projects/` — templates included. Our Work page handles zero projects gracefully. |
| 11 | Alister's own story: background, years in trade, what he enjoys | About page — flagged box. **Don't publish unverified experience.** |
| 12 | Confirm the quote attributed to Alister on the About page | Flagged "Confirm wording with Alister". |
| 13 | Genuine client testimonials + written permission | `lib/testimonials.ts` or per project. Section hidden on live site until added. |
| 14 | ABN (optional to display) | Footer / schema if desired. |
| 15 | Business hours / response expectations | Contact page currently says Alister may be on the tools and will call back. |
| 16 | Social profiles (only if active) | `lib/site.ts → social` (feeds schema `sameAs`). |
| 17 | Advice articles: Alister to review all 8 for accuracy and voice | Byline is "Renick Carpentry" until he approves; then set `author: Alister`. |
| 18 | Privacy notice review | `/privacy/` flagged draft. |
