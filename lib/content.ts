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

export const resourceDownloads = [
  "[PLACEHOLDER: Opportunity report]",
  "[PLACEHOLDER: Launch checklist]",
  "[PLACEHOLDER: Supplier directory]",
  "[PLACEHOLDER: Planning template]",
];

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

export const contactStages = [
  "Discover",
  "Validate",
  "Launch",
  "Acquire Customers",
  "Scale",
  "Expand",
  "Exit",
];
