import data from "./data/automation-catalog.json";

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

/* ─── Re-exports ─── */
export const catalogHero = data.catalogHero;
export const catalogOrientation = data.catalogOrientation;
export const categories = data.categories as Category[];
export const catalogSummary = data.catalogSummary;
export const catalogCta = data.catalogCta;
export const relatedPages = data.relatedPages;
export const catalogNav = data.catalogNav;
export const workflowLegend = data.workflowLegend as { type: StepType; label: string }[];
