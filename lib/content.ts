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
