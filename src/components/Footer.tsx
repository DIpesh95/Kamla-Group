import Link from "next/link";
import { contact } from "@/lib/data";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/verticals", label: "Businesses" },
      { href: "/about#legacy", label: "Legacy" },
    ],
  },
  {
    heading: "Work",
    links: [
      { href: "/verticals/real-estate", label: "Real Estate" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <span className="font-serif text-3xl tracking-tight text-ivory">
              Kamala Group
            </span>
            <p className="label mt-3 text-brass">Built on Principles</p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/50">
              A Mumbai conglomerate shaping the city&rsquo;s skyline since
              1960 — across Real Estate, Power, Hospitality, Fashion, HR
              Solutions and Tours &amp; Travels.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="label text-ivory/40">{col.heading}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-ivory/70 transition-colors hover:text-brass"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="label text-ivory/40">Contact</p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              {contact.mumbai.lines.join(", ")}
            </p>
            <p className="mt-3 text-sm text-ivory/70">{contact.mumbai.phone}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-block text-sm text-brass hover:text-brass-dim"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="rule-dark mt-16 lg:mt-20" />

        <div className="mt-8 flex flex-col gap-3 text-xs text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kamala Group. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Mumbai · Goa</p>
        </div>
      </div>
    </footer>
  );
}
