"use client";

import dynamic from "next/dynamic";
import CatalogNav from "@/components/automation-catalog/catalog-nav";
import CatalogHero from "@/components/automation-catalog/catalog-hero";
import Footer from "@/components/footer/footer";

const CatalogContent = dynamic(
  () => import("@/components/automation-catalog/catalog-content"),
  { ssr: false }
);
const CatalogSummary = dynamic(
  () => import("@/components/automation-catalog/catalog-summary"),
  { ssr: false }
);
const CatalogCta = dynamic(
  () => import("@/components/automation-catalog/catalog-cta"),
  { ssr: false }
);
const RelatedPages = dynamic(
  () => import("@/components/automation-catalog/related-pages"),
  { ssr: false }
);

export default function AutomationCatalog() {
  return (
    <>
      <CatalogNav />
      <main id="main-content">
        <CatalogHero />
        <CatalogContent />
        <CatalogSummary />
        <CatalogCta />
        <RelatedPages />
      </main>
      <Footer />
    </>
  );
}
