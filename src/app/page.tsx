import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import StatBar from "@/components/StatBar";
import VerticalCard from "@/components/VerticalCard";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import { verticals, testimonials, realEstateBrands } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/hero-times-tower.jpg"
          alt="Times Tower, Kamala City, Lower Parel"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <Container className="relative flex min-h-[85vh] flex-col justify-end gap-8 py-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brass-light">
            Mumbai · 1960 — Present
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-paper text-balance sm:text-6xl lg:text-7xl">
            Built on Principles, for over 65 years.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/75">
            Kamala Group began with one man&rsquo;s vision for Mumbai real
            estate, and grew into a six-vertical conglomerate spanning Power,
            Hospitality, Fashion, HR Solutions and Tours &amp; Travels.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/verticals">Explore Our Verticals</Button>
            <Button href="/about" variant="ghost">
              Our Story
            </Button>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-14">
          <StatBar />
        </div>
      </Container>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/founder-portrait.jpg"
              alt="Late Shri Ghamandiram Gowani, Founder, Kamala Group"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Legacy"
              title="One vision, in 1960. A conglomerate, today."
              description="In 1960, during a time when real estate in India was unstructured and unregulated, Late Shri Ghamandiram Gowani envisioned an industry — and the Kamala Group was incepted. From giving Mumbai one of its first high-rises, Prithvi at Altamount Road, to converting Kamala Mills into a commercial landmark, the Group's focus has always been on the future."
            />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
              Today, led by Chairman Ramesh Gowani, Kamala Group is an ISO
              9001:2008 certified, 100% debt-free company — still measuring
              every decision against the same principles it was founded on.
            </p>
            <Button href="/about" variant="outline" className="mt-6">
              Read the Full Story
            </Button>
          </div>
        </Container>
      </section>

      {/* Business Verticals */}
      <section className="bg-paper-dim py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Six verticals, one set of principles"
            description="Standing tall on the foundation of real estate, the Group has diversified into Power, Hospitality, Fashion, HR Solutions and Tours & Travels — each built with the same focus on quality and trust."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v) => (
              <VerticalCard key={v.slug} vertical={v} />
            ))}
          </div>
        </Container>
      </section>

      {/* Real estate brands */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Real Estate, Refined"
            title="Four brands. Every corner of the market."
            description="Kamala for landmark commercial towers, Orra for western-suburb luxury, Sogo for redevelopment across the eastern suburbs, and Privé for Goa's finest addresses."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {realEstateBrands.map((b) => (
              <div
                key={b.slug}
                className="group overflow-hidden rounded-2xl border border-line bg-white"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-ink">{b.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold tracking-wide text-brass-dark uppercase">
                    {b.region}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/projects" variant="outline">
              View Our Project Portfolio
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Experience Speaks"
            title="What our clients and partners say"
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <TestimonialCard key={t.name} item={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-paper-dim px-8 py-16 text-center">
          <h2 className="max-w-2xl font-serif text-3xl text-ink sm:text-4xl text-balance">
            Have a project, partnership, or opportunity in mind?
          </h2>
          <p className="max-w-xl text-ink-soft">
            Reach out to our Mumbai or Goa office — we would love to hear from
            you.
          </p>
          <Button href="/contact">Contact Kamala Group</Button>
        </Container>
      </section>
    </>
  );
}
