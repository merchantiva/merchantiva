# Merchantiva — Site Requirements

Read `docs/strategy.md`, `docs/positioning.md`, and `docs/lifecycle.md` first. Everything below should reflect that strategy.

## Goals of the Website (v1)
1. Communicate the positioning instantly: the decision-and-implementation partner for ecommerce entrepreneurs, across the whole lifecycle — not a course platform, not an agency, and not a research-report shop. The visitor should come away thinking "they'll help me figure it out and help me build it," not "buy a research report."
2. Capture leads (email signup) via free content/resources.
3. Let a visitor self-identify their current lifecycle stage and see the relevant next step.
4. Present the business model (Free Content, Academy, Intelligence, Implementation, Growth & Automation, Exit) without overwhelming a first-time visitor — while foregrounding the current commercial focus (Startup, Store Development, Growth, Marketing Automation) in primary CTAs. See `docs/jobs-to-be-done.md` — "Current Commercial Focus" for why.

## Assumed Scope for v1
A marketing/content site, not a full app. No login, no paid checkout required yet — CTAs can point to a waitlist/email capture and a "join Academy" placeholder until pricing/payments are finalized. Flag this assumption in the build if it needs to change.

## Site Map

### 1. Home (`/`)
- Hero: one-line strategic position + subhead explaining the lifecycle model
- "Where are you in your journey?" — interactive or visual selector mapping to the 7 stages, each linking to a stage page or anchor
- Brief explainer of the 4 activity pillars (Intelligence, Education, Community, Implementation)
- Social proof placeholder (case studies / testimonials — TBD content)
- Free content teaser (latest articles/reports) pulling from Resources
- Primary CTA: email/newsletter signup
- Secondary CTA: explore services (Startup, Store Development, Growth, Marketing Automation)

### 2. Lifecycle / Stages (`/lifecycle` or per-stage pages `/lifecycle/discover`, `/lifecycle/validate`, etc.)
For each of the 7 stages, include:
- Stage name + goal statement
- The customer questions this stage answers (use verbatim from `docs/lifecycle.md`)
- Services offered at this stage
- CTA relevant to that stage, framed as an outcome not a deliverable (e.g., Discover → "Find out what to sell — and get help building it," not "Get an opportunity report"; Exit → "Talk about preparing your business for sale")

### 3. Services (`/services`)
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
- Filter or tag by lifecycle stage so content maps back to the 7-stage model
- Space for downloadable lead magnets (opportunity reports, launch checklists, supplier directories, planning templates)

### 5. Academy (`/academy`)
- What's included: courses, tutorials, guides, templates, checklists, workshops, office hours, research library
- Positioned as the education and recurring-relationship layer — not the primary revenue focus for v1, but should exist so early visitors see the long-term system
- Pricing (placeholder if not finalized — do not fabricate numbers)
- CTA to join / waitlist

### 6. About (`/about`)
- Mission, vision, guiding principle (pull directly from `docs/strategy.md` and `docs/positioning.md` — do not rewrite the positioning)
- Why needs-based positioning / why not a course platform or agency

### 7. Contact / Start Here (`/contact` or `/start`)
- Simple way for a visitor to say what stage they're in and what they need
- Email capture at minimum; form fields TBD

## Navigation
Primary nav: Lifecycle · Services · Resources · Academy · About · Contact
Persistent CTA button: "Start Here"

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
