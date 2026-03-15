import type { Metadata } from "next";
import { Lexend, DM_Sans } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meticulosity.io"),
  title: "Meticulosity.io | Automation-as-a-Service Built for Agencies",
  description:
    "We automate agency operations so your team doesn't have to. 50+ production-tested automations saving 230+ hours/month.",
  openGraph: {
    title: "Meticulosity.io | Automation-as-a-Service Built for Agencies",
    description:
      "We automate agency operations so your team doesn't have to. 50+ production-tested automations saving 230+ hours/month.",
    type: "website",
    locale: "en_US",
    siteName: "Meticulosity.io",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meticulosity.io",
  url: "https://www.meticulosity.io",
  description:
    "Managed automation service for agencies. 50+ production-tested automations deployed across your existing stack.",
  foundingDate: "2009",
  founder: {
    "@type": "Person",
    name: "Dave Ward",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Meticulosity Enterprises Inc.",
  },
  sameAs: ["https://www.linkedin.com/company/meticulosity/"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Meticulosity.io",
  url: "https://www.meticulosity.io",
  description:
    "Automation-as-a-Service built for agencies. We plug into your existing tools and deploy production-tested automations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className={`${lexend.variable} ${dmSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:top-4 focus:left-4 focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
