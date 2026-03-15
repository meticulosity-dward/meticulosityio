/* ─── Navigation ─── */
export const nav = {
  links: [
    { label: "What is .io", href: "/what-is-meticulosity-io" },
    { label: "Automation Catalog", href: "/automation-catalog" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Data Layer", href: "#data-layer" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ],
  cta: "Book a Free Assessment",
};

/* ─── Hero ─── */
export const hero = {
  eyebrow: "Automation-as-a-Service Built for Agencies",
  headline: "We automate agency operations so your team doesn't have to.",
  subheadline:
    "Your tools. Our automations. Zero workflows to build or maintain. 50+ production-tested automations deployed across your existing stack, saving 230+ hours of manual work every month.",
  primaryCta: "Book a Free Assessment",
  secondaryCta: "See How It Works",
  proofLine: "Currently saving 230+ hours/month across 60+ concurrent clients",
  layers: {
    bottom: {
      label: "Your Existing Tools",
      tools: ["ClickUp", "HubSpot", "QuickBooks", "Slack", "Gmail"],
    },
    middle: { label: "Unified Data Layer" },
    top: {
      label: "Automation Library",
      items: ["Burn Reports", "Client Onboarding", "AI Triage"],
    },
  },
};

/* ─── Logo Strip ─── */
export const logoStrip = {
  label: "Works With the Tools You Already Use",
  row1: [
    "ClickUp",
    "Monday.com",
    "Asana",
    "Teamwork",
    "HubSpot",
    "Salesforce",
    "QuickBooks",
    "Xero",
  ],
  row2: [
    "Slack",
    "Microsoft Teams",
    "Google Workspace",
    "PandaDoc",
    "Airtable",
    "Fireflies",
    "JustCall",
    "FreshBooks",
  ],
};

/* ─── Pain Points ─── */
export const painPoints = {
  headline:
    "You Started an Agency to Do Great Work. Not to Chase Spreadsheets.",
  subheadline:
    "These are the operational bottlenecks quietly eating 15-20% of your margins.",
  cards: [
    {
      icon: "Clock",
      title: "Burn Reporting Takes All Friday",
      description:
        "Someone on your team spends every Friday afternoon grinding through export, format, email, repeat. When that person is sick, reports don't go out. Clients notice.",
    },
    {
      icon: "UserX",
      title: "Onboarding Is a Fire Drill",
      description:
        "Every new client means manually creating folders, channels, billing records, and email sequences. Something always gets missed. The first impression suffers.",
    },
    {
      icon: "AlertTriangle",
      title: "Tasks Fall Through Cracks",
      description:
        "Overdue tasks, missing assignees, stale work orders. Nobody knows about them until a client complains. By then, the damage is done.",
    },
    {
      icon: "Calculator",
      title: "Invoicing Is Manual and Error-Prone",
      description:
        "A signed quote should trigger an invoice automatically. Instead, someone has to remember to create it, update the hours bank, and notify billing. They don't always remember.",
    },
    {
      icon: "Brain",
      title: "AI Is Manual and Inconsistent",
      description:
        "Your team uses ChatGPT, but everyone writes different prompts and gets different quality. There's no consistency, no memory, and no connection to your project data.",
    },
    {
      icon: "TrendingDown",
      title: "You Can't Answer the One Question That Matters",
      description:
        '"How many hours has this client used out of the hours they purchased?" Getting that answer today means exporting data, reconciling spreadsheets, and hoping nothing was missed.',
    },
  ],
};

/* ─── Positioning ─── */
export const positioning = {
  headline: "It's Not Software. It's Not Consulting. It's a Managed Service.",
  cards: [
    {
      type: "negative" as const,
      title: "It's not software you buy.",
      description:
        "There's no platform to log into, no dashboards to learn, no workflows to build yourself.",
    },
    {
      type: "negative" as const,
      title: "It's not consulting.",
      description:
        "We don't hand you a playbook and wish you luck. We don't teach you how to fish.",
    },
    {
      type: "positive" as const,
      title: "It's a managed automation service.",
      description:
        "We plug into your existing tools and deploy automations that do the ops work a person used to do. Then we monitor, maintain, and optimize them on an ongoing basis.",
    },
  ],
  callout:
    "You already outsource bookkeeping, IT, and HR. This is the same model, but for the operational busywork that's quietly eating 15-20% of your margins.",
};

/* ─── How It Works ─── */
export const howItWorks = {
  headline: "Three Steps. Then It Runs Without You.",
  steps: [
    {
      number: "01",
      title: "We Connect Your Tools",
      description:
        "We build a unified data layer that syncs your PM tool, accounting system, CRM, and comms into one structured model. Think of it as a master roster that always knows which clients are active, who's working on what, what's been invoiced, and how many hours have been consumed. This is the foundation that makes every automation reliable.",
    },
    {
      number: "02",
      title: "We Deploy Automations",
      description:
        "From our library of 50+ workflows running in production across multiple agencies, we activate the ones that match your operations: burn reports, onboarding, time sync, budget enforcement, AI-powered task triage, and more. No building. No configuration. No maintenance.",
    },
    {
      number: "03",
      title: "We Run Everything",
      description:
        "We monitor, maintain, and optimize every automation on an ongoing basis. When something changes, a new client, updated process, or tool upgrade, we handle it. Your team never touches a workflow. The automations run every time, on schedule, without sick days, forgotten steps, or Monday morning inconsistency.",
    },
  ],
};

/* ─── Origin Story ─── */
export const originStory = {
  headline: "Born from a $20,000 Mistake",
  paragraphs: [
    "Two years ago, we discovered we'd been drastically under-billing our clients. A bug in ClickUp's time export left over 100 hours of legitimate billable work unreported. At our rates, that was nearly $20,000 in revenue we could never recover.",
    "We didn't set out to build an automation platform. We just needed accurate time reports. But what we ended up building became the foundation for almost everything we do today.",
    "Running 60+ concurrent agency clients forced a choice: automate or break. We chose to automate. Over two years, we built, maintained, and continuously improved a library of 50+ production-grade automations, many AI-enhanced, that now save 230+ hours per month of manual operational work.",
    "That's the equivalent of 1.5 full-time ops employees, operating with perfect consistency, around the clock, at a fraction of the cost. And here's the critical insight: Meticulosity is a boutique firm. If these results are possible at our scale, the impact for a 30-, 50-, or 100-person agency would be dramatically higher.",
  ],
  timeline: [
    { year: "2008", event: "Meticulosity founded" },
    { year: "2014", event: "HubSpot Partner since day one of the partner program" },
    { year: "2024", event: "$20,000 billing crisis hits" },
    { year: "2024", event: "First automation deployed: time tracking sync" },
    { year: "2025", event: "30+ automations in production" },
    { year: "2025", event: "Meticulosity Global formed (UAE, Saudi Arabia, Egypt)" },
    { year: "2026", event: "50+ automations, 230+ hours/month saved" },
    { year: "2026", event: "Meticulosity.io launches" },
  ],
};

/* ─── Automation Showcase ─── */
export type AutomationCategory =
  | "All"
  | "Time & Billing"
  | "AI-Powered Intelligence"
  | "Client Lifecycle"
  | "Data Synchronization"
  | "Project Management"
  | "Team Communication";

export interface AutomationCard {
  name: string;
  category: AutomationCategory;
  description: string;
  hoursSaved: string;
  tags: string[];
}

export const automationShowcase = {
  headline: "50+ Automations Across Your Entire Tech Stack",
  subheadline: "From RevOps to client delivery to internal comms. Augmented with AI.",
  categories: [
    "All",
    "Time & Billing",
    "AI-Powered Intelligence",
    "Client Lifecycle",
    "Data Synchronization",
    "Project Management",
    "Team Communication",
  ] as AutomationCategory[],
  cards: [
    {
      name: "Client Burn Reports",
      category: "Time & Billing",
      description:
        "Automatically generates and emails personalized burn reports to every active client, weekly and monthly.",
      hoursSaved: "6-12 hrs/week",
      tags: ["Agentic"],
    },
    {
      name: "New Client Onboarding",
      category: "Client Lifecycle",
      description:
        "Signed proposal triggers automatic creation of PM workspace, Slack channel, Drive folders, QuickBooks record, and email sequences.",
      hoursSaved: "3.5 hrs/client",
      tags: ["Agentic"],
    },
    {
      name: "AI Call Transcript Processor",
      category: "AI-Powered Intelligence",
      description:
        "Captures client call transcripts, matches them to active tasks, and posts context-rich summaries with task updates to your PM tool.",
      hoursSaved: "4-8 hrs/week",
      tags: ["Agentic", "AI-Powered"],
    },
    {
      name: "AI Work Order Triage",
      category: "AI-Powered Intelligence",
      description:
        "AI analyzes incoming client requests, categorizes by skill and complexity, and suggests clarifying questions before work begins.",
      hoursSaved: "15-20 hrs/month",
      tags: ["AI-Powered"],
    },
    {
      name: "Quote-to-Invoice Pipeline",
      category: "Client Lifecycle",
      description:
        "Signed HubSpot quote automatically creates a QuickBooks invoice, updates the hours bank, and notifies the billing team.",
      hoursSaved: "20 min/use",
      tags: ["Agentic"],
    },
    {
      name: "Three-Tier Time Tracking Sync",
      category: "Data Synchronization",
      description:
        "Syncs all time entries from your PM tool to a structured data layer for reporting, analysis, and automation.",
      hoursSaved: "Foundation",
      tags: [],
    },
    {
      name: "Task SOP Violation Alerts",
      category: "Project Management",
      description:
        "Daily sweep surfaces tasks missing assignees, due dates, or estimates. Posts violations to Slack before they become problems.",
      hoursSaved: "30-45 min/day",
      tags: [],
    },
    {
      name: "Client Budget Enforcement",
      category: "Time & Billing",
      description:
        "Real-time alerts when a client approaches or exceeds their purchased hours, with automatic escalation to account managers.",
      hoursSaved: "Risk mitigation",
      tags: [],
    },
    {
      name: "AI Project Plan Generator",
      category: "AI-Powered Intelligence",
      description:
        "Reads a signed SOW and generates a structured project plan with tasks, milestones, and time estimates.",
      hoursSaved: "1-2 hrs/project",
      tags: ["AI-Powered"],
    },
    {
      name: "Blocked Task Due Date Manager",
      category: "Project Management",
      description:
        "Auto-extends due dates when tasks are blocked by client action, protecting SLAs and team morale.",
      hoursSaved: "20 min/day",
      tags: ["Agentic"],
    },
    {
      name: "2FA Code Relay",
      category: "Team Communication",
      description:
        "Routes two-factor authentication codes from client accounts to a shared Slack channel so anyone on the team can access them.",
      hoursSaved: "Risk mitigation",
      tags: [],
    },
    {
      name: "PM-to-Data Layer Nightly Sync",
      category: "Data Synchronization",
      description:
        "Syncs all tasks and time entries from your PM tool to the unified data layer every night, keeping reporting accurate.",
      hoursSaved: "Foundation",
      tags: [],
    },
  ] as AutomationCard[],
  summaryBar: {
    items: [
      { label: "Time & Billing", value: "112 hrs/mo" },
      { label: "AI Intelligence", value: "60 hrs/mo" },
      { label: "Data Sync", value: "30 hrs/mo" },
      { label: "Client Lifecycle", value: "31 hrs/mo" },
      { label: "Project Mgmt", value: "4 hrs/mo" },
    ],
    total: "230+ hrs/month saved",
  },
};

/* ─── Data Layer ─── */
export const dataLayer = {
  headline: "Before We Automate Anything, We Connect Your Data",
  subheadline: "Every automation depends on one thing: a single source of truth.",
  paragraphs: [
    "Right now, your agency's data lives in 8-12 different tools. Your PM tool knows who's working on what. Your accounting system knows who paid. Your CRM knows deal stages. But no single system can answer the question that actually matters:",
    "Getting that answer today means exporting data, reconciling spreadsheets, and hoping nothing was missed.",
    "Before a single automation runs, we connect your tools into one unified view. Every time entry traces back to a task, which traces to a client, which traces to purchased hours. That chain is what makes burn reports, budget alerts, utilization tracking, and every other automation possible.",
    "You never see or interact with the data layer directly. It runs in the background, stays in sync, and gives every automation a reliable foundation to work from.",
  ],
  pullQuote:
    "How many hours has this client used out of the hours they purchased?",
  stats: [
    { value: "8,500+", label: "tasks tracked" },
    { value: "12,500+", label: "time entries synced" },
    { value: "60+", label: "concurrent clients connected" },
  ],
  inputs: ["PM Tools", "RevOps Tools", "CRM", "Comms Tools"],
  outputs: ["Accurate Reports", "Reliable Automations", "AI That Works"],
};

/* ─── Stats ─── */
export const stats = {
  headline: "Production Numbers. Not Projections.",
  subheadline: "These are real metrics from our own agency operations.",
  items: [
    { value: 230, suffix: "+", label: "Hours saved per month", color: "green" },
    { value: 60, suffix: "+", label: "Concurrent clients served", color: "purple" },
    { value: 50, suffix: "+", label: "Production automations", color: "purple" },
    { value: 17, suffix: "+", label: "Years of agency operations", color: "blue-gray" },
    { value: 1.5, suffix: "", prefix: "~", label: "FTEs replaced by automation", color: "green" },
  ],
};

/* ─── Pricing ─── */
export const pricing = {
  headline: "Pay-As-You-Go. By the Hour.",
  subheadline: "Priced like a VA who never sleeps and always follows SOPs.",
  tiers: [
    {
      name: "Boutique Agency",
      hours: "50+ Hours/Month",
      price: "$10",
      unit: "/hour",
      minimum: "$500/month minimum",
      description: "Perfect for boutique agencies needing scaling support",
      features: ["Access All Workflows", "Pay-As-You-Go", "4-Month Commitment"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Mid-Size Agency",
      hours: "300+ Hours/Month",
      price: "$9",
      unit: "/hour",
      minimum: "$2,700/month minimum",
      description: "Built for growing agencies with more clients and higher demands",
      features: ["Access All Workflows", "Pay-As-You-Go", "4-Month Commitment"],
      cta: "Get Started",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Large Agency",
      hours: "600+ Hours/Month",
      price: "$8",
      unit: "/hour",
      minimum: "$4,800/month minimum",
      description: "For large agencies looking to drastically increase profit margins",
      features: ["Access All Workflows", "Pay-As-You-Go", "4-Month Commitment"],
      cta: "Get Started",
      highlighted: false,
    },
  ],
  explanation:
    "Every automation we run has a pre-measured \"hours saved\" value based on how long that work takes a person to do manually. Not estimates. Not projections. Actual timed manual work that the automation replaces. Your monthly investment = the total hours saved across all your active automations, multiplied by your per-hour rate.",
  roi: {
    headers: ["", "Boutique ($1M rev)", "Mid-Size ($3M rev)", "Large ($5M rev)"],
    rows: [
      { label: "Hours Saved/Month", values: ["191", "487", "776"] },
      { label: ".io Annual Investment", values: ["~$18,300", "~$46,800", "~$74,500"] },
      { label: "Cost If Done by Staff", values: ["~$153,000/yr", "~$390,000/yr", "~$621,000/yr"] },
      { label: "Net Annual Savings", values: ["~$135,000", "~$344,000", "~$548,000"] },
      { label: "ROI Multiple", values: ["8x", "8x", "8x"], highlight: true },
    ],
  },
};

/* ─── About ─── */
export const about = {
  headline: "Built Inside a Real Agency. Not a Lab.",
  paragraphs: [
    'Meticulosity.io is a product of Meticulosity, a white-label HubSpot agency founded in 2008 by David Ward. For 17+ years, we\'ve served as "The HubSpot Agency for Agencies," delivering HubSpot services invisibly under partner agency brands.',
    "In 2025, Meticulosity merged with Scitecs, the first HubSpot Solutions Partner in both Egypt and Saudi Arabia, to form Meticulosity Global, with teams across North America, UAE, Saudi Arabia, and Egypt.",
    "Every automation in the Meticulosity.io library was built because we hit the problem ourselves first. This isn't a product designed by people who think they know what agencies need. It's a product forged by people who've run one for nearly two decades.",
  ],
  credentials: [
    { icon: "Award", label: "HubSpot Platinum Partner" },
    { icon: "Calendar", label: "17+ Years in Operations" },
    { icon: "Briefcase", label: "5,800+ Projects Completed" },
    { icon: "Users", label: "60+ Concurrent Clients" },
    { icon: "Trophy", label: "Netty Award: Best Small Agency 2025" },
    { icon: "Star", label: "HubSpot Impact Awards Winner" },
  ],
};

/* ─── Final CTA ─── */
export const finalCta = {
  headline: "Stop Doing the Work Your Systems Should Be Doing",
  subheadline:
    "Book a free assessment. We'll map your tools, estimate your hours saved, and show you exactly what runs on day one.",
  cta: "Book a Free Assessment",
  finePrint:
    "No contracts to sign. No credit card required. Just a conversation about your operations.",
  reassurance: [
    "Free operational assessment",
    "Custom hours-saved estimate",
    "No commitment required",
  ],
};

/* ─── Footer ─── */
export const footer = {
  tagline: "A product of Meticulosity",
  location: "Vancouver, BC",
  columns: {
    product: {
      title: "Product",
      links: [
        { label: "What is .io", href: "/what-is-meticulosity-io" },
        { label: "Automation Catalog", href: "/automation-catalog" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { label: "About Meticulosity", href: "#about" },
        { label: "Meticulosity Global", href: "#about" },
        { label: "HubSpot Partner", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
  cta: "Book a Free Assessment",
  copyright: "\u00A9 2026 Meticulosity. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
