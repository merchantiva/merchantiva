The customer-facing lifecycle model changed — re-read docs/lifecycle.md, it's a 
different structure now. The primary customer-facing framework is 4 stages 
(Start, Launch, Grow, Exit), not 7 (Discover, Validate, Launch, Acquire Customers, 
Scale, Expand, Exit). The 7-stage version still exists in the same file, but it's 
now internal detail nested under the 4 stages, not top-level site navigation.

This means real rework, not relabeling, on the already-built site:

1. Lifecycle page (/lifecycle): restructure from 7 top-level sections to 4. Each 
   of the 4 sections (Start, Launch, Grow, Exit) should show its core need, 
   customer job, and progress statement, with the relevant detailed sub-stages 
   nested as secondary/collapsible content underneath (Start → Discover + 
   Validate; Launch → Launch; Grow → Acquire Customers + Scale + Expand; 
   Exit → Exit). See docs/lifecycle.md and docs/website.md for the exact mapping.

2. Home page selector: change the "Where are you in your journey?" card grid 
   from 7 cards to 4 cards, matching the new stages.

3. Primary nav and any other place the 7 stages are listed or linked: update 
   to the 4-stage structure.

4. Do NOT touch the Services page's 4 commercial offers (Ecommerce Startup, 
   Store Development, Growth, Marketing Automation) — those are a different, 
   unrelated four-part list and are staying as-is. Don't rename them to match 
   the lifecycle stages or merge the two navigation concepts. docs/website.md 
   has an explicit note on this collision — read it before touching Services.

5. Update the positioning/tagline copy on Home if it's using the old wording — 
   docs/positioning.md now has both the brand tagline ("Better decisions. 
   Better businesses.") and a customer-facing line ("From ecommerce idea to 
   business exit, Merchantiva helps you figure out what to do next — and 
   helps you do it.") — use the customer-facing one in hero copy.

Read docs/lifecycle.md, docs/jobs-to-be-done.md, and docs/website.md in full 
before making changes — don't guess at the new structure from this summary 
alone. Once done: build clean, lint clean, verify in-browser at desktop and 
mobile like you did originally, then push. Flag anything that seems ambiguous 
rather than guessing, same as before.
