export type LifecycleStage = {
  num: string;
  slug: string;
  name: string;
  goal: string;
};

export const lifecycleStages: LifecycleStage[] = [
  { num: "01", slug: "discover", name: "Discover", goal: "Find an opportunity worth pursuing." },
  { num: "02", slug: "validate", name: "Validate", goal: "Determine if it can be a real business." },
  { num: "03", slug: "launch", name: "Launch", goal: "Launch the store." },
  { num: "04", slug: "acquire-customers", name: "Acquire Customers", goal: "Generate consistent sales." },
  { num: "05", slug: "scale", name: "Scale", goal: "Build a bigger, more efficient business." },
  { num: "06", slug: "expand", name: "Expand", goal: "Grow beyond the original business." },
  { num: "07", slug: "exit", name: "Exit", goal: "Maximize value, prepare for sale." },
];

// Primary customer-facing framework (docs/lifecycle.md). The seven stages
// above are internal decomposition, not a competing architecture — they're
// a pool of preserved jobs redistributed thematically underneath these five,
// not a one-to-one mapping. Most nest cleanly (subStageSlugs); "Build a
// Profitable Business" is a cross-cutting theme owned by none of the seven,
// so it carries themeTags instead of subStageSlugs.
export type PrimaryLifecycleStage = {
  num: string;
  slug: string;
  name: string;
  jtbd: string;
  situation: string;
  progressFrom: string;
  progressTo: string;
  subStageSlugs: string[];
  themeTags?: string[];
  themeNote?: string;
  // Home/Start Here funnel content (docs/website.md, Home section table).
  nextStep: string;
  howWeHelp: string;
  leadMagnet: string;
  postSignupCta: string;
  postSignupHref: string;
};

export const primaryLifecycleStages: PrimaryLifecycleStage[] = [
  {
    num: "01",
    slug: "start-your-business",
    name: "Start Your Business",
    jtbd: "Help me figure out what to sell and get my ecommerce business started.",
    situation:
      "Has an idea, interest, or intention to start an ecommerce business but no functioning business with established demand yet.",
    progressFrom: "An idea or intention",
    progressTo: "A real ecommerce business that is ready to sell",
    subStageSlugs: ["discover", "validate", "launch"],
    nextStep: "Figure out what you're going to sell",
    howWeHelp:
      "We help you research the opportunity, validate demand, and get a store built and ready to launch.",
    leadMagnet: "[PLACEHOLDER: Ecommerce Startup Guide]",
    postSignupCta: "Get help figuring out what to sell →",
    postSignupHref: "/services",
  },
  {
    num: "02",
    slug: "get-your-first-sales",
    name: "Get Your First Sales",
    jtbd: "Help me get customers and prove people will buy.",
    situation:
      "The store exists and can accept orders, but demand hasn't been demonstrated consistently yet.",
    progressFrom: "A launched business with an unproven market",
    progressTo: "A business with real customers and evidence of demand",
    subStageSlugs: ["acquire-customers"],
    nextStep: "Turn your store into a business that gets customers",
    howWeHelp:
      "We help you find the right channels, fix what's stopping people from buying, and land your first real customers.",
    leadMagnet: "[PLACEHOLDER: First Sales Checklist]",
    postSignupCta: "Get help turning traffic into sales →",
    postSignupHref: "/services",
  },
  {
    num: "03",
    slug: "build-a-profitable-business",
    name: "Build a Profitable Business",
    jtbd: "Help me make the business consistently profitable and build the systems to support it.",
    situation:
      "Demand is demonstrated; this is no longer an experiment. The challenge is building a stable, repeatable, profitable operation.",
    progressFrom: "A business with demonstrated demand",
    progressTo: "A stable, profitable business with repeatable systems",
    subStageSlugs: [],
    themeTags: ["Profitability", "Operations", "Systems", "Automation", "Retention"],
    themeNote:
      "This stage is a cross-cutting theme, not one inherited stage — it spans work that used to sit under multiple old categories: conversion, retention, inventory, analytics, automation, CRM, SOPs, delegation, and reducing owner dependence. The distinction that matters: Build means making the business work.",
    nextStep: "Make the business work better and become profitable",
    howWeHelp:
      "We help you find where you're losing money, build repeatable systems, and make the business less dependent on you.",
    leadMagnet: "[PLACEHOLDER: Profitability Audit Guide]",
    postSignupCta: "Get help making it profitable →",
    postSignupHref: "/services",
  },
  {
    num: "04",
    slug: "grow-your-business",
    name: "Grow Your Business",
    jtbd: "Help me grow the business without losing control of it.",
    situation:
      "The model and systems are proven; the entrepreneur wants substantial growth. Growth creates new complexity — more customers, products, employees, operations, capital, org complexity.",
    progressFrom: "A stable, profitable business",
    progressTo: "A larger, more capable, more valuable company",
    subStageSlugs: ["scale", "expand"],
    nextStep: "Grow without everything depending on you",
    howWeHelp:
      "We help you scale acquisition, build a team, and expand without losing control of the business.",
    leadMagnet: "[PLACEHOLDER: Scaling Readiness Guide]",
    postSignupCta: "Get help scaling without losing control →",
    postSignupHref: "/services",
  },
  {
    num: "05",
    slug: "sell-your-business",
    name: "Sell Your Business",
    jtbd: "Help me maximize the value of what I've built.",
    situation:
      "A meaningful business exists; the entrepreneur wants to maximize its value. Selling isn't the only possible outcome — this stage is about value realization and strategic options broadly.",
    progressFrom: "Owning and operating a valuable business",
    progressTo: "A business prepared for a strategic transaction or other value realization",
    subStageSlugs: ["exit"],
    nextStep: "Prepare the business for its next chapter",
    howWeHelp:
      "We help you strengthen the business, prepare your financials, and get ready for a sale or other exit.",
    leadMagnet: "[PLACEHOLDER: Exit Readiness Checklist]",
    postSignupCta: "Talk about maximizing your business's value →",
    postSignupHref: "/start",
  },
];

