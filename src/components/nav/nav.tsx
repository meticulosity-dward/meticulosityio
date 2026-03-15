"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/homepage";
import Button from "@/components/ui/button";

export default function Nav({ darkBg = false }: { darkBg?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = nav.links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgress />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || darkBg
            ? "bg-[#190F2E]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src="/io-logo.svg"
                alt=""
                className="h-8 w-auto"
              />
              <span className="flex items-center gap-0">
                <span className="font-heading text-2xl font-bold text-white">
                  meticulosity
                </span>
                <span className="font-heading text-2xl font-light text-[#5ABA48]">
                  .io
                </span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      className="h-0.5 bg-[#552769] mt-1 rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button size="sm">{nav.cta}</Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#190F2E] flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-heading font-medium text-white hover:text-[#5ABA48] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="md" className="mt-4">
              {nav.cta}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
    />
  );
}
