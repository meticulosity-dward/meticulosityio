import type { Metadata } from "next";
import { Lexend, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BookingProvider } from "@/components/ui/booking-modal";
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
  title: "Meticulosity.io | Managed Agency Automation Service",
  description:
    "Agency workflow automation as a managed service. 50+ production-tested automations for time tracking, billing, onboarding, and operations across ClickUp, HubSpot, and your existing stack. Saving 230+ hours/month.",
  openGraph: {
    title: "Meticulosity.io | Managed Agency Automation Service",
    description:
      "Agency workflow automation as a managed service. 50+ production-tested automations for time tracking, billing, onboarding, and operations across ClickUp, HubSpot, and your existing stack. Saving 230+ hours/month.",
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
    "Managed agency workflow automation service. 50+ production-tested automations for time tracking, billing, onboarding, and operations deployed across ClickUp, HubSpot, Slack, and your existing stack.",
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
    "Agency workflow automation as a managed service. We plug into your existing tools and deploy production-tested automations for time tracking, billing, onboarding, and operations.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meticulosity.io Managed Automation Service",
  serviceType: "Agency Workflow Automation",
  description:
    "Managed agency operations automation service with 50+ production-tested workflow automations for time tracking, billing, client onboarding, AI-powered triage, and project management across ClickUp, HubSpot, Slack, and QuickBooks.",
  provider: {
    "@type": "Organization",
    name: "Meticulosity Enterprises Inc.",
    url: "https://meticulosity.com",
  },
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    description: "Pay-as-you-go hourly pricing starting at $8/hr",
    priceCurrency: "USD",
  },
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
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGHGC7T3');`,
          }}
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
      </head>
      <body className={`${lexend.variable} ${dmSans.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGHGC7T3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:top-4 focus:left-4 focus:rounded"
        >
          Skip to content
        </a>
        <BookingProvider>{children}</BookingProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
