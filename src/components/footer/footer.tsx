"use client";

import { footer } from "@/content/homepage";
import Button from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0F0A1A] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-0 mb-3">
              <span className="font-heading text-xl font-bold text-white">
                meticulosity
              </span>
              <span className="font-heading text-xl font-light text-[#5ABA48]">
                .io
              </span>
            </div>
            <p className="text-sm text-white/40">{footer.tagline}</p>
            <p className="text-sm text-white/30 mt-1">{footer.location}</p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {footer.columns.product.title}
            </h4>
            <ul className="space-y-3">
              {footer.columns.product.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              {footer.columns.company.title}
            </h4>
            <ul className="space-y-3">
              {footer.columns.company.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div>
            <Button size="sm" className="mb-6">
              {footer.cta}
            </Button>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:hello@meticulosity.io"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
