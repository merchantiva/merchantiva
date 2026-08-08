# Merchantiva — Build Prompt for Coding Tool

## Start here
Read `README.md` first — it points you through the docs in the right order (positioning → strategy → lifecycle → jobs-to-be-done → operating-model → venture-operating-system → brand → website → identity). Read all of them before writing code; several build decisions (outcome-based service naming, the Academy/Membership rename, the Delivery Model) only make sense with that context.

## What to build
The Merchantiva marketing site: 7 pages (Home, Lifecycle, Services, Resources, Academy, About, Contact) per `docs/website.md`, using the brand system in `docs/brand.md`.

**Stack:** Next.js (App Router) + Tailwind CSS. The repo's existing `app/` and `components/` folders assume this — use them. No backend/database needed yet; this is a marketing site with email capture, not an app (see `docs/website.md` — Non-Goals for v1).

**Build order:** Home first. Stop and let me review before building the remaining 6 pages.

## Design reference — read this carefully
`design-reference/*.dc.html` is the approved visual design, exported from Claude Design. **These files are not usable as-is.** They're Claude Design's proprietary preview format:
- `<x-dc>`, `<dc-import>`, `<sc-for>` are Claude Design's own custom tags, not real HTML/React
- `support.js` is Claude Design's preview runtime — do not include it in the actual site
- Pages link to each other via filenames (`Merchantiva Services.dc.html`) — remap these to real Next.js routes per `docs/website.md` (`/services`, `/lifecycle`, etc.)

**Treat these files as a design spec to extract from, not code to copy-paste:**
- Exact colors, spacing, and layout structure (they use inline styles with real hex values matching `docs/brand.md` — pull these into Tailwind config / CSS variables)
- Fonts: **Source Serif 4** for headlines, **IBM Plex Sans** for body/UI — load both via `next/font/google`, not the Google Fonts `<link>` tags in the mockup
- Exact copy/headlines already written for each page
- Component structure: `nav.dc.html` and `footer.dc.html` are meant to be shared components — build them as actual shared React components, not per-page duplication
- The logo: `design-reference/uploads/favicon.svg` is the same file as `public/favicon.svg` (functionally identical, just serialized differently by the export) — use `public/favicon.svg` as the source of truth, and `docs/brand-assets/icon-mark.svg` for the flexible `currentColor` version if you need the mark elsewhere in the UI. The nav uses the M mark + typeset "MERCHANTIVA" wordmark text (IBM Plex Sans, bold, tracked-out) — not an image file for the wordmark, since none was provided; set it as real text per `nav.dc.html`.

## Placeholder content — do not invent real-looking data
The mockups correctly used explicit placeholder markers (e.g. `[TESTIMONIAL PLACEHOLDER]`, `[Name, Title, Company, PLACEHOLDER]`, `[PLACEHOLDER: Discover-stage article title]`) for testimonials, pricing, and lead magnet titles that don't exist yet. **Preserve this pattern in the real build** — render these as clearly-marked placeholder UI states, not as shipped copy, and don't replace them with invented realistic-sounding names/numbers. Flag anywhere you're not sure whether something is real content or a placeholder that slipped through.

## Responsiveness
The design brief only required mobile mockups for Home, Lifecycle, and Services. For the actual production build, make all 7 pages responsive — use the patterns established in those three (card grid collapse, nav behavior, CTA placement) as the template for the other four.

## Content guardrails (from `docs/brand.md` and `docs/website.md`)
- Never present Intelligence/research as a standalone purchasable item — it's supporting detail under the four outcome-based offers, never a headline
- Service headlines are outcomes ("Start an ecommerce business," "Launch a store," "Get customers," "Scale operations") — methods (research, Shopify setup, SEO, automation) stay as supporting detail
- Never use "agency" or "course platform" to describe Merchantiva
- Persistent nav CTA is "Start Here"

## When you're done with Home
Stop and show me before continuing to the other 6 pages.
