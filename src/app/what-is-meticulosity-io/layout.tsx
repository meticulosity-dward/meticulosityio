import type { Metadata } from "next";
import { FaqSchema } from "@/components/shared/faq-schema";
import { faq } from "@/content/what-is-meticulosity-io";

export const metadata: Metadata = {
  title:
    "What Is Meticulosity.io | Automation-as-a-Service Built for Agencies",
  description:
    "Learn how our managed automation service deploys 50+ production-tested automations across your existing tools. No workflows to build.",
  openGraph: {
    title:
      "What Is Meticulosity.io | Automation-as-a-Service Built for Agencies",
    description:
      "Learn how our managed automation service deploys 50+ production-tested automations across your existing tools. No workflows to build.",
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
