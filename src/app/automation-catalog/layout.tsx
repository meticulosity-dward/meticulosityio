import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Automation Catalog | 24 Production Automations for Agencies | Meticulosity.io",
  description:
    "Browse our complete catalog of 24 production automations running across multiple agencies today. AI-powered intelligence, time and billing, client lifecycle, project management, and more. 230+ hours saved per month.",
  openGraph: {
    title:
      "Automation Catalog | 24 Production Automations for Agencies | Meticulosity.io",
    description:
      "Browse our complete catalog of 24 production automations running across multiple agencies today. AI-powered intelligence, time and billing, client lifecycle, project management, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Meticulosity.io",
  },
};

export default function AutomationCatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
