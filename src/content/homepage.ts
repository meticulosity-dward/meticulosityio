import data from "./data/homepage.json";

/* ─── Types ─── */
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

/* ─── Re-exports ─── */
export const nav = data.nav;
export const hero = data.hero;
export const logoStrip = data.logoStrip;
export const painPoints = data.painPoints;
export const positioning = data.positioning;
export const howItWorks = data.howItWorks;
export const originStory = data.originStory;
export const automationShowcase = data.automationShowcase as {
  headline: string;
  subheadline: string;
  categories: AutomationCategory[];
  cards: AutomationCard[];
  summaryBar: {
    items: { label: string; value: string }[];
    total: string;
  };
};
export const dataLayer = data.dataLayer;
export const stats = data.stats;
export const pricing = data.pricing;
export const about = data.about;
export const finalCta = data.finalCta;
export const footer = data.footer;
