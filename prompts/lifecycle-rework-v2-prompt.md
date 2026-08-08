The customer-facing lifecycle changed again — re-read docs/lifecycle.md in full, 
don't guess from this summary. It's now 5 stages, not 4:

Start Your Business → Get Your First Sales → Build a Profitable Business → 
Grow Your Business → Sell Your Business

This replaces the Start/Launch/Grow/Exit version from the last rework. The 
7-stage detailed breakdown still exists in the same file as internal detail, 
just remapped differently underneath the new 5 stages (see the table in 
docs/lifecycle.md — "Launch" now nests under "Start Your Business" instead 
of being its own top-level stage, and "Get Your First Sales" is newly elevated 
to its own stage).

Rework needed on the already-built site:

1. Lifecycle page (/lifecycle): restructure from 4 sections to 5. Each section 
   needs its primary JTBD, business situation, and progress statement (FROM/TO) 
   — this is richer content than what was there before, not just a relabel. 
   Nest the nested sub-stages per the new mapping table in docs/lifecycle.md.

2. Home page selector: change from 4 cards to 5, matching the new stage names 
   exactly (they're full phrases now — "Start Your Business," not "Start").

3. Any nav, footer, or other place the 4 stages are listed: update to 5.

4. Do NOT touch the Services page's 4 commercial offers — still unrelated to 
   the lifecycle stage count, still staying as-is. The naming-collision note 
   in docs/website.md's Services section explains why; read it before touching 
   that page.

5. Hero copy on Home should still use the customer-facing tagline from 
   docs/positioning.md ("From ecommerce idea to business exit...") — that 
   didn't change.

Read docs/lifecycle.md, docs/jobs-to-be-done.md, and docs/website.md in full 
before making changes. Once done: build clean, lint clean, verify in-browser 
at desktop and mobile, then push. Flag anything ambiguous rather than guessing.
