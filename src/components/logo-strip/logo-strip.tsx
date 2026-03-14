"use client";

import { motion } from "framer-motion";
import { logoStrip } from "@/content/homepage";

const toolIcons: Record<string, React.ReactNode> = {
  ClickUp: <ClickUpIcon />,
  "Monday.com": <MondayIcon />,
  Asana: <AsanaIcon />,
  Teamwork: <TeamworkIcon />,
  HubSpot: <HubSpotIcon />,
  Salesforce: <SalesforceIcon />,
  QuickBooks: <QuickBooksIcon />,
  Xero: <XeroIcon />,
  Slack: <SlackIcon />,
  "Microsoft Teams": <TeamsIcon />,
  "Google Workspace": <GoogleIcon />,
  PandaDoc: <PandaDocIcon />,
  Airtable: <AirtableIcon />,
  Fireflies: <FirefliesIcon />,
  JustCall: <JustCallIcon />,
  FreshBooks: <FreshBooksIcon />,
};

export default function LogoStrip() {
  return (
    <section className="bg-[#FAF6FD] py-16 overflow-hidden">
      <motion.p
        className="text-center text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[#552769]/60 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {logoStrip.label}
      </motion.p>

      <MarqueeRow tools={logoStrip.row1} direction="left" />
      <div className="h-6" />
      <MarqueeRow tools={logoStrip.row2} direction="right" />
    </section>
  );
}

function MarqueeRow({
  tools,
  direction,
}: {
  tools: string[];
  direction: "left" | "right";
}) {
  const doubled = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF6FD] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF6FD] to-transparent z-10" />
      <motion.div
        className="flex gap-10 items-center w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubled.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/60 transition-colors group/tool"
            title={tool}
          >
            <div className="w-7 h-7 flex items-center justify-center text-[#6B7DB2] group-hover/tool:text-[#552769] transition-colors">
              {toolIcons[tool] || <GenericToolIcon name={tool} />}
            </div>
            <span className="text-sm font-medium text-[#6B7DB2] group-hover/tool:text-[#552769] transition-colors whitespace-nowrap">
              {tool}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function GenericToolIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none">
        {name.charAt(0)}
      </text>
    </svg>
  );
}

/* ─── Inline SVG Tool Icons ─── */
function ClickUpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M3 17l5-4.5L12 16l4-3.5L21 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12l5-4.5L12 11l4-3.5L21 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  );
}

function MondayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <circle cx="6" cy="16" r="3" opacity="0.6" />
      <circle cx="12" cy="10" r="3" />
      <circle cx="18" cy="16" r="3" opacity="0.6" />
    </svg>
  );
}

function AsanaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <circle cx="12" cy="6" r="3.5" />
      <circle cx="6" cy="16" r="3.5" opacity="0.7" />
      <circle cx="18" cy="16" r="3.5" opacity="0.7" />
    </svg>
  );
}

function TeamworkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M4 20c0-3 2-5 4-5s4 2 4 5M12 20c0-3 2-5 4-5s4 2 4 5" />
    </svg>
  );
}

function HubSpotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 2v6m0 8v6M6 8l4.5 3M13.5 13L18 16M6 16l4.5-3M13.5 11L18 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="2" r="1.5" opacity="0.5" />
      <circle cx="12" cy="22" r="1.5" opacity="0.5" />
      <circle cx="5" cy="7" r="1.5" opacity="0.5" />
      <circle cx="19" cy="7" r="1.5" opacity="0.5" />
      <circle cx="5" cy="17" r="1.5" opacity="0.5" />
      <circle cx="19" cy="17" r="1.5" opacity="0.5" />
    </svg>
  );
}

function SalesforceIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" opacity="0.8">
      <path d="M8.5 6C6 6 4 8 4 10.5c0 .3 0 .6.1.9C2.8 12 2 13.3 2 14.8 2 17 3.8 18.5 6 18.5h12c2.5 0 4-1.8 4-4 0-1.8-1.2-3.3-2.8-3.8.1-.4.1-.8.1-1.2C19.3 6.5 16.8 4 14 4c-1.5 0-2.8.6-3.7 1.5C9.6 5.2 9 5 8.5 5V6z" />
    </svg>
  );
}

function QuickBooksIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 8v8h3c2 0 3-1.5 3-3s-1-3-3-3H8" />
    </svg>
  );
}

function XeroIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 7l10 10M17 7L7 17" strokeLinecap="round" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <rect x="3" y="10" width="4" height="8" rx="2" opacity="0.6" />
      <rect x="10" y="3" width="4" height="8" rx="2" opacity="0.8" />
      <rect x="10" y="13" width="4" height="8" rx="2" opacity="0.6" />
      <rect x="17" y="6" width="4" height="8" rx="2" opacity="0.8" />
    </svg>
  );
}

function TeamsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" opacity="0.8">
      <rect x="3" y="5" width="12" height="14" rx="2" />
      <circle cx="18" cy="8" r="3" opacity="0.5" />
      <rect x="15" y="12" width="6" height="7" rx="1.5" opacity="0.5" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 11h8c.5 2.5-.5 8-8 8a8 8 0 110-16c2.5 0 4.5 1 6 2.5" strokeLinecap="round" />
    </svg>
  );
}

function PandaDocIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 7h8M8 11h6M8 15h4" strokeLinecap="round" />
    </svg>
  );
}

function AirtableIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M3 7l9-4 9 4v2l-9 4-9-4V7z" opacity="0.6" />
      <path d="M3 11l9 4 9-4v2l-9 4-9-4v-2z" opacity="0.4" />
      <path d="M3 15l9 4 9-4v2l-9 4-9-4v-2z" opacity="0.3" />
    </svg>
  );
}

function FirefliesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" opacity="0.5" />
    </svg>
  );
}

function JustCallIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function FreshBooksIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 10h5" strokeLinecap="round" />
      <path d="M8 18l3-4 2 2 3-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
