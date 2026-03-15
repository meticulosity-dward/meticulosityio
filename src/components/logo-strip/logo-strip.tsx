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

/* ─── Brand SVG Icons (accurate representations) ─── */

/* ClickUp: from Simple Icons - the recognizable checkmark/chevron */
function ClickUpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" />
    </svg>
  );
}

/* Monday.com: from vectorlogo.zone - three shapes (two angled pills + circle) */
function MondayIcon() {
  return (
    <svg viewBox="0 0 64 64" width="24" height="24" fill="currentColor">
      <g transform="matrix(3.208255 0 0 3.208255 -35.559129 -63.587202)">
        <path d="M13.513 35.76a2.433 2.433 0 0 1-2.059-3.723l4.377-6.99a2.432 2.432 0 1 1 4.123 2.582l-4.378 6.99a2.43 2.43 0 0 1-2.063 1.141z"/>
        <path d="M21.056 35.76a2.433 2.433 0 0 1-2.063-3.723l4.38-6.99a2.432 2.432 0 1 1 4.117 2.582l-4.372 6.99a2.43 2.43 0 0 1-2.063 1.141z"/>
        <ellipse ry="2.375" rx="2.436" cy="33.384" cx="28.597"/>
      </g>
    </svg>
  );
}

/* Asana: from Simple Icons - three dots in triangle */
function AsanaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.78 12.653c-2.882 0-5.22 2.336-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.336-5.22-5.22-5.22zm-13.56 0c-2.88 0-5.22 2.337-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.338 5.22-5.22-2.336-5.22-5.22-5.22zm12-6.525c0 2.883-2.337 5.22-5.22 5.22-2.882 0-5.22-2.337-5.22-5.22 0-2.88 2.338-5.22 5.22-5.22 2.883 0 5.22 2.34 5.22 5.22z" />
    </svg>
  );
}

/* Teamwork: overlapping circles forming abstract people */
function TeamworkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <circle cx="12" cy="6" r="4" />
      <path d="M12 12c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6z" opacity="0.6" />
      <circle cx="20" cy="8" r="3" opacity="0.5" />
      <path d="M20 13c-1 0-1.9.2-2.7.5C19 14.8 20 16.7 20 19v1h4v-1.5c0-2.8-1.8-5.5-4-5.5z" opacity="0.35" />
    </svg>
  );
}

/* HubSpot: from Simple Icons - the sprocket icon */
function HubSpotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" />
    </svg>
  );
}

/* Salesforce: distinctive cloud shape */
function SalesforceIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M10.05 4.65c.9-.94 2.14-1.52 3.52-1.52 1.75 0 3.29.93 4.13 2.33a5.1 5.1 0 0 1 1.92-.38c2.83 0 5.13 2.3 5.13 5.13 0 2.84-2.3 5.14-5.13 5.14-.33 0-.66-.03-.97-.1a4.33 4.33 0 0 1-3.82 2.28c-.58 0-1.13-.11-1.63-.32a5.27 5.27 0 0 1-4.63 2.75 5.27 5.27 0 0 1-4.97-3.53 4.6 4.6 0 0 1-.72.06C1.27 16.49-.25 14.96-.25 13.09c0-1.23.66-2.31 1.64-2.9a4.44 4.44 0 0 1-.27-1.52c0-2.47 2-4.47 4.47-4.47a4.45 4.45 0 0 1 4.46 4.45z" transform="translate(.25 1.5)" />
    </svg>
  );
}

/* QuickBooks: from Simple Icons - circle with book/ledger */
function QuickBooksIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z" />
    </svg>
  );
}

/* Xero: from Simple Icons - X in circle */
function XeroIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.585 14.655c-1.485 0-2.69-1.206-2.69-2.689 0-1.485 1.207-2.691 2.69-2.691 1.485 0 2.69 1.207 2.69 2.691s-1.207 2.689-2.69 2.689zM7.53 14.644c-.099 0-.192-.041-.267-.116l-2.043-2.04-2.052 2.047c-.069.068-.16.108-.258.108-.202 0-.368-.166-.368-.368 0-.099.04-.191.111-.263l2.04-2.05-2.038-2.047c-.075-.069-.113-.162-.113-.261 0-.203.166-.366.368-.366.098 0 .188.037.258.105l2.055 2.048 2.048-2.045c.069-.071.162-.108.26-.108.211 0 .375.165.375.366 0 .098-.029.188-.104.258l-2.056 2.055 2.055 2.051c.068.069.104.16.104.258 0 .202-.165.368-.365.368h-.01zm8.017-4.591c-.796.101-.882.476-.882 1.404v2.787c0 .202-.165.366-.366.366-.203 0-.367-.165-.368-.366v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm-3.091 2.205H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66-.255.164-.525.284-.811.345-.33.09-.645.104-.975.06-1.095-.135-2.01-.93-2.28-2.01-.06-.21-.09-.42-.09-.645 0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81l.068-.046zm6.129-2.223c-1.064 0-1.931.865-1.931 1.931 0 1.064.866 1.931 1.931 1.931s1.931-.867 1.931-1.931c0-1.065-.866-1.933-1.931-1.933v.002zm0 2.595c-.367 0-.666-.297-.666-.666 0-.367.3-.665.666-.665.367 0 .667.299.667.665 0 .369-.3.667-.667.666zm-8.04-2.603c-.91 0-1.672.623-1.886 1.466v.03h3.776c-.203-.855-.973-1.494-1.891-1.494v-.002z" />
    </svg>
  );
}

