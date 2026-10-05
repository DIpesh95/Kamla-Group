"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/verticals", label: "Businesses" },
  { href: "/verticals/real-estate", label: "Real Estate" },
  { href: "/projects", label: "Projects" },
  { href: "/#legacy", label: "Legacy" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
          scrolled || open
            ? "bg-ink/95 backdrop-blur-sm"
            : "bg-gradient-to-b from-ink/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <span className="relative h-7 w-7 shrink-0 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/images/logo-mark.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </span>
            <span className="font-sans text-[13px] font-semibold tracking-[0.3em] text-ivory uppercase">
              Kamala Group
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="relative font-sans text-[11px] font-semibold tracking-[0.22em] text-ivory/80 uppercase transition-colors hover:text-ivory"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex items-center gap-3 lg:hidden"
          >
            <span className="font-sans text-[11px] font-semibold tracking-[0.22em] text-ivory uppercase">
              {open ? "Close" : "Menu"}
            </span>
            <span className="relative flex h-4 w-6 flex-col justify-between">
              <span
                className={`h-px w-full bg-ivory transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-ivory transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-ivory transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-serif text-4xl text-ivory/90 transition-colors hover:text-brass"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
