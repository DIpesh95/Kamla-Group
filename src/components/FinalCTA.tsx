import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";
import { contact } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ivory sm:py-40">
      <div className="absolute inset-0 opacity-[0.14]">
        <Image
          src="/images/mumbai-gateway.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink" />

      <Container className="relative">
        <Reveal>
          <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] text-ivory text-balance sm:text-7xl">
            Let&rsquo;s build what comes next.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid gap-10 border-t border-ivory/10 pt-12 sm:mt-20 sm:grid-cols-4 sm:gap-6">
            <div>
              <p className="label text-ivory/40">Mumbai</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                {contact.mumbai.lines.join(", ")}
              </p>
            </div>
            <div>
              <p className="label text-ivory/40">Goa</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                {contact.goa.lines.join(", ")}
              </p>
            </div>
            <div>
              <p className="label text-ivory/40">Phone</p>
              <p className="mt-3 text-sm text-ivory/70">{contact.mumbai.phone}</p>
            </div>
            <div>
              <p className="label text-ivory/40">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 inline-block text-sm text-ivory/70 hover:text-brass"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <Button href="/contact" tone="light" className="mt-16 sm:mt-20">
            Start a Conversation
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