/* Slack: four pills in a pinwheel/hashtag pattern */
function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" />
    </svg>
  );
}

/* Microsoft Teams: from Bootstrap Icons */
function TeamsIcon() {
  return (
    <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
      <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0 1.674 1.674 0 0 1 3.349 0m-2.238 9.488-.12-.002a5.2 5.2 0 0 0 .381-2.07V6.306a1.7 1.7 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.6 2.6 0 0 1-2.598 2.598z"/>
      <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.68.68 0 0 1-.682.682H.682A.68.68 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945z"/>
    </svg>
  );
}

/* Google: from Simple Icons - the G logo */
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

/* PandaDoc: stylized document with fold */
function PandaDocIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M4 1C2.9 1 2 1.9 2 3v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-6-6H4zm10 0v5a1 1 0 0 0 1 1h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 1h10l8 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" opacity="0.15" />
      <path d="M7 12h10M7 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M14 1v5a1 1 0 0 0 1 1h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="1" width="20" height="22" rx="2" fill="currentColor" opacity="0.08" />
    </svg>
  );
}

/* Airtable: from Simple Icons - diamond/layered shape */
function AirtableIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z" />
    </svg>
  );
}

/* Fireflies.ai: from official site - four-block pinwheel grid */
function FirefliesIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
      <path d="M10.5199 0H0V10.4427H10.5199V0Z"/>
      <path d="M22.9812 12.6066H12.4613V23.0492H22.9812V12.6066Z"/>
      <path d="M22.9812 0H12.4613V10.4426H31.9996V8.95045C31.9994 6.57656 31.0492 4.30001 29.3581 2.6215C27.667 0.942992 25.3735 0 22.9821 0H22.9812Z"/>
      <path d="M0 12.6066V23.0492C0.000240298 25.4231 0.950411 27.6997 2.64151 29.3782C4.3326 31.0567 6.62612 31.9997 9.01757 31.9997H10.5199V12.6066H0Z"/>
    </svg>
  );
}

/* JustCall: from official CDN - two interlocking J curves with chevron arrows */
function JustCallIcon() {
  return (
    <svg viewBox="-2 12 105 105" width="24" height="24" fill="currentColor">
      <path d="M11.0094 41.8879L1.05448 50.3838C-0.351492 51.5883-0.351492 53.7565 1.05448 54.961L11.0094 63.4087" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M89.5726 76.7842L99.5275 68.2882C100.933 67.0837 100.933 64.9156 99.5275 63.711L89.5726 55.2633" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M63.3778 28.8349C62.3273 28.8349 61.3415 29.0276 60.3234 29.14C62.2142 32.7376 63.3778 36.7527 63.3778 41.0889V72.3745C63.3778 85.7046 53.2451 96.5774 40.2358 98.0871C44.5992 106.422 53.2774 112.172 63.3778 112.172C77.8414 112.172 89.574 100.512 89.574 86.1543V54.8687C89.574 40.4947 77.8414 28.8349 63.3778 28.8349Z"/>
      <path d="M37.2081 86.1606V54.875C37.2081 41.5449 47.3408 30.6721 60.35 29.1624C55.9867 20.8271 47.3084 15.0775 37.2081 15.0775C22.7444 15.0775 11.0118 26.7373 11.0118 41.0952V72.3808C11.0118 86.7548 22.7444 98.3985 37.2081 98.3985C38.2424 98.3985 39.2443 98.2058 40.2463 98.0934C38.3717 94.5119 37.2081 90.4969 37.2081 86.1606Z"/>
    </svg>
  );
}

/* FreshBooks: from logotyp.us - F in rounded square */
function FreshBooksIcon() {
  return (
    <svg viewBox="-1 0 31 38" width="24" height="24" fill="currentColor">
      <path d="m14.1 2.3c-7.8 0-14.1 6.3-14.1 14.1v19.3h19.3c7.8 0 14.1-6.3 14.1-14.1v-19.3zm11.4 5.9c0 2.6-2.1 4.6-4.6 4.6h-5v4h6.7v4.6h-6.6v9.6h-5.5v-24h5.4v4.3c.2-2.4 2.2-4.3 4.6-4.3h5z" fillRule="evenodd"/>
    </svg>
  );
}
