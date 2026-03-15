import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Automation Catalog | 24 Production Automations for Agencies | Meticulosity.io",
  description:
    "Browse 24 production automations running across agencies today: AI intelligence, time and billing, client lifecycle, and more.",
  openGraph: {
    title:
      "Automation Catalog | 24 Production Automations for Agencies | Meticulosity.io",
    description:
      "Browse 24 production automations running across agencies today: AI intelligence, time and billing, client lifecycle, and more.",
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
  return children;
}
