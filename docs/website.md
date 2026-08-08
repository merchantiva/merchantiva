# Merchantiva — Site Requirements

Read `docs/strategy.md`, `docs/positioning.md`, and `docs/lifecycle.md` first. Everything below should reflect that strategy.

## Goals of the Website (v1)
1. Communicate the positioning instantly: the decision-and-implementation partner for ecommerce entrepreneurs, across the whole lifecycle. **This describes the feeling the visitor should come away with, not literal on-page copy.** Never publish a "what we are not" section, a contrast-with-competitors section, or internal positioning language (e.g. "not a course platform," "not a research-report shop") as visible text anywhere on the site. That's internal brand strategy — useful for guiding tone in `docs/brand.md`, wrong for a customer-facing page. The homepage should read like a company helping an ecommerce entrepreneur, not like a strategy document.
2. Capture leads (email signup) via free content/resources.
3. Let a visitor self-identify their current stage — Start Your Business, Get Your First Sales, Build a Profitable Business, Grow Your Business, or Sell Your Business (see `docs/lifecycle.md`) — and see the relevant next step.
4. Present the business model (Free Content, Academy, Intelligence, Implementation, Growth & Automation, Exit) without overwhelming a first-time visitor — while foregrounding the current commercial focus (Startup, Store Development, Growth, Marketing Automation) in primary CTAs. See `docs/jobs-to-be-done.md` — "Current Commercial Focus" for why.

## Assumed Scope for v1
A marketing/content site, not a full app. No login, no paid checkout required yet — CTAs can point to a waitlist/email capture and a "join Academy" placeholder until pricing/payments are finalized. Flag this assumption in the build if it needs to change.

## Site Map