export type Engine = {
  num: string;
  name: string;
  desc: string;
};

export const engines: Engine[] = [
  {
    num: "01",
    name: "Intelligence",
    desc: "Research and analysis that removes guesswork on market opportunity, demand, and competitive landscape, turned into a clear recommendation.",
  },
  {
    num: "02",
    name: "Education",
    desc: "Courses, templates, and office hours through the Academy that build your own decision-making skill over time.",
  },
  {
    num: "03",
    name: "Implementation",
    desc: "Hands-on build and execution of stores, campaigns, and systems, so decisions turn into shipped work.",
  },
  {
    num: "04",
    name: "Growth",
    desc: "Automation and systems that compound results without adding headcount.",
  },
];

export type ArticleTeaser = {
  tag: string;
  title: string;
};

export const articleTeasers: ArticleTeaser[] = [
  { tag: "Discover", title: "[PLACEHOLDER: Discover-stage article title]" },
  { tag: "Validate", title: "[PLACEHOLDER: Validate-stage article title]" },
  { tag: "Scale", title: "[PLACEHOLDER: Scale-stage article title]" },
];

export type LifecycleStageDetail = LifecycleStage & {
  bg: "navy" | "slate";
  questions: string[];
  actions: string[];
  cta: string;
  ctaHref: string;
};

export const lifecycleStageDetails: LifecycleStageDetail[] = [
  {
    num: "01",
    slug: "discover",
    name: "Discover",
    goal: "Find an opportunity worth pursuing.",
    bg: "navy",
    questions: [
      "What should I sell?",
      "Which niche?",
      "Where do I find suppliers?",
      "Is this worth it?",
    ],
    actions: [
      "Opportunity research",
      "Niche and category analysis",
      "Supplier sourcing guidance",
      "Go / no-go recommendation",
    ],
    cta: "Find out what to sell",
    ctaHref: "/services",
  },
  {
    num: "02",
    slug: "validate",
    name: "Validate",
    goal: "Determine if it can be a real business.",
    bg: "slate",
    questions: [
      "Is there demand?",
      "Who are my customers?",
      "How do I price?",
      "What makes me different?",
    ],
    actions: [
      "Demand and market sizing",
      "Customer research",
      "Pricing analysis",
      "Positioning and differentiation",
    ],
    cta: "Know if it holds up",
    ctaHref: "/services",
  },
  {
    num: "03",
    slug: "launch",
    name: "Launch",
    goal: "Launch the store.",
    bg: "navy",
    questions: [
      "How do I build it?",
      "Which platform?",
      "Payments?",
      "What goes on the site?",
    ],
    actions: [
      "Platform selection",
      "Store build",
      "Payments and technical setup",
      "Launch preparation",
    ],
    cta: "Get a store built to convert",
    ctaHref: "/services",
  },
  {
    num: "04",
    slug: "acquire-customers",
    name: "Acquire Customers",
    goal: "Generate consistent sales.",
    bg: "slate",
    questions: [
      "How do I get customers?",
      "Which channels?",
      "Better conversions?",
    ],
    actions: [
      "Channel strategy",
      "Paid, SEO, content, email",
      "Conversion optimization",
      "Performance measurement",
    ],
    cta: "Turn traffic into a growth engine",
    ctaHref: "/services",
  },
  {
    num: "05",
    slug: "scale",
    name: "Scale",
    goal: "Build a bigger, more efficient business.",
    bg: "navy",
    questions: ["How do I automate?", "Improve ops?", "Increase profit?"],
    actions: [
      "Process and automation audit",
      "AI workflows and CRM",
      "Reporting systems",
      "Operational efficiency",
    ],
    cta: "Stop doing repetitive work by hand",
    ctaHref: "/services",
  },
  {
    num: "06",
    slug: "expand",
    name: "Expand",
    goal: "Grow beyond the original business.",
    bg: "slate",
    questions: ["What's next?", "New markets?", "Stronger brand?"],
    actions: [
      "New market and category research",
      "Brand development",
      "Portfolio strategy",
    ],
    cta: "Find what's next",
    ctaHref: "/services",
  },
  {
    num: "07",
    slug: "exit",
    name: "Exit",
    goal: "Maximize value, prepare for sale.",
    bg: "navy",
    questions: [
      "What's it worth?",
      "How do I prep for acquisition?",
      "Where do I find buyers?",
    ],
    actions: [
      "Valuation guidance",
      "Exit readiness preparation",
      "Buyer introductions",
    ],
    cta: "Get ready to sell",
    ctaHref: "/contact",
  },
];

