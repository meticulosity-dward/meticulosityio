/* ─── Automation Catalog Page Content ─── */

/* ─── Types ─── */
export type StepType =
  | "trigger"
  | "ai"
  | "slack"
  | "human"
  | "action"
  | "data"
  | "success";

export type WorkflowStep = {
  label: string;
  type: StepType;
};

export type Automation = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  featured: boolean;
  stat?: string;
  body: string;
  pain?: string;
  scale?: string;
  workflow: WorkflowStep[];
  systems: string[];
};

export type Category = {
  id: string;
  name: string;
  intro: string;
  automations: Automation[];
};

/* ─── Hero ─── */
export const catalogHero = {
  eyebrow: "The Full Automation Library",
  headline: "24 Live Automations. Every One Running Today.",
  subheadline:
    "This is the complete catalog of automations available through Meticulosity.io. Every workflow listed here runs live across multiple agencies right now. Each one was built because something broke, was forgotten, took too long, or cost too much when done manually.",
  stats: [
    { value: "24", label: "Live Automations" },
    { value: "6", label: "Categories" },
    { value: "230+", label: "Hours Saved Per Month" },
    { value: "13", label: "Agentic Workflows" },
  ],
  cta: "Book a Discovery Call",
  secondaryCta: "Not sure where to start? Take our Free Assessment",
};

/* ─── Orientation ─── */
export const catalogOrientation =
  "Each automation includes a plain-english description, a workflow diagram showing exactly what happens, and the systems involved. Automations tagged \"Agentic\" go beyond notifications: they take real action in your systems, creating records, updating tasks, sending emails, and blocking work. Non-agentic automations still run automatically, but their output is informational.";

