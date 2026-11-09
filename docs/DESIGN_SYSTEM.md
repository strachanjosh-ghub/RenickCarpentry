# Design system

Source: brand kit `04_Brand_Guidelines` (Option A — Detailed Joinery R). Tokens live in `app/globals.css` (`@theme`).

## Colour
| Token | Hex | Use |
|---|---|---|
| `deep` | #03271F | Hero, dark bands, footer |
| `forest` | #063A2D | Headings, links, primary buttons on cream |
| `cream` | #FFF8EC | Page background; all text on dark |
| `sand` | #F3E9D8 | Alternate light section (derived) |
| `gold` | #D9A54C | Rules, large accents, eyebrows **on dark only** |
| `timber` | #BD8650 | Material accents in illustrations/logo — never text on cream |
| `ink` | #172B24 | Body text |
| `muted` | #3F5049 | Secondary text (8.1:1 on cream) |

Rules from the style guide: reversed logo on dark green; cream for all small text on dark; no gold small print on cream.

## Type
Headings: Cormorant Garamond 600 (fallback Georgia), fluid 36–64 px H1. Body: Montserrat 450, **18 px / 1.65**. Nav 17 px. Minimum UI text 14 px.

## Components
`btn btn-primary` / `btn-outline` (52 px min height; invert automatically inside `.on-dark`), `eyebrow`, `rule-gold`, `container-site` (1240 px), `container-prose` (46 rem), `prose-renick` (articles), `PhotoSlot` (real photo or flagged placeholder), `BeforeAfter`, `FaqList` (+FAQPage schema), `CtaBand`, `ServiceCard`, `ProjectCard`, `Breadcrumbs`, `EnquiryForm`, `MobileCallBar`.

## Logo usage
Header (cream): `renick-horizontal-light-web.svg`. Footer (deep): `renick-horizontal-dark-web.svg`. The `-web` files are the kit artwork with surrounding whitespace trimmed — artwork unchanged. Favicons from the kit. Note: the kit's horizontal SVGs set "RENICK / CARPENTRY" as live text (Georgia/Arial), so rendering varies slightly by device; ask the designer for outlined-text versions for pixel-identical rendering.