### 1. Home (`/`)
- Hero: one-line strategic position + subhead — use the core positioning line from `docs/positioning.md`: "Merchantiva helps ecommerce entrepreneurs figure out what to do next — and helps them do it."
- **"Where are you in your journey?" — this is the funnel's entry point, not just a navigation selector.** See `docs/strategy.md` — Customer Engagement Funnel — for why this matters. Selecting a stage should not simply link to the Lifecycle page; it should immediately surface a specific, useful next step plus a free lead magnet and email capture, right there. Pattern for each of the 5 stages (Start Your Business / Get Your First Sales / Build a Profitable Business / Grow Your Business / Sell Your Business — see `docs/lifecycle.md`):
  - A one-line "your next step" statement specific to that stage
  - A short explanation of how Merchantiva helps with it
  - A free lead magnet CTA tied to that specific stage (see table below — titles are `[PLACEHOLDER]`, don't invent finalized guide names)
  - Email capture on the lead magnet CTA
  - After capture, a secondary, higher-commitment CTA becomes relevant ("Get help with your idea →") — this can be the follow-up state shown after signup, or the next email in the sequence; either is acceptable, but don't skip straight to a hard sell before the free value is delivered.
  - A link through to the fuller detail on the Lifecycle page still exists — the inline flow doesn't replace `/lifecycle`, it's the fast path for visitors who want to act immediately.

  | Stage | Next step | Lead magnet (working title, placeholder) |
  |---|---|---|
  | Start Your Business | Figure out what you're going to sell | `[PLACEHOLDER: Ecommerce Startup Guide]` |
  | Get Your First Sales | Turn your store into a business that gets customers | `[PLACEHOLDER: First Sales Checklist]` |
  | Build a Profitable Business | Make the business work better and become profitable | `[PLACEHOLDER: Profitability Audit Guide]` |
  | Grow Your Business | Grow without everything depending on you | `[PLACEHOLDER: Scaling Readiness Guide]` |
  | Sell Your Business | Prepare the business for its next chapter | `[PLACEHOLDER: Exit Readiness Checklist]` |

- **Founder Story** — concise version, full narrative and suggested copy in `docs/positioning.md` (Founder Story section). Personal, first-person, credible — explains why Merchantiva exists from firsthand experience, not generic company mission language.
- Brief explainer of the four engines (Intelligence, Education/Academy, Implementation, Growth) — see `docs/operating-model.md` for the canonical version of this list; don't use `strategy.md`'s older "Activity System" wording (Intelligence, Education, Community, Implementation), which predates the engines framework
- Social proof placeholder (case studies / testimonials — TBD content)
- Free content teaser (latest articles/reports) pulling from Resources
- Primary CTA: the stage-selector funnel above, not a generic newsletter signup — the newsletter is a fallback for visitors who don't want to pick a stage yet
- Secondary CTA: explore services (Startup, Store Development, Growth, Marketing Automation)
- **Do not include:** a "what Merchantiva is not" section, a competitor-contrast section, or any other internal-positioning language as visible copy. See goal #1 above.

### 2. Lifecycle (`/lifecycle`)
**Primary structure is now five stages** — Start Your Business, Get Your First Sales, Build a Profitable Business, Grow Your Business, Sell Your Business. This doc has changed twice now (7 → 4 → 5); if the site still reflects an earlier version, it needs a real rework, not a relabel.

For each of the 5 stages, include:
- Stage name + primary JTBD + business situation (use verbatim from `docs/lifecycle.md`)
- Progress statement (FROM → TO)
- A nested breakdown of the detailed sub-stages that fall inside it — Start Your Business → Discover + Validate + Launch; Get Your First Sales → Acquire Customers; Build a Profitable Business → Early Scale/Optimization/Operations; Grow Your Business → Scale + Expand; Sell Your Business → Exit — collapsible/secondary detail, not equal visual weight to the 5 main sections
- CTA relevant to that stage, framed as an outcome not a deliverable (e.g., Start Your Business → "Find out what to sell — and get help building it," not "Get an opportunity report"; Sell Your Business → "Talk about maximizing your business's value")

### 3. Services (`/services`)
> **Naming collision to watch for:** there are two different lists in this project that both involve Merchantiva's core structure but aren't the same thing — the 5 lifecycle stages (Start Your Business, Get Your First Sales, Build a Profitable Business, Grow Your Business, Sell Your Business — customer journey, drives the Lifecycle page and primary nav) and the 4 commercial offers below (Startup, Store Development, Growth, Marketing Automation — what Merchantiva actually sells right now). They're related but not the same list, don't have the same count, and don't map 1:1 (there's no "Sell Your Business" commercial offer yet — see `docs/jobs-to-be-done.md`, Current Commercial Focus). Don't merge them into one nav concept or try to force the offer count to match the stage count.

Lead with the **current commercial focus**. Headline each offer with the customer outcome — not the method used to deliver it. "Research," "Shopify setup," "SEO," and "Automation" are methods, not outcomes — they belong in supporting detail, never as a headline or nav label. Every offer runs research → decision → implementation → results → optimization internally, but the customer-facing framing is "we'll help you figure it out and help you build it," never "buy a research report."

**1. Start an ecommerce business** *(= Ecommerce Startup offer)*
Supporting detail: research opportunities, recommend a direction, develop the concept, build the store, set up technical infrastructure, prepare for launch.

**2. Launch a store** *(= Store Development offer)*
Supporting detail: product pages, branding, analytics, email, technical integrations, conversion foundations.

**3. Get customers** *(= Growth offer)*
Supporting detail: research customers/competitors/channels/offers, develop acquisition strategy, implement paid ads/SEO/content/email/influencers/conversion improvements, measure results, optimize.

**4. Scale operations** *(= Marketing Automation offer)*
Supporting detail: identify repetitive processes, implement automation, AI workflows, CRM, email automation, reporting, customer lifecycle systems.

Below the four offers, a lighter-weight section on the broader capability system (Free Content, Academy, Intelligence, Implementation, Growth & Automation, Exit) for visitors who want the full picture — framed as "how we work," not as four more things to buy right now. Do not give this section equal visual weight to the four commercial offers above it, and do not present Intelligence as a purchasable standalone item in this section — it's the input layer, not a separate SKU (research-only engagements are still possible, but they're an exception handled case-by-case, not a menu item).