/* ─── Categories ─── */
export const categories: Category[] = [
  /* ────────────────────────────────────────────
   * Category 1: AI-Powered Intelligence
   * ──────────────────────────────────────────── */
  {
    id: "ai-powered-intelligence",
    name: "AI-Powered Intelligence",
    intro:
      "Nine automations that embed AI directly into your workflows. No manual prompting. No copy-paste. No variance between team members. The AI runs inside the automation, producing consistent outcomes every time.",
    automations: [
      {
        id: "ai-call-transcript-processor",
        name: "AI Call Transcript Processor",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: true,
        stat: "10 to 30+ hours saved per month",
        body: "After every client call, the recording is transcribed and matched to the right client. AI cross-references the transcript against active tasks, identifies which tasks were discussed, extracts action items and deadlines, and writes a concise summary. That summary posts to Slack for team review. Once approved, every task discussed on the call gets a comment added automatically in your PM tool. Human oversight is built in before any action is taken.",
        pain: "After every client call, someone needs to write up notes, figure out which tasks were referenced, update the PM tool, and notify the right people. In practice, this almost never happens consistently. Action items slip through the cracks. At 20 clients averaging 2-3 calls per week, that's 40-60 calls per month with 15-30 minutes of manual follow-up each.",
        scale:
          "At 20 active clients, this replaces 10-30 hours per month of post-call administration. At 50 clients, it's 50-75 hours per month: nearly half a full-time hire dedicated to call recaps and task updates. This automation handles all of it within minutes of every call ending.",
        workflow: [
          { label: "Client Call Ends", type: "trigger" },
          { label: "Recording is Transcribed", type: "data" },
          { label: "Identify Which Client Was on the Call", type: "data" },
          { label: "Pull That Client's Active Task List", type: "data" },
          { label: "AI Analyzes the Full Transcript Against Tasks", type: "ai" },
          { label: "Summary Posted to Client Slack Channel", type: "slack" },
          { label: "Team Reviews AI Analysis", type: "human" },
          { label: "Tasks Automatically Updated with Call Notes", type: "action" },
        ],
        systems: ["Fireflies", "Airtable", "Claude AI", "ClickUp", "Slack"],
      },
      {
        id: "ai-work-order-triage",
        name: "AI Work Order Triage",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        stat: "15 to 20 hours saved per month",
        body: "When a work order is submitted, this automation sends the task details to four AI models simultaneously. Each model analyzes the submission from a different angle: checking documentation, identifying missing details, finding blocking gaps, and flagging edge cases. A synthesizer distills the results into the critical clarifying questions, posts them directly to the task, and notifies the team in Slack. Your team's first response is informed, not reactive.",
        workflow: [
          { label: "New Work Order Submitted", type: "trigger" },
          { label: "Task Sent to Four AI Models Simultaneously", type: "ai" },
          { label: "AI Synthesizer Distills the Critical Questions", type: "ai" },
          { label: "Questions Posted Directly to the Task", type: "action" },
          { label: "Team Notified in Slack", type: "slack" },
        ],
        systems: ["Perplexity", "ChatGPT", "Claude", "Gemini", "ClickUp", "Slack"],
      },
      {
        id: "ai-sales-meeting-intelligence",
        name: "AI Sales Meeting Intelligence Agent",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        stat: "90+ hours saved per month (at 5 reps)",
        body: "An autonomous AI agent that activates 20 minutes before every sales meeting. It searches the CRM for each attendee, pulls their contact history, company data, deal pipeline, and engagement timeline. It retrieves every call transcript your company has had with anyone at their company. It reads their live website for recent changes. Then AI synthesizes everything into a single intelligence briefing and delivers it to the rep's inbox before the call starts. If a contact isn't in the CRM, it generates a lighter briefing from available data. No rep walks into a meeting cold.",
        workflow: [
          { label: "Calendar Check: Meeting in 20 Minutes", type: "trigger" },
          { label: "Search CRM for Each Attendee", type: "data" },
          { label: "Pull Contact, Company, Deals, and Engagements", type: "data" },
          { label: "Retrieve Call Transcripts (Attendee and Company-Wide)", type: "data" },
          { label: "Read Live Company Website", type: "data" },
          { label: "AI Synthesizes Full Intelligence Briefing", type: "ai" },
          { label: "Rich Briefing Delivered to Inbox", type: "action" },
        ],
        systems: ["Google Calendar", "HubSpot", "Fireflies", "Claude AI", "Gmail"],
      },
      {
        id: "ai-lead-qualifier",
        name: "AI Lead Qualifier and Spam Filter",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        stat: "15 to 20 minutes saved per day",
        body: "Every web form submission is read by AI the moment it arrives. The AI classifies the lead against your ideal customer profile, then takes action: spam contacts and their associated companies are archived in the CRM automatically. Real leads are promoted to marketing qualified status. Uncertain submissions are flagged for manual review. The team gets a Slack notification with the verdict. Your CRM stays clean without anyone reviewing bounce reports or filtering junk leads manually.",
        workflow: [
          { label: "Web Form Submitted", type: "trigger" },
          { label: "Contact Data Extracted", type: "data" },
          { label: "AI Reads and Classifies the Lead", type: "ai" },
          { label: "Spam: Contact and Company Archived", type: "action" },
          { label: "Real Lead: Promoted to Marketing Qualified", type: "action" },
          { label: "Uncertain: Sent for Manual Review", type: "human" },
          { label: "Team Notified in Slack", type: "slack" },
        ],
        systems: ["HubSpot", "Claude", "Slack"],
      },
      {
        id: "ai-contact-enrichment",
        name: "AI Contact Enrichment Engine",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        stat: "10 to 20 minutes saved per contact",
        body: "Takes a spreadsheet of company names and websites and turns it into a contact-ready prospect database overnight. For each company, AI researches the CEO or owner, finding their full name, title, email address, and LinkedIn profile. Enriched data is written directly back to the spreadsheet. What used to take a researcher 10-20 minutes per company now runs in a batch across hundreds of records.",
        workflow: [
          { label: "Prospect Spreadsheet with Company Names", type: "trigger" },
          { label: "Filter for Unprocessed Companies", type: "data" },
          { label: "AI Researches Each CEO/Owner", type: "ai" },
          { label: "Clean and Structure the Response", type: "data" },
          { label: "Write Contact Data Back to Spreadsheet", type: "action" },
        ],
        systems: ["Google Sheets", "Perplexity"],
      },
      {
        id: "ai-comment-approval",
        name: "AI Comment Approval Workflow",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        body: "When AI generates a suggested comment for a project task, this workflow delivers it to Slack with approve and edit buttons. A team member reviews the AI's work and either approves it as-is or opens an edit window to refine it. The approved or edited comment is posted directly to the correct task in your PM tool. AI-generated content only lands in your systems after a human says \"go.\"",
        workflow: [
          { label: "AI Generates a Suggested Task Comment", type: "ai" },
          { label: "Comment Delivered to Slack with Buttons", type: "slack" },
          { label: "Team Member Reviews the Comment", type: "human" },
          { label: "Approve or Edit the Comment", type: "human" },
          { label: "Comment Posted Directly to Task", type: "action" },
        ],
        systems: ["Slack", "ClickUp"],
      },
      {
        id: "autonomous-blog-engine",
        name: "Autonomous Blog Engine",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        body: "Turns a spreadsheet of blog topics into fully researched, formatted, and publish-ready articles. For each topic, AI conducts research and writes a complete article. The output is cleaned and formatted, then published as a draft to your CMS. A translated version (Arabic or any target language) is generated simultaneously and saved alongside the original. Dozens of review-ready posts from a single batch run.",
        workflow: [
          { label: "Content Calendar Loaded from Spreadsheet", type: "trigger" },
          { label: "Each Topic Processed Individually", type: "data" },
          { label: "AI Researches and Writes Complete Article", type: "ai" },
          { label: "Output Cleaned and Formatted", type: "data" },
          { label: "Published as Draft to CMS", type: "action" },
          { label: "AI Translates Complete Article", type: "ai" },
          { label: "Translated Version Saved", type: "action" },
        ],
        systems: ["Google Sheets", "Perplexity", "Google Docs", "HubSpot", "GPT"],
      },
      {
        id: "multi-ai-qa-checklist",
        name: "Multi-AI QA Checklist Generator",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        stat: "5 to 16 hours saved per month",
        body: "When a task is completed and ready for QA, this workflow sends the task details to four AI models simultaneously. Each model generates verification steps from a different perspective: best practices, step-by-step checks, edge cases, and additional validations. A synthesizer combines the best of all four into one definitive QA checklist, posts it directly to the task as a comment, and notifies the team. Your team knows exactly what to check before marking anything done.",
        workflow: [
          { label: "Task Completed, Ready for QA", type: "trigger" },
          { label: "Task Details Sent to Four AI Models", type: "ai" },
          { label: "AI Synthesizer Creates One Definitive Checklist", type: "ai" },
          { label: "QA Checklist Posted Directly to Task", type: "action" },
          { label: "Team Notified in Slack", type: "slack" },
        ],
        systems: ["Perplexity", "ChatGPT", "Claude AI", "Gemini", "ClickUp", "Slack"],
      },
      {
        id: "multi-ai-solution-builder",
        name: "Multi-AI Solution Builder",
        category: "AI-Powered Intelligence",
        tags: ["AI-Powered Intelligence", "Agentic"],
        featured: false,
        body: "When a task needs implementation instructions, this workflow consults four AI models simultaneously. Each model approaches the problem differently: one searches the latest documentation, another provides step-by-step guidance, a third analyzes technical requirements, and the fourth offers alternative approaches. A synthesizer combines the best recommendations into a single authoritative answer and writes the instructions directly into the task. Your team opens the task and the \"how\" is already there.",
        workflow: [
          { label: "New Task Needs Implementation Instructions", type: "trigger" },
          { label: "Task Sent to Four AI Models Simultaneously", type: "ai" },
          { label: "AI Synthesizer Combines the Best of All Four", type: "ai" },
          { label: "Instructions Written Directly to Task", type: "action" },
          { label: "Team Notified in Slack", type: "slack" },
        ],
        systems: ["Perplexity", "ChatGPT", "Claude AI", "Gemini", "ClickUp", "Slack"],
      },
    ],
  },
  /* ────────────────────────────────────────────
   * Category 2: Time and Billing
   * ──────────────────────────────────────────── */
  {
    id: "time-and-billing",
    name: "Time and Billing",
    intro:
      "Four automations that protect agency margins by keeping time data accurate, reports flowing, and budgets enforced. These are the workflows that replace the Friday afternoon grind and the end-of-month reconciliation marathon. At Meticulosity, this category alone saves over 110 hours per month.",
    automations: [
      {
        id: "client-burn-reports",
        name: "Client Burn Reports",
        category: "Time and Billing",
        tags: ["Time and Billing", "Agentic"],
        featured: true,
        stat: "6 to 12+ hours saved per week",
        body: "Automatically generates personalized burn reports for every active client on two schedules. Weekly summaries go out every Friday. Monthly reports go out at end-of-month. Each report is generated from the data layer, formatted into a clean spreadsheet, archived in Google Drive with standardized naming, and delivered directly to the client by email. Nobody touches a spreadsheet. Nobody composes an email. The system handles full delivery, from data to inbox, for every client, every cycle.",
        pain: "Someone on your team spends every Friday afternoon grinding through query, export, format, email, repeat. When that person is out sick, the reports don't go out. Clients notice, and they start wondering what else is being missed.",
        scale:
          "At 15 clients, manual burn reporting takes roughly 4-5 hours every Friday plus a full day at month-end. At 30 clients, it's 8-10 hours per week. At Meticulosity's scale (60+ clients), this automation saves over 15 hours per week. That's 60+ hours per month returned to your team.",
        workflow: [
          { label: "Scheduled Trigger (Weekly or Monthly)", type: "trigger" },
          { label: "Pull Active Clients from Data Layer", type: "data" },
          { label: "For Each Client: Query Their Time Data", type: "data" },
          { label: "Generate Formatted Report", type: "data" },
          { label: "Archive Report in Google Drive", type: "action" },
          { label: "Deliver Report Directly to Client", type: "action" },
        ],
        systems: ["Airtable", "Google Drive", "Gmail"],
      },
      {
        id: "client-budget-enforcement",
        name: "Client Budget Enforcement",
        category: "Time and Billing",
        tags: ["Time and Billing", "Agentic"],
        featured: false,
        body: "Monitors every client's hour utilization against their purchased budget on a schedule. When a client approaches their limit, the team gets an early warning in Slack. When a client exceeds their limit, the system fires an urgent alert AND automatically changes every active task for that client to BILLING BLOCKED, stopping unauthorized work before it accrues. The team doesn't discover overages at end-of-month. The system catches them in real time and takes action.",
        workflow: [
          { label: "Scheduled Utilization Check", type: "trigger" },
          { label: "Check Every Client's Hours vs. Budget", type: "data" },
          { label: "Approaching Limit: Warning Posted to Slack", type: "slack" },
          { label: "Over Limit: Urgent Alert to Slack", type: "slack" },
          { label: "Find All Active Tasks for This Client", type: "data" },
          { label: "Set Each Task to BILLING BLOCKED", type: "action" },
        ],
        systems: ["Airtable", "Slack", "ClickUp"],
      },
      {
        id: "three-tier-time-sync",
        name: "Time Tracking Sync",
        category: "Time and Billing",
        tags: ["Time and Billing"],
        featured: false,
        body: "An automated sync that keeps your billing database perfectly aligned with your time tracking. Daily syncs catch new entries. Weekly sweeps catch edits from the last 30 days. A monthly sweep covers the last 90 days to guarantee nothing was missed. For every entry, the system checks whether it already exists: existing entries are updated, new entries are created. Your time data is always accurate, complete, and ready for reporting.",
        workflow: [
          { label: "Daily Sync: Pulls Last 2-3 Days", type: "trigger" },
          { label: "Weekly Reconciliation: Pulls Last 30 Days", type: "trigger" },
          { label: "Monthly Sweep: Pulls Last 90 Days", type: "trigger" },
          { label: "For Each Entry: Search for Existing Match", type: "data" },
          { label: "Existing Entry: Update the Record", type: "action" },
          { label: "New Entry: Create a New Record", type: "action" },
        ],
        systems: ["ClickUp", "Airtable"],
      },
      {
        id: "time-entry-audit-export",
        name: "Time Entry Audit Export",
        category: "Time and Billing",
        tags: ["Time and Billing"],
        featured: false,
        body: "A reconciliation utility that pulls every time entry from your PM tool for a given period and writes them to a spreadsheet. Each entry includes the task, duration, team member, and full project hierarchy. The result is a flat, auditable record of all tracked time for verification, client review, or billing disputes. When a client questions an invoice or the finance team needs raw data, the answer is one export away.",
        workflow: [
          { label: "Scheduled Run or Manual Trigger", type: "trigger" },
          { label: "Set Date Range for Export Period", type: "data" },
          { label: "Pull All Time Entries from PM Tool", type: "data" },
          { label: "Extract: ID, Task, Duration, Space, Folder, List, User", type: "data" },
          { label: "Write Row to Google Sheet", type: "action" },
        ],
        systems: ["ClickUp", "Google Sheets"],
      },
    ],
  },
  /* ────────────────────────────────────────────
   * Category 3: Client Lifecycle
   * ──────────────────────────────────────────── */
  {
    id: "client-lifecycle",
    name: "Client Lifecycle",
    intro:
      "Four automations that cover the full arc from prospect to paying client. Quote tracking, proposal-to-invoice conversion, zero-touch onboarding, and real-time visitor outreach. These workflows ensure that nothing falls through the cracks between \"interested\" and \"fully operational.\"",
    automations: [
      {
        id: "new-client-onboarding",
        name: "New Client Onboarding",
        category: "Client Lifecycle",
        tags: ["Client Lifecycle", "Agentic"],
        featured: true,
        stat: "3.5 hours saved per client",
        body: "Fires the instant a client signs a proposal, setting up their entire operational footprint across nine systems in under a minute. CRM records are updated with closed-won status and renewal reminders. Google Drive gets a 12-folder structure with the signed proposal and onboarding decks copied in. Your PM tool gets a project folder, task lists, and starter tasks generated from templates. A dedicated Slack channel is created. QuickBooks gets a customer record with billing details. The capacity planning database is updated. Calendar events are scheduled for experience check-ins and the one-year anniversary. The setup is routed by client type: agency clients and end-clients each get a tailored configuration. 23 setup steps across 9 systems. Nothing is missed. Nothing is late. Nothing depends on memory.",
        pain: "Client onboarding is one of the first places agencies drop the ball at scale. The PM creates the folder but forgets the billing record. Finance sets up QuickBooks but nobody told them the start date. The Slack channel gets created two weeks late. When you're onboarding 4-6 clients per month, the manual setup work alone eats a full day, and missed steps mean the project starts on the wrong foot.",
        scale:
          "At 2 new clients per month, this saves 4-8 hours and eliminates missed steps. At 5 clients per month, it saves 10-20 hours and replaces what would require a dedicated onboarding coordinator. At 10 or more per month, it's the only way to maintain quality without adding headcount.",
        workflow: [
          { label: "Client Signs Proposal", type: "trigger" },
          { label: "Extract Client Data from PandaDoc + HubSpot", type: "data" },
          { label: "Route by Client Type", type: "data" },
          { label: "HubSpot: Deal Closed + Renewal Reminders", type: "action" },
          { label: "Google Drive: 12 Folders + Signed PDF", type: "action" },
          { label: "ClickUp: Folder + Lists + Starter Tasks", type: "action" },
          { label: "Slack: Client Channel Created", type: "action" },
          { label: "QuickBooks: Customer Record + Billing", type: "action" },
          { label: "Airtable: Client Records Logged", type: "action" },
        ],
        systems: [
          "PandaDoc",
          "HubSpot",
          "ClickUp",
          "Google Drive",
          "Google Slides",
          "Google Calendar",
          "Slack",
          "QuickBooks",
          "Airtable",
        ],
      },
      {
        id: "quote-to-invoice",
        name: "Automated Quote-to-Invoice Pipeline",
        category: "Client Lifecycle",
        tags: ["Client Lifecycle", "Agentic"],
        featured: false,
        body: "Fires the moment a client signs a quote. The automation extracts deal details and line items, matches each line item to the correct product in your accounting system, generates an invoice automatically, emails it directly to the client, logs everything to the billing database, and notifies the team in Slack. The gap between signature and payment shrinks from days to minutes. At 40 deals per quarter, this eliminates 16+ hours of manual invoice processing and accelerates cash flow across every deal.",
        workflow: [
          { label: "Client Signs Quote in HubSpot", type: "trigger" },
          { label: "Extract Deal Details and Line Items", type: "data" },
          { label: "Match Each Line Item to QuickBooks Products", type: "data" },
          { label: "Generate QuickBooks Invoice Automatically", type: "action" },
          { label: "Email Invoice Directly to Client", type: "action" },
          { label: "Log Invoice in Airtable", type: "action" },
          { label: "Notify Team in Slack", type: "slack" },
        ],
        systems: ["HubSpot", "QuickBooks", "Airtable", "Slack"],
      },
      {
        id: "quote-created-tracker",
        name: "Quote Created Tracker",
        category: "Client Lifecycle",
        tags: ["Client Lifecycle"],
        featured: false,
        body: "Fires the moment a new quote is created in HubSpot. The automation extracts the deal details, including client name, hours, and price, determines whether it's a block-of-hours or retainer deal, and logs it to the capacity planning database. The team gets a Slack notification with the quote details and status. Upcoming work is visible before the client even signs. At 30 quotes per month, that's 30 database entries and 30 notifications the team never has to remember to make.",
        workflow: [
          { label: "Quote Created in HubSpot", type: "trigger" },
          { label: "Extract Deal Details: Client, Hours, Price", type: "data" },
          { label: "Determine Deal Type (Block or Retainer)", type: "data" },
          { label: "Log to Capacity Planning Database", type: "action" },
          { label: "Notify Slack: Quote Details + Status", type: "slack" },
        ],
        systems: ["HubSpot", "Airtable", "Slack"],
      },
      {
        id: "anonymous-visitor-outreach",
        name: "Anonymous Visitor Instant Outreach",
        category: "Client Lifecycle",
        tags: ["Client Lifecycle", "Agentic"],
        featured: false,
        body: "Detects the moment an agency prospect visits your website, instantly sends a personalized email from the sales rep's actual email account, and logs every outreach to HubSpot automatically. The prospect gets a personal message before they've even closed the browser tab. No list building. No batch sends. No delay between interest and engagement.",
        workflow: [
          { label: "Website Visitor Identified", type: "trigger" },
          { label: "Personalized Email Sent from Rep's Gmail", type: "action" },
          { label: "Auto-Logged to HubSpot CRM", type: "action" },
        ],
        systems: ["RB2B", "Gmail", "HubSpot"],
      },
    ],
  },
  /* ────────────────────────────────────────────
   * Category 4: Project Management
   * ──────────────────────────────────────────── */
  {
    id: "project-management",
    name: "Project Management",
    intro:
      "Three automations that enforce standards, enrich tasks, and protect your data quality. These are the workflows that catch what humans miss: overdue tasks, missing estimates, stale assignments, and incomplete task configurations. They run every day so your team starts every morning knowing exactly what needs attention.",
    automations: [
      {
        id: "daily-task-audit",
        name: "Daily Task Audit",
        category: "Project Management",
        tags: ["Project Management"],
        featured: true,
        stat: "30 to 45 minutes saved per day",
        body: "Runs six parallel checks against every active task in the system each morning. It surfaces overdue tasks, tasks due tomorrow, tasks that have gone 7+ days without activity, tasks with no assignee, tasks with no due date, and tasks with no time estimate. Each violation is posted to the appropriate client Slack channel so the team starts every day knowing exactly what's broken and what needs attention.\n\nThe six checks form two layers. The deadline layer (overdue, due tomorrow, decaying) answers: what needs my attention today? The process layer (no assignee, no due date, no time estimate) answers: what's wrong with the data? Fix the process violations and you get fewer deadline violations over time. These automations reinforce each other: the audit ensures data quality, and the budget enforcement automation uses that clean data to protect margins.",
        scale:
          "At 8 clients, that's 48 manual checks every morning. At 15 clients, it's 90. At 30, it's 180. At 50, it's 300 checks per day, every day, without fail. No human being can sustain that.",
        workflow: [
          { label: "Scheduled Morning Run", type: "trigger" },
          { label: "Run 6 Checks Across All Active Tasks", type: "data" },
          { label: "Overdue Tasks", type: "data" },
          { label: "Due Tomorrow", type: "data" },
          { label: "Decaying: 7+ Days Stale", type: "data" },
          { label: "No Assignee / No Due Date / No Estimate", type: "data" },
          { label: "Slack Alert to Client Channel", type: "slack" },
        ],
        systems: ["Airtable", "Slack"],
      },
      {
        id: "sku-task-enrichment",
        name: "SKU-Driven Task Enrichment",
        category: "Project Management",
        tags: ["Project Management", "Agentic"],
        featured: false,
        body: "The instant a work deliverable is selected on a task, this automation looks it up in a master service catalog and writes the matching configuration directly to the task: time estimate, department assignment, skill tier, process documentation link, and a step-by-step checklist. Every assignment arrives fully configured without anyone copying and pasting from a reference sheet. If the deliverable isn't found in the catalog, the team gets an alert so the gap can be addressed.",
        workflow: [
          { label: "Deliverable Selected on Task", type: "trigger" },
          { label: "Look Up in Master Catalog", type: "data" },
          { label: "Found: Update Task with Estimate, Department, SOP, Checklist", type: "action" },
          { label: "Not Found: Alert Team", type: "slack" },
        ],
        systems: ["ClickUp", "Airtable", "Slack"],
      },
      {
        id: "blocked-task-due-date",
        name: "Blocked Task Due Date Manager",
        category: "Project Management",
        tags: ["Project Management", "Agentic"],
        featured: false,
        body: "Every day, this automation finds every task stuck in \"Client Blocked\" status and pushes its due date forward by one day. This prevents false overdue counts from piling up when the bottleneck is on the client's side, not yours. Your overdue reports stay accurate. Your team stops wasting time triaging tasks they can't act on. When the client responds and the task moves out of blocked status, the due date reflects reality.",
        workflow: [
          { label: "Daily Schedule Trigger", type: "trigger" },
          { label: "Pull All Tasks in Client Blocked Status", type: "data" },
          { label: "Calculate Tomorrow's Date", type: "data" },
          { label: "Update Due Date in PM Tool", type: "action" },
          { label: "Task Shows Upcoming, Not Overdue", type: "success" },
        ],
        systems: ["Airtable", "ClickUp"],
      },
    ],
  },
  /* ────────────────────────────────────────────
   * Category 5: Data Synchronization
   * ──────────────────────────────────────────── */
  {
    id: "data-synchronization",
    name: "Data Synchronization",
    intro:
      "Two automations that keep your systems aligned and your data clean. These are the foundation workflows that other automations depend on. Without reliable sync, burn reports show stale numbers and budget enforcement misses entries. These workflows make sure that never happens.",
    automations: [
      {
        id: "clickup-airtable-sync",
        name: "ClickUp-to-Airtable Task Sync",
        category: "Data Synchronization",
        tags: ["Data Synchronization"],
        featured: false,
        body: "An automated sync that mirrors every task from your PM tool into your reporting database. A daily sync catches new and updated tasks from the last 2 days, extracting the full context: assignees, custom fields, dates, and project hierarchy. An end-of-month sweep covers the last 30 days to guarantee nothing was missed. For each task, the system checks whether it already exists: existing records are updated, new records are created. Your project data is always queryable, reportable, and trustworthy.",
        workflow: [
          { label: "Daily Sync Runs Every Day", type: "trigger" },
          { label: "End-of-Month Sweep Runs on Last Day", type: "trigger" },
          { label: "Pull New and Updated Tasks", type: "data" },
          { label: "Extract Full Context: Assignees, Fields, Dates, Hierarchy", type: "data" },
          { label: "Existing Task: Update the Record", type: "action" },
          { label: "New Task: Create a New Record", type: "action" },
        ],
        systems: ["ClickUp", "Airtable"],
      },
      {
        id: "bounced-email-cleaner",
        name: "Bounced Email Auto-Cleaner",
        category: "Data Synchronization",
        tags: ["Data Synchronization", "Agentic"],
        featured: false,
        body: "Intercepts email bounce notifications the moment they arrive. The automation extracts the failed email address from the bounce message, logs it to a tracking spreadsheet for records, then finds the contact in HubSpot and deletes it. Your CRM stays clean without anyone manually reviewing bounce reports. At scale, this is the difference between a CRM that decays quietly and one that cleans itself.",
        workflow: [
          { label: "Bounce Notification Arrives via Email", type: "trigger" },
          { label: "Failed Email Address Extracted", type: "data" },
          { label: "Bounced Address Logged to Google Sheet", type: "data" },
          { label: "Contact Found in HubSpot", type: "data" },
          { label: "Contact Deleted from HubSpot", type: "action" },
        ],
        systems: ["Email", "Google Sheets", "HubSpot"],
      },
    ],
  },
  /* ────────────────────────────────────────────
   * Category 6: Team Communication
   * ──────────────────────────────────────────── */
  {
    id: "team-communication",
    name: "Team Communication",
    intro:
      "Two automations that make sure every client action is visible to your team in real time, without anyone monitoring multiple dashboards or sharing codes over DM.",
    automations: [
      {
        id: "client-activity-alerts",
        name: "Real-Time Client Activity Alerts",
        category: "Team Communication",
        tags: ["Team Communication"],
        featured: false,
        body: "A pair of lightweight automations that relay client actions directly to the team's Slack channels the moment they happen. When a client comments on a task, the alert includes the task name, status, and due date. When a white-label client submits a work order, the submission details post to the appropriate channel immediately. Every external action is visible without anyone checking dashboards or refreshing inboxes.",
        workflow: [
          { label: "Client Comments on Task or Submits Work Order", type: "trigger" },
          { label: "Extract Task Details: Name, Status, Due Date", type: "data" },
          { label: "Post Alert to Client Slack Channel", type: "slack" },
        ],
        systems: ["ClickUp", "Slack"],
      },
      {
        id: "2fa-code-relay",
        name: "2FA Code Relay to Slack",
        category: "Team Communication",
        tags: ["Team Communication"],
        featured: false,
        body: "A utility workflow that captures incoming two-factor authentication codes and instantly posts them to a shared Slack channel. When your team shares logins for tools, platforms, or client accounts, nobody needs to interrupt a colleague for a six-digit number. The code arrives in Slack within seconds. Small per-event, but the compounding effect across every shared account, every day, across your entire team eliminates a constant source of friction and context-switching.",
        workflow: [
          { label: "2FA Code Sent via SMS", type: "trigger" },
          { label: "SMS Forwarded to Email", type: "data" },
          { label: "Email Captured by Automation", type: "data" },
          { label: "Verification Code Extracted", type: "data" },
          { label: "Code Posted to Slack Channel", type: "slack" },
        ],
        systems: ["Email", "Slack"],
      },
    ],
  },
];