export type ServiceOffer = {
  num: string;
  name: string;
  outcome: string;
  steps: string[];
};

export const serviceOffers: ServiceOffer[] = [
  {
    num: "01",
    name: "Start an ecommerce business",
    outcome: "Go from idea to a store that's actually live.",
    steps: [
      "Research opportunities",
      "Recommend a direction",
      "Develop the concept",
      "Build the store",
      "Set up technical infrastructure",
      "Prepare for launch",
    ],
  },
  {
    num: "02",
    name: "Launch a store",
    outcome: "A store built (or rebuilt) to convert.",
    steps: [
      "Product pages",
      "Branding",
      "Analytics",
      "Email",
      "Technical integrations",
      "Conversion foundations",
    ],
  },
  {
    num: "03",
    name: "Get customers",
    outcome: "Turn traffic into a growth engine, and keep improving it.",
    steps: [
      "Research customers, competitors, channels",
      "Acquisition strategy",
      "Paid ads, SEO, content, email, influencers",
      "Measure",
      "Optimize",
    ],
  },
  {
    num: "04",
    name: "Scale operations",
    outcome: "Stop doing repetitive marketing work by hand.",
    steps: [
      "Identify repetitive processes",
      "Automation",
      "AI workflows",
      "CRM and email automation",
      "Reporting and lifecycle systems",
    ],
  },
];

export type Capability = {
  name: string;
  desc: string;
};

export const capabilities: Capability[] = [
  { name: "Free Content", desc: "Articles and guides, open to everyone." },
  { name: "Academy", desc: "Courses, templates, and office hours." },
  { name: "Intelligence", desc: "Research behind every recommendation." },
  { name: "Implementation", desc: "Hands-on build and execution." },
  { name: "Growth & Automation", desc: "Systems that compound results." },
  { name: "Exit", desc: "Valuation and sale readiness." },
];

export const resourceTags = [
  "All",
  "Discover",
  "Validate",
  "Launch",
  "Acquire Customers",
  "Scale",
  "Expand",
  "Exit",
] as const;

export const resourceArticles: ArticleTeaser[] = [
  { tag: "Discover", title: "[PLACEHOLDER: Discover-stage article title]" },
  { tag: "Validate", title: "[PLACEHOLDER: Validate-stage article title]" },
  { tag: "Launch", title: "[PLACEHOLDER: Launch-stage article title]" },
  {
    tag: "Acquire Customers",
    title: "[PLACEHOLDER: Acquire-Customers-stage article title]",
  },
  { tag: "Scale", title: "[PLACEHOLDER: Scale-stage article title]" },
  { tag: "Expand", title: "[PLACEHOLDER: Expand-stage article title]" },
  { tag: "Exit", title: "[PLACEHOLDER: Exit-stage article title]" },
];

// Same stage-mapped lead magnet set used in the Home/Start Here funnel —
// not a separate generic list (docs/website.md, Resources section).
export const resourceDownloads = primaryLifecycleStages.map(
  (stage) => stage.leadMagnet,
);

export type AcademyItem = {
  name: string;
  desc: string;
};

export const academyItems: AcademyItem[] = [
  { name: "Courses", desc: "Structured, stage-by-stage curriculum." },
  { name: "Tutorials", desc: "Short, practical walkthroughs." },
  { name: "Guides", desc: "Reference material for each decision." },
  { name: "Templates", desc: "Ready-to-use planning documents." },
  { name: "Checklists", desc: "Step-by-step execution aids." },
  { name: "Workshops", desc: "Live sessions on current topics." },
  { name: "Office Hours", desc: "Direct access to ask questions." },
  { name: "Research Library", desc: "The intelligence behind every course." },
];

export const aboutNots = [
  "A generic ecommerce agency.",
  "A dropshipping course.",
  "A marketing-influencer brand.",
  "A freelancer marketplace.",
  "A research-report shop.",
];

export const brandTraits = [
  "Strategic",
  "Intelligent",
  "Research-driven",
  "Practical",
  "Trustworthy",
  "Modern",
  "Entrepreneurial",
];