### 4. Resources / Free Content (`/resources`)
- Blog/article index
- Newsletter signup (prominent)
- Filter or tag by lifecycle stage (the 5 stages) so content maps back to the current model — the detailed 7-stage breakdown can still exist as sub-tags if useful for SEO long-tail content, but the primary filter is the 5 stages
- Space for downloadable lead magnets — use the same stage-mapped set defined in the Home page's funnel section above (Ecommerce Startup Guide, First Sales Checklist, etc.), not a disconnected generic list

### 5. Academy (`/academy`)
- What's included: courses, tutorials, guides, templates, checklists, workshops, office hours, research library
- Positioned as the education and recurring-relationship layer — not the primary revenue focus for v1, but should exist so early visitors see the long-term system
- Pricing (placeholder if not finalized — do not fabricate numbers)
- CTA to join / waitlist

### 6. About (`/about`)
- Mission, vision, guiding principle (pull directly from `docs/strategy.md` and `docs/positioning.md` — do not rewrite the positioning)
- **Do not** include a "why not a course platform or agency" section, or any internal-positioning contrast language, as visible copy. That guidance shapes tone, not what gets published.
- Founder Story — see full narrative and suggested copy in `docs/positioning.md` (Founder Story section). Personal, credible, first-person. Not a corporate "About Us" statement.

### 7. Start Here (`/start`) — this is not a generic contact form
This page is a landing-page version of the same funnel entry point on Home — it exists so paid traffic, email links, and direct shares have somewhere to land that isn't the homepage. Same pattern: stage selection → specific next step → free lead magnet → email capture → secondary paid CTA after signup. Reuse the same component/content as Home's stage selector rather than building separate copy.

A plain "tell us what you need" contact form can still exist as a secondary path (e.g. for visitors who want to talk to a person directly rather than pick a stage), but it should not be the primary function of this page.

## Navigation
Primary nav: Lifecycle · Services · Resources · Academy · About
Persistent CTA button: "Start Here" — links to `/start` (see site map #7). There's no separate "Contact" nav item anymore; Start Here *is* the contact/lead-capture path now, per the funnel rework above. If a plain "talk to a person" contact option is still needed, it lives as a secondary option on the `/start` page itself, not as its own top-level nav item.

## Non-Goals for v1
- No payment processing yet
- No gated member portal/login yet
- No full CRM integration yet (email capture can go to a simple list/provider — specify provider before build if known)

## Visual Design System
Use the color palette, typography direction, and imagery guidelines defined in `docs/brand.md` — do not select an arbitrary UI theme. Key colors for CSS variables / Tailwind config:
- `--color-primary: #0B0F14` (Deep Navy)
- `--color-secondary: #2A3441` (Dark Slate)
- `--color-neutral: #667182` (Cool Gray)
- `--color-accent: #4DD6FF` (Electric Cyan)

### Logo Assets Needed
Per `docs/brand.md`'s locked logo system:
- Full lockup (serif M + wordmark + tagline) — header, footer, marketing pages
- Standalone simplified icon (bolder, no serif detail) — favicon, app icon, nav bar on small screens, social avatar
Do not use the full lockup as the favicon — it will not survive downscaling. Request the standalone icon asset separately if not yet provided.

## Content Notes for the Builder
- Do not invent pricing, testimonials, or case study numbers. Use placeholder content clearly marked `[PLACEHOLDER]` if real content isn't supplied.
- All page copy should follow `docs/brand.md` for tone and terminology.
- The word "agency" and "course platform" should never be used to describe Merchantiva — see `docs/brand.md`.
- Never frame Intelligence/research as a standalone deliverable in service copy — see `docs/strategy.md` (Strategic Principle) and `docs/jobs-to-be-done.md` (Core Job) for why.
- **Internal positioning language never becomes visible copy.** Docs like this one describe what Merchantiva should *feel like* to build toward — that's guidance for tone, word choice, and what to prioritize, not literal text to publish. Concretely: no "What Merchantiva is not" sections, no competitor-contrast sections, no on-page text explaining what Merchantiva deliberately doesn't sell. If a doc says "the visitor should come away thinking X, not Y," that means write copy that produces that feeling — not copy that states the contrast directly.