/* ─── Summary ─── */
export const catalogSummary = {
  headline: "What This Adds Up To",
  intro:
    "Each automation saves time on its own. Together, they compound. When your burn reports run on clean time data (from the time tracking sync), and your budget enforcement runs on accurate utilization (from the same data layer), and your daily audit catches the data quality issues that would break both of those systems, you don't have 24 separate automations. You have an operating system.",
  table: [
    {
      category: "AI-Powered Intelligence",
      count: 9,
      capabilities:
        "Call transcript processing, work order triage, sales meeting prep, lead qualification, contact enrichment, QA checklists, solution building, content generation, comment approval",
    },
    {
      category: "Time and Billing",
      count: 4,
      capabilities:
        "Burn reports, budget enforcement, time tracking sync, audit exports",
    },
    {
      category: "Client Lifecycle",
      count: 4,
      capabilities:
        "Automated onboarding, quote-to-invoice, quote tracking, visitor outreach",
    },
    {
      category: "Project Management",
      count: 3,
      capabilities:
        "Daily task audits, task enrichment, blocked task management",
    },
    {
      category: "Data Synchronization",
      count: 2,
      capabilities: "Task sync, CRM hygiene",
    },
    {
      category: "Team Communication",
      count: 2,
      capabilities: "Client activity alerts, 2FA relay",
    },
  ],
  total: {
    count: 24,
    label: "230+ hours saved per month at Meticulosity",
  },
  benchmark:
    "At Meticulosity, we run this exact system across 60+ agency clients. It saves over 230 hours of manual work every month: the equivalent of 1.5 full-time hires, running around the clock. We're a boutique firm. If these results are possible at our scale, the impact for a larger agency would be significantly higher.",
};

