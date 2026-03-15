import type { Metadata } from "next";
import { FaqSchema } from "@/components/shared/faq-schema";
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema";
import { faq } from "@/content/what-is-meticulosity-io";

export const metadata: Metadata = {
  title:
    "What Is Meticulosity.io | Agency Operations Automation as a Managed Service",
  description:
    "Managed agency workflow automation that deploys 50+ production-tested automations across ClickUp, HubSpot, Slack, and your existing tools. No workflows to build or maintain.",
  openGraph: {
    title:
      "What Is Meticulosity.io | Agency Operations Automation as a Managed Service",
    description:
      "Managed agency workflow automation that deploys 50+ production-tested automations across ClickUp, HubSpot, Slack, and your existing tools. No workflows to build or maintain.",
    type: "website",
    locale: "en_US",
    siteName: "Meticulosity.io",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function WioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "What Is Meticulosity.io", href: "/what-is-meticulosity-io" }]} />
      <FaqSchema
        items={faq.items.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />
      {children}
    </>
  );
}
