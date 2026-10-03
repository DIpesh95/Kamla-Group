import Link from "next/link";
import Container from "./Container";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper/70">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-serif text-2xl text-paper">Kamala Group</span>
          <p className="mt-1 text-xs font-semibold tracking-[0.3em] uppercase text-brass-light">
            Built on Principles
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            Over 65 years of real estate leadership in Mumbai, diversified
            into Power, Hospitality, Fashion, HR Solutions and Tours &amp;
            Travels.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-paper">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-paper">About Us</Link></li>
            <li><Link href="/verticals" className="hover:text-paper">Business Verticals</Link></li>
            <li><Link href="/projects" className="hover:text-paper">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-paper">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-paper/60">
            <li>{contact.mumbai.lines.join(" ")}</li>
            <li>{contact.mumbai.phone}</li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-paper">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kamala Group. All rights reserved.</p>
          <p>Mumbai · Goa</p>
        </Container>
      </div>
    </footer>
  );
}
