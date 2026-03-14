"use client";

import dynamic from "next/dynamic";
import WioNav from "@/components/what-is-io/wio-nav";
import WioHero from "@/components/what-is-io/wio-hero";
import Footer from "@/components/footer/footer";

const ThreeThings = dynamic(
  () => import("@/components/what-is-io/three-things"),
  { ssr: false }
);
const WioHowItWorks = dynamic(
  () => import("@/components/what-is-io/wio-how-it-works"),
  { ssr: false }
);
const DataLayerDeep = dynamic(
  () => import("@/components/what-is-io/data-layer-deep"),
  { ssr: false }
);
const FeaturedAutomations = dynamic(
  () => import("@/components/what-is-io/featured-automations"),
  { ssr: false }
);
const AiSection = dynamic(
  () => import("@/components/what-is-io/ai-section"),
  { ssr: false }
);
const NumbersSection = dynamic(
  () => import("@/components/what-is-io/numbers-section"),
  { ssr: false }
);
const ToolsGridSection = dynamic(
  () => import("@/components/what-is-io/tools-grid-section"),
  { ssr: false }
);
const WhatItsNot = dynamic(
  () => import("@/components/what-is-io/what-its-not"),
  { ssr: false }
);
const WioOriginStory = dynamic(
  () => import("@/components/what-is-io/wio-origin-story"),
  { ssr: false }
);
const FaqSection = dynamic(
  () => import("@/components/what-is-io/faq-section"),
  { ssr: false }
);
const WioFinalCta = dynamic(
  () => import("@/components/what-is-io/wio-final-cta"),
  { ssr: false }
);

export default function WhatIsMeticulosityIo() {
  return (
    <>
      <WioNav />
      <main id="main-content">
        <WioHero />
        <ThreeThings />
        <WioHowItWorks />
        <DataLayerDeep />
        <FeaturedAutomations />
        <AiSection />
        <NumbersSection />
        <ToolsGridSection />
        <WhatItsNot />
        <WioOriginStory />
        <FaqSection />
        <WioFinalCta />
      </main>
      <Footer />
    </>
  );
}
