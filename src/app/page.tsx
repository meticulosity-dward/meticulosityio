"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/nav/nav";
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer/footer";

const LogoStrip = dynamic(() => import("@/components/logo-strip/logo-strip"), { ssr: false });
const PainPoints = dynamic(() => import("@/components/pain-points/pain-points"), { ssr: false });
const Positioning = dynamic(() => import("@/components/positioning/positioning"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/how-it-works/how-it-works"), { ssr: false });
const OriginStory = dynamic(() => import("@/components/origin-story/origin-story"), { ssr: false });
const Automations = dynamic(() => import("@/components/automations/automations"), { ssr: false });
const DataLayer = dynamic(() => import("@/components/data-layer/data-layer"), { ssr: false });
const Stats = dynamic(() => import("@/components/stats/stats"), { ssr: false });
const Pricing = dynamic(() => import("@/components/pricing/pricing"), { ssr: false });
const About = dynamic(() => import("@/components/about/about"), { ssr: false });
const FinalCta = dynamic(() => import("@/components/final-cta/final-cta"), { ssr: false });

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <LogoStrip />
        <PainPoints />
        <Positioning />
        <HowItWorks />
        <OriginStory />
        <Automations />
        <DataLayer />
        <Stats />
        <Pricing />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
