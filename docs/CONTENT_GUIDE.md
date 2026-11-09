# Updating your website — a guide for Alister

You can update projects, photos and articles yourself, in your web browser. Changes are saved as drafts first, then published when you're happy.

## Logging in
1. Go to **renickcarpentary.com.au/admin/** (bookmark it).
2. Log in with the email invite you received (first time: set a password from the invite email).

## Adding a project to "Our Work"
1. Click **Projects (Our Work) → New Project**.
2. Fill in each box in plain English. Tips:
   - **Title:** what and where — *"Light-filled kitchen renovation in a 1950s Highton home"*.
   - **Suburb:** only if the homeowner is happy for it to be shown.
   - **Main photo:** your best wide shot of the finished space. Landscape, well lit, tidy.
   - **Before / After:** take both from **the same spot and angle** — the slider compares them.
   - **Detail photos:** 3–5 close-ups of joins, trims, finishes. These show your craftsmanship best.
   - **Describe the photo:** say what's in it, e.g. *"Hardwood deck with flush stair nosing, Torquay"*. This helps Google and people using screen readers.
   - **Story boxes:** a few honest sentences each. What did they want? What was tricky? What are you proud of?
   - **Testimonial:** paste the client's exact words — never edit or make them up — and tick *permission* only if they've agreed in writing (an email is fine).
3. Set **Status** to *published* when ready, click **Save**, then **Publish** (top right).
4. The site rebuilds automatically — the project is live in about 2 minutes.

## Photo tips
- Phone photos are fine. Shoot in daylight, turn lights on, clear clutter, hold the phone level.
- Upload the original — the site resizes it. Keep each under ~5 MB.
- Never use photos of work that isn't yours, and ask permission before photographing a client's home.

## Writing an advice article
**Advice articles → New Article.** Answer one real question homeowners ask you. Fill in the *main question* and a 2–3 sentence *short answer* — that's what Google and AI assistants are most likely to quote. Set **Author** to *Alister* for articles you've written or approved.

## Changing your phone number, service areas or service pages
These live in the code (`lib/site.ts`, `lib/services.ts`) so they stay consistent everywhere. Ask Josh to change them — it's a one-line edit.

## If something goes wrong
Every change is saved in GitHub history, so nothing is ever lost — Josh can roll back any change.

---
### For the developer: how content works
- Projects: `content/projects/*.md` (front matter fields match `lib/content.ts → Project`). `status: template|draft|published`; only `published` appears in production and the sitemap.
- Articles: `content/articles/*.md`; `draft: true` hides one.
- CMS config: `public/admin/config.yml` (Git Gateway + editorial workflow → changes arrive as PRs/branches before `main`). Local editing: `npx decap-server` + `npm run dev`, then `/admin/`.
- Uploaded media → `public/images/uploads/`. `npm run build` automatically creates responsive WebP variants (`scripts/optimise-images.mjs`) that `PhotoSlot` references.
