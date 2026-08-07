# Merchantiva

Merchantiva helps ecommerce entrepreneurs make better decisions throughout the entire ecommerce business lifecycle — from first idea to eventual exit.

## Repo Structure

```
merchantiva/
├── README.md
├── docs/
│   ├── strategy.md      — mission, vision, activity system, business model, lead gen
│   ├── positioning.md   — needs-based positioning, target customer, strategic position
│   ├── lifecycle.md     — the 7-stage entrepreneur lifecycle (Discover → Exit)
│   ├── jobs-to-be-done.md — functional/emotional/social needs per stage, phased build/focus order
│   ├── operating-model.md — how Merchantiva functions as a company: the four engines, delivery framework, customer entry points
│   ├── venture-operating-system.md — the internal machine: tools, automation, and team roles behind the Implementation/Growth engines
│   ├── identity.md      — full 5-phase brand identity strategy (research, competitive landscape, touchpoints)
│   ├── brand.md         — voice, tone, messaging guardrails, and visual identity (colors, type, logo, imagery)
│   ├── brand-assets/    — logo SVG source files
│   └── website.md       — site map, page-by-page requirements for the build
│
├── app/                 — application code
├── components/          — shared UI components
├── public/              — static assets
└── package.json
```

## Read Order (for whoever/whatever builds this)

1. `docs/positioning.md` — who this is for and why it's positioned this way
2. `docs/strategy.md` — how the business actually works
3. `docs/lifecycle.md` — the 7-stage model everything else maps to
4. `docs/jobs-to-be-done.md` — why each stage matters to the customer, and what to build/focus on first
5. `docs/operating-model.md` — how it actually works day to day: the four engines, delivery framework, customer entry points
6. `docs/venture-operating-system.md` — the internal production machine (tools, automation, team roles) — internal/ops reference, not needed to build the site
7. `docs/brand.md` — voice, tone, and the visual identity spec (colors, type, logo, imagery)
8. `docs/website.md` — what to actually build
9. `docs/identity.md` — deeper context: market research, competitive landscape, touchpoints (optional reading, not needed to build the site)

## System Architecture
The docs form five layers, each answering a different question. Don't merge layers — they're deliberately separate:

| Layer | Docs | Question Answered |
|---|---|---|
| 1. Strategy | `strategy.md`, `positioning.md`, `brand.md` | Why does Merchantiva exist? What position does it own? |
| 2. Customer | `lifecycle.md`, `jobs-to-be-done.md` | Who is the customer? What progress are they trying to make? |
| 3. Company Capability | `operating-model.md` | What capabilities does Merchantiva have? |
| 4. Execution | `venture-operating-system.md` | How do we actually build, launch, market, and grow ecommerce businesses? |
| 5. Process *(future)* | `sop-library.md` — not yet written | Exactly how does each person perform each task? |

**Why layer 5 doesn't exist yet, on purpose:** SOPs should be written from what's actually been run and observed, not drafted theoretically ahead of execution. The order is: build the venture operating system → execute it → observe what actually happens → turn repeated actions into SOPs. Writing the SOP library before the system has been tested risks producing a polished manual for a machine nobody's actually run yet.

**A related future need, but not a doc:** once ventures are running, Merchantiva will likely need an operating dashboard/cockpit (active ventures, client projects, revenue, marketing performance, intern assignments, research pipeline, experiments running). That's a tool to build, not a markdown file to write — noted here so it isn't lost, but there's no spec for it yet since nothing concrete has been decided.

## Two Lifecycles — Don't Conflate Them
Merchantiva has two different maps that look similar but serve different purposes:

- **Customer Lifecycle** (`docs/lifecycle.md`): Discover → Validate → Launch → Acquire Customers → Scale → Expand → Exit. What the entrepreneur experiences. This is what goes on the website and in marketing.
- **Venture Production Lifecycle** (`docs/venture-operating-system.md`): Idea Discovery → Research → Build → Launch → Acquire Customers → Optimize → Scale → Exit. What Merchantiva does internally to produce a venture — "the factory."

They're related but not the same, and a customer can enter the customer lifecycle at any stage without Merchantiva running the full production lifecycle for them — e.g. a customer might enter at "Acquire Customers" because they already have a store, in which case Merchantiva only runs the Growth/Optimization parts of the internal pipeline. Keeping these separate prevents a real mistake: building the company around Merchantiva's internal activities instead of around customer needs.

## Quick Context

Merchantiva is **not** a course platform and **not** a generic ecommerce agency. It's the decision-and-implementation partner for ecommerce entrepreneurs — it meets entrepreneurs at whichever of the 7 lifecycle stages they're in and offers the right service for that stage. The site needs to make that positioning obvious within seconds of landing on it.

## Status

🚧 Pre-launch. Website in development.
