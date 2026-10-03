"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/verticals", label: "Business Verticals" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl tracking-tight text-ink">
            Kamala Group
          </span>
          <span className="mt-1 text-[10px] font-semibold tracking-[0.3em] uppercase text-brass-dark">
            Built on Principles
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-brass-dark" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-brass-dark"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-paper-dim hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