/* ─── CTA ─── */
export const catalogCta = {
  headline: "We'll Tell You Which Automations Hit First",
  body: "You don't need all 24 on day one. Most agencies start with 5-8 high-impact automations and expand from there. During discovery, we map your tools, your pain points, and your team structure to identify which automations will make the biggest difference fastest. You'll see measurable results within weeks.",
  primaryCta: "Book a Discovery Call",
  secondaryCta: "Take the Free Assessment",
  finePrint:
    "Every automation in this catalog runs live today across multiple agencies.",
};

/* ─── Related Pages ─── */
export const relatedPages = [
  {
    title: "What is Meticulosity.io?",
    description:
      "How the service works, the data layer, and the full value proposition",
    href: "/what-is-meticulosity-io",
  },
  {
    title: "Pricing",
    description:
      "Tiered pricing based on hours saved, commitment options, and ROI projections",
    href: "/#pricing",
  },
  {
    title: "About Us",
    description: "The team, the history, and why we built this",
    href: "/#about",
  },
  {
    title: "Free Assessment",
    description:
      "Find out which automations would make the biggest difference for your agency",
    href: "#contact",
  },
];

/* ─── Nav ─── */
export const catalogNav = {
  links: [
    { label: "AI Intelligence", href: "#ai-powered-intelligence" },
    { label: "Time & Billing", href: "#time-and-billing" },
    { label: "Client Lifecycle", href: "#client-lifecycle" },
    { label: "Project Mgmt", href: "#project-management" },
    { label: "Data Sync", href: "#data-synchronization" },
    { label: "Communication", href: "#team-communication" },
  ],
  cta: "Book a Discovery Call",
};

/* ─── Workflow Legend ─── */
export const workflowLegend = [
  { type: "trigger" as StepType, label: "Trigger" },
  { type: "ai" as StepType, label: "AI Processing" },
  { type: "data" as StepType, label: "Data Operation" },
  { type: "human" as StepType, label: "Human Review" },
  { type: "slack" as StepType, label: "Slack Notification" },
  { type: "action" as StepType, label: "Action Taken" },
  { type: "success" as StepType, label: "Result" },
];
