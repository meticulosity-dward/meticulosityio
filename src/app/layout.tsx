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
  title: "Meticulosity.io | Automation-as-a-Service Built for Agencies",
  description:
    "We automate agency operations so your team doesn't have to. 50+ production-tested automations deployed across your existing stack, saving 230+ hours of manual work every month.",
  openGraph: {
    title: "Meticulosity.io | Automation-as-a-Service Built for Agencies",
    description:
      "We automate agency operations so your team doesn't have to. 50+ production-tested automations deployed across your existing stack, saving 230+ hours of manual work every month.",
    type: "website",
    locale: "en_US",
    siteName: "Meticulosity.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
