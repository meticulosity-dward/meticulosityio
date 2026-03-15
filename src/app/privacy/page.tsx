import type { Metadata } from "next";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Meticulosity.io",
  description:
    "Privacy policy for Meticulosity.io, a product of Meticulosity Enterprises Inc.",
  openGraph: {
    title: "Privacy Policy | Meticulosity.io",
    description:
      "Privacy policy for Meticulosity.io, a product of Meticulosity Enterprises Inc.",
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

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-gray">
            Last updated: March 14, 2026
          </p>
        </div>

        <article className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] sm:px-12 sm:py-14 lg:px-16">
          <Paragraph>
            This Privacy Policy describes how Meticulosity Enterprises Inc.
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operating under
            the brand name Meticulosity.io, collects, uses, and shares
            information when you visit our website at meticulosity.io (the
            &quot;Site&quot;) or use our services.
          </Paragraph>

          <SectionTitle>1. Information We Collect</SectionTitle>
          <Paragraph>
            <strong className="text-navy">
              Information you provide directly:
            </strong>
          </Paragraph>
          <BulletList>
            <li>
              Name and email address when you book an assessment or contact us
            </li>
            <li>
              Company name, role, and agency details shared during consultations
            </li>
            <li>
              Any other information you voluntarily provide through forms or
              correspondence
            </li>
          </BulletList>

          <Paragraph>
            <strong className="text-navy">
              Information collected automatically:
            </strong>
          </Paragraph>
          <BulletList>
            <li>Browser type, operating system, and device information</li>
            <li>IP address and approximate geographic location</li>
            <li>Pages visited, time spent on pages, and referring URLs</li>
            <li>
              Cookies and similar tracking technologies (see Section 5)
            </li>
          </BulletList>

          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <Paragraph>We use the information we collect to:</Paragraph>
          <BulletList>
            <li>
              Respond to your inquiries and schedule assessment meetings
            </li>
            <li>Provide, maintain, and improve our services</li>
            <li>
              Send you relevant communications about Meticulosity.io (with your
              consent)
            </li>
            <li>Analyze website usage to improve the user experience</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </BulletList>

          <SectionTitle>3. How We Share Your Information</SectionTitle>
          <Paragraph>
            We do not sell your personal information. We may share your
            information with:
          </Paragraph>
          <BulletList>
            <li>
              <strong className="text-navy">Service providers:</strong>{" "}
              Third-party tools that help us operate our business, including
              HubSpot (CRM and meeting scheduling), Google Analytics (website
              analytics), and hosting providers. These providers are
              contractually obligated to protect your information.
            </li>
            <li>
              <strong className="text-navy">Legal requirements:</strong>{" "}
              When required by law, regulation, legal process, or governmental
              request.
            </li>
            <li>
              <strong className="text-navy">Business transfers:</strong>{" "}
              In connection with a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction.
            </li>
          </BulletList>

          <SectionTitle>4. Data Retention</SectionTitle>
          <Paragraph>
            We retain your personal information for as long as necessary to
            fulfill the purposes described in this policy, unless a longer
            retention period is required or permitted by law. When information
            is no longer needed, we delete or anonymize it.
          </Paragraph>

          <SectionTitle>5. Cookies and Tracking Technologies</SectionTitle>
          <Paragraph>
            Our Site uses cookies and similar technologies to analyze traffic,
            remember preferences, and improve your experience. These include:
          </Paragraph>
          <BulletList>
            <li>
              <strong className="text-navy">Essential cookies:</strong>{" "}
              Required for the Site to function properly.
            </li>
            <li>
              <strong className="text-navy">Analytics cookies:</strong>{" "}
              Help us understand how visitors interact with the Site (e.g.,
              Google Analytics).
            </li>
            <li>
              <strong className="text-navy">Third-party embeds:</strong>{" "}
              Our meeting booking widget (HubSpot) may set its own cookies when
              loaded.
            </li>
          </BulletList>
          <Paragraph>
            You can control cookies through your browser settings. Disabling
            certain cookies may affect Site functionality.
          </Paragraph>

          <SectionTitle>6. Your Rights</SectionTitle>
          <Paragraph>
            Depending on your jurisdiction, you may have the right to:
          </Paragraph>
          <BulletList>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing activities</li>
            <li>
              Withdraw consent where processing is based on consent
            </li>
            <li>Request a portable copy of your data</li>
          </BulletList>
          <Paragraph>
            To exercise any of these rights, contact us at the address below.
            We will respond within 30 days.
          </Paragraph>

          <SectionTitle>7. Data Security</SectionTitle>
          <Paragraph>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the internet or electronic storage is completely
            secure.
          </Paragraph>

          <SectionTitle>8. International Transfers</SectionTitle>
          <Paragraph>
            Your information may be processed in countries other than your
            country of residence. We take steps to ensure that your information
            receives an adequate level of protection in the jurisdictions in
            which we process it.
          </Paragraph>

          <SectionTitle>9. Children&apos;s Privacy</SectionTitle>
          <Paragraph>
            Our services are not directed to individuals under the age of 16.
            We do not knowingly collect personal information from children. If
            you believe we have collected information from a child, please
            contact us and we will promptly delete it.
          </Paragraph>

          <SectionTitle>10. Changes to This Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the updated policy on this page
            with a revised &quot;Last updated&quot; date. Your continued use of
            the Site after changes are posted constitutes acceptance of the
            updated policy.
          </Paragraph>

          <SectionTitle>11. Contact Us</SectionTitle>
          <Paragraph>
            If you have questions about this Privacy Policy or wish to exercise
            your rights, contact us at:
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
              href="mailto:privacy@meticulosity.com"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary-light hover:decoration-primary/50"
            >
              privacy@meticulosity.com
            </a>
          </Paragraph>
        </article>
      </main>
      <Footer />
    </>
  );
}
