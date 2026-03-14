import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "What Is Meticulosity.io | Automation-as-a-Service Built for Agencies",
  description:
    "We automate agency operations so your team doesn't have to. Learn how our managed automation service deploys 50+ production-tested automations across your existing tools.",
  openGraph: {
    title:
      "What Is Meticulosity.io | Automation-as-a-Service Built for Agencies",
    description:
      "We automate agency operations so your team doesn't have to. Learn how our managed automation service deploys 50+ production-tested automations across your existing tools.",
    type: "website",
    locale: "en_US",
    siteName: "Meticulosity.io",
  },
};

export default function WioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
