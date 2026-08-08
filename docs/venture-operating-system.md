# Merchantiva Ecommerce Venture Operating System

This is the internal machine — the actual tools, automation, and roles that make the four engines in `docs/operating-model.md` run in practice. `operating-model.md` describes *what* Merchantiva does at a company level (Intelligence, Education, Implementation, Growth engines); this doc describes *how* the Implementation and Growth engines specifically get executed, day to day, by a real team.

## 1. Opportunity Discovery System
**Purpose:** Find ecommerce opportunities worth building.

**Inputs:** Google Trends, Amazon trends, TikTok trends, Meta ad library, competitor analysis, marketplace data, keyword research, customer reviews.

**Process:**
1. Identify growing categories
2. Analyze demand
3. Find customer pain points
4. Evaluate competition
5. Identify product opportunities
6. Create opportunity score

**Output:** Opportunity database, product shortlist, build/no-build decision.

**Owner:** Research team.

## 2. Ecommerce Build System
**Purpose:** Turn validated opportunities into operating stores.

**Process:** Research → Brand concept → Domain → Store build → Product sourcing → Product pages → Tracking → Launch

**Technology options:** Shopify for speed; Next.js/custom stack when needed; AI-assisted design and coding; automated content generation.

**Owner:** Build team.

## 3. Marketing Automation System
The customer acquisition engine should not depend on manual marketing.

### Paid Ads
**System:** Product → Creative generation → Campaign creation → Testing → Optimization → Scaling
**Automation:** Generate multiple ad creatives, create campaign variations, automated bidding, budget allocation, performance monitoring, pause poor performers.
**Platforms:** Meta Ads, Google Ads, TikTok Ads.
**Owner:** Growth team.

### SEO Content Engine
**System:** Keyword discovery → Content creation → Publishing → Internal linking → Performance tracking
**Automation:** Find buyer-intent keywords, generate content briefs, draft articles, update pages, monitor rankings.
**Goal:** Build organic acquisition assets.

### Influencer Engine
**System:** Find creators → Evaluate audience → Outreach → Send product → Track results
**Automation:** Creator discovery, outreach sequences, relationship tracking, campaign reporting.
**Goal:** Create social proof and customer acquisition.

### Email/CRM Engine
**System:** Traffic → Capture → Nurture → Purchase → Retention
**Automation:** Welcome sequences, abandoned cart, product education, upsells, customer retention.

## 4. Analytics Intelligence System
Every business gets a dashboard. Track:

- **Traffic:** Visitors, sources
- **Marketing:** CAC, ROAS, conversion rate
- **Sales:** Revenue, average order value, repeat purchases
- **Operations:** Inventory, customer support

The system answers one question, consistent with the core question in `docs/strategy.md`: **"What decision should we make next?"**

## 5. Team Structure
This is where interns and operators fit into the machine — at the current single-founder-plus-interns stage:

**You (Founder):** Strategy, partnerships, sales, final decisions.

**Interns:**
- Market research, competitor research, product research
- Content production
- Data gathering
- Campaign support
- Ecommerce Build Intern — creates stores
- Marketing Automation Intern — builds campaign systems, email flows, SEO systems, influencer workflows
- Data/Growth Intern — monitors analytics, experiments, optimization

**Future hires** *(not yet in place — add as volume justifies)*:
- Ecommerce builder
- Marketing automation specialist
- Paid ads specialist
- Operations manager

**Example — same customer stage, different internal workflow:** a customer says "I already have a Shopify store but I'm not getting sales." Customer lifecycle stage: Acquire Customers. Merchantiva's internal execution for that one stage still runs multiple systems: audit the store, analyze competitors, build an ad strategy, create ad creatives, set up email automation, optimize conversion. One customer-facing stage can map to work across several of the internal systems above — that's the point of keeping the two lifecycles separate (see `README.md` — Two Lifecycles).

## 6. Customer Value Model
Merchantiva is not selling a website. The customer buys:

> **"A launched ecommerce business with a customer acquisition system."**

**Internal production pipeline:** Idea Discovery → Research → Build → Launch → Acquire Customers → Optimize → Scale → Exit

At the Optimize/Scale point, every venture hits a decision gate: **scale it, sell it, or shut it down.** Not every opportunity that gets built is worth continued investment — this is a deliberate checkpoint, not a failure state.

> **Note — there are three related but distinct maps, not two — and map 1 has changed twice now, so re-check this if it looks unfamiliar:**
> 1. **Customer-facing lifecycle** (`docs/lifecycle.md`, primary): **Start Your Business → Get Your First Sales → Build a Profitable Business → Grow Your Business → Sell Your Business**. What goes on the website, in navigation, and in marketing. (This was Start → Launch → Grow → Exit in an earlier revision, and Discover → Validate → Launch → Acquire → Scale → Expand → Exit before that.)
> 2. **Internal operating resolution** (`docs/lifecycle.md`, secondary): Discover → Validate → Launch → Acquire → Scale → Expand → Exit. The detailed breakdown of what falls inside each of the 5 customer-facing stages — used for designing offers/content, not for site navigation.
> 3. **Venture production pipeline** (this doc): Idea Discovery → Research → Build → Launch → Acquire Customers → Optimize → Scale → Exit. What Merchantiva's *team* does to produce a venture — a different concept from either customer map above, describing internal execution, not customer experience or customer-facing structure.
>
> A customer can enter the customer-facing lifecycle (map 1) at any of its 5 stages without Merchantiva running the full production pipeline (map 3) for them — e.g. a customer might enter at "Grow Your Business" because they already have a profitable store, in which case Merchantiva only runs the relevant portion of the internal pipeline. Keep all three maps — don't merge them — but be aware they're different views of overlapping territory, and don't let site or marketing copy quote map 2 or map 3 as if either were the customer-facing lifecycle. Building the company around internal activities instead of around customer needs is the mistake this distinction exists to prevent.

## Related, Not Yet Written
**SOP Library** — step-by-step execution documents for each system above (e.g. the exact process an Ecommerce Build Intern follows). This doc describes the systems; it doesn't yet contain the SOPs themselves, and shouldn't be drafted theoretically ahead of execution. The correct order: build the venture operating system → execute it → observe what actually happens → turn repeated actions into SOPs. Writing a polished operations manual for a machine that hasn't been run yet just produces fiction with good formatting.
