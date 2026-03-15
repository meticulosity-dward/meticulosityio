import type { Metadata } from "next";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Meticulosity.io",
  description:
    "Terms of service for Meticulosity.io, a product of Meticulosity Enterprises Inc.",
  openGraph: {
    title: "Terms of Service | Meticulosity.io",
    description:
      "Terms of service for Meticulosity.io, a product of Meticulosity Enterprises Inc.",
    type: "website",
    siteName: "Meticulosity.io",
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 font-heading text-xl font-semibold text-navy">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-gray">{children}</p>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 space-y-2 pl-5 text-base leading-relaxed text-gray list-disc marker:text-primary">
      {children}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <Nav darkBg />
      <main
        id="main-content"
        className="bg-gradient-to-b from-lavender via-white to-white pt-32 pb-24"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-lavender px-4 py-1.5 text-sm font-medium text-primary">
            Legal
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-gray">
            Last updated: March 14, 2026
          </p>
        </div>

        <article className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] sm:px-12 sm:py-14 lg:px-16">
          <Paragraph>
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            website at meticulosity.io (the &quot;Site&quot;) and any services
            provided by Meticulosity Enterprises Inc. (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), operating under the brand name
            Meticulosity.io. By accessing or using the Site, you agree to these
            Terms.
          </Paragraph>

          <SectionTitle>1. Services</SectionTitle>
          <Paragraph>
            Meticulosity.io provides managed automation services for agencies.
            Specific service terms, deliverables, and pricing are defined in
            individual service agreements between you and Meticulosity
            Enterprises Inc.
          </Paragraph>

          <SectionTitle>2. Use of the Site</SectionTitle>
          <Paragraph>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</Paragraph>
          <BulletList>
            <li>
              Use the Site in any way that violates applicable laws or regulations
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Site or
              its systems
            </li>
            <li>
              Use automated tools to scrape, crawl, or extract data from the
              Site without our written permission
            </li>
            <li>
              Transmit any material that is unlawful, harmful, threatening,
              abusive, or otherwise objectionable
            </li>
          </BulletList>

          <SectionTitle>3. Intellectual Property</SectionTitle>
          <Paragraph>
            All content on the Site, including text, graphics, logos, and
            software, is the property of Meticulosity Enterprises Inc. or its
            licensors and is protected by copyright, trademark, and other
            intellectual property laws. You may not reproduce, distribute, or
            create derivative works from any content without our prior written
            consent.
          </Paragraph>

          <SectionTitle>4. User Content</SectionTitle>
          <Paragraph>
            If you submit any information or content through the Site (such as
            contact forms or consultation requests), you grant us a
            non-exclusive, royalty-free license to use that content for the
            purpose of providing our services and responding to your inquiries.
          </Paragraph>

          <SectionTitle>5. Disclaimers</SectionTitle>
          <Paragraph>
            The Site and its content are provided &quot;as is&quot; and
            &quot;as available&quot; without warranties of any kind, either
            express or implied. We do not warrant that the Site will be
            uninterrupted, error-free, or free of viruses or other harmful
            components.
          </Paragraph>
          <Paragraph>
            Results and metrics referenced on the Site (including hours saved
            and ROI figures) are based on our own internal operations and may
            vary depending on your specific tools, processes, and agency size.
          </Paragraph>

          <SectionTitle>6. Limitation of Liability</SectionTitle>
          <Paragraph>
            To the fullest extent permitted by law, Meticulosity Enterprises
            Inc. shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of the
            Site or services, even if we have been advised of the possibility
            of such damages.
          </Paragraph>

          <SectionTitle>7. Indemnification</SectionTitle>
          <Paragraph>
            You agree to indemnify and hold harmless Meticulosity Enterprises
            Inc., its officers, directors, employees, and agents from any
            claims, damages, losses, or expenses (including reasonable legal
            fees) arising from your use of the Site or violation of these Terms.
          </Paragraph>

          <SectionTitle>8. Third-Party Links</SectionTitle>
          <Paragraph>
            The Site may contain links to third-party websites or services. We
            are not responsible for the content, privacy practices, or
            availability of those third-party sites. Accessing them is at your
            own risk.
          </Paragraph>

          <SectionTitle>9. Governing Law</SectionTitle>
          <Paragraph>
            These Terms are governed by and construed in accordance with the
            laws of the Province of British Columbia and the federal laws of
            Canada applicable therein. Any disputes arising from these Terms
            shall be resolved in the courts of British Columbia, Canada.
          </Paragraph>

          <SectionTitle>10. Changes to These Terms</SectionTitle>
          <Paragraph>
            We may update these Terms from time to time. We will notify you of
            material changes by posting the updated Terms on this page with a
            revised &quot;Last updated&quot; date. Your continued use of the
            Site after changes are posted constitutes acceptance of the updated
            Terms.
          </Paragraph>

          <SectionTitle>11. Contact Us</SectionTitle>
          <Paragraph>
            If you have questions about these Terms, contact us at:
          </Paragraph>
          <p className="mt-4 text-base leading-relaxed text-gray">
            Meticulosity Enterprises Inc.
            <br />
            327-71 2nd Ave W
            <br />
            Vancouver, BC V5Y 0J7
            <br />
            Canada
          </p>
          <Paragraph>
            Email:{" "}
            <a
              href="mailto:legal@meticulosity.com"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary-light hover:decoration-primary/50"
            >
              legal@meticulosity.com
            </a>
          </Paragraph>
        </article>
      </main>
      <Footer />
    </>
  );
}
