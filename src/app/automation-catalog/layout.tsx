import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema";

export const metadata: Metadata = {
  title:
    "Agency Automation Catalog | 24 Production Workflow Automations | Meticulosity.io",
  description:
    "Browse 24 agency workflow automations running in production today: AI-powered triage, time tracking, billing, client onboarding, and operations across ClickUp, HubSpot, and Slack.",
  openGraph: {
    title:
      "Agency Automation Catalog | 24 Production Workflow Automations | Meticulosity.io",
    description:
      "Browse 24 agency workflow automations running in production today: AI-powered triage, time tracking, billing, client onboarding, and operations across ClickUp, HubSpot, and Slack.",
    type: "website",
    locale: "en_US",
    siteName: "Meticulosity.io",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AutomationCatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Automation Catalog", href: "/automation-catalog" }]} />
      {children}
    </>
  );
}
