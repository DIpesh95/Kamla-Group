import Image from "next/image";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { values } from "@/lib/data";

export const metadata = {
  title: "About",
  description:
    "The story of Kamala Group — founded in 1960, built on principles, and still growing across six business verticals.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About Us"
        title="A foundation laid in 1960 — still standing today."
        description="Three simple words, put together, became the foundation of one of Mumbai's most enduring business houses: Built on Principles."
      />

      {/* Founder spread */}
      <section className="bg-ivory py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="img-hover relative aspect-[3/4] w-full">
                  <Image
                    src="/images/founder-portrait.jpg"
                    alt="Late Shri Ghamandiram Gowani, Founder"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <SectionLabel index="01" text="Founder" />
                <h2 className="mt-5 font-serif text-3xl text-ink sm:text-4xl">
                  Late Shri Ghamandiram Gowani
                </h2>
                <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-stone">
                  <p>
                    In 1960, during a time when real estate in India was
                    perceived as unstructured and unregulated, one
                    man&rsquo;s vision went beyond the years, beyond the
                    present and far beyond the near future. Late Shri
                    Ghamandiram Gowani envisioned an industry — the real
                    estate industry — and the Kamala Group was incepted.
                    Every conceivable idea was fertilized by his will to
                    achieve, to execute.
                  </p>
                  <p>
                    From giving Mumbai one of its first high-rises,
                    &lsquo;Prithvi&rsquo; at Altamount Road, to successfully
                    diversifying into Power, Hospitality, Fashion, HR
                    Solutions and Tours &amp; Travels, through every one of
                    Kamala Group&rsquo;s years, the focus has always been on
                    the future.
                  </p>
                </div>
                <blockquote className="mt-8 border-l border-brass py-1 pl-6 font-serif text-2xl leading-snug text-ink">
                  &ldquo;If you build that foundation, both the moral and the
                  ethical foundation, as well as the business foundation,
                  then the building won&rsquo;t crumble.&rdquo;
                </blockquote>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Chairman — editorial op-ed style */}
      <section className="bg-ivory-dim py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionLabel index="02" text="Message from the Chairman" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 font-serif text-2xl leading-[1.5] text-ink sm:text-3xl">
                &ldquo;Greetings to all our customers, associates,
                stakeholders and our people! Decades ago when we started
                off, the foundation was laid. It was a foundation consisting
                of three simple words, but the most powerful when put
                together — Built On Principles.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[15px] leading-relaxed text-stone">
                We are a customer-focused group. Be it real estate,
                hospitality, HR solutions, fashion or any of the business
                verticals we have envisioned, the focus has been and will
                always be on customer service and satisfaction. Trust, among
                all things, is something we have earned over a period of
                time — and we remain convinced that investors&rsquo; and
                buyers&rsquo; money with us is a trust reposed on us.
                Powered by these principles, Kamala Group has grown from
                strength to strength, and will continue its march towards
                further growth.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/images/chairman-portrait.jpg"
                    alt="Ramesh Gowani"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Ramesh Gowani
                  </p>
                  <p className="text-sm text-stone">Executive Chairman</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="bg-ivory py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 border-t border-line pt-14 sm:grid-cols-2 sm:gap-16">
            <Reveal>
              <SectionLabel index="03" text="Mission" />
              <p className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
                Powered by integrity, we deliver high-quality customer
                experiences by creating efficient residential and commercial
                spaces — leading through innovation, foresight and
                dedication across every business vertical.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <SectionLabel index="04" text="Vision" />
              <p className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
                To explore newer avenues, to lead by example, and to be
                known as an organisation that values its people, respects
                its associates, and lives up to the trust reposed on it by
                its customers.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-ink py-24 text-ivory sm:py-32">
        <Container>
          <Reveal>
            <SectionLabel text="The Petals of Our Strength" dark />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-ivory text-balance sm:text-5xl">
              Derived from the six attributes of the lotus — kamal, the
              origin of our name.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={0.05 * i}>
                <span className="font-serif text-lg text-brass">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-ivory">
                  {v.name}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/55">
                  {v.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <p className="font-serif text-2xl text-ink sm:text-3xl">
            See the full journey, year by year.
          </p>
          <Button href="/#legacy" variant="link">
            Our Legacy Timeline
          </Button>
        </Container>
      </section>
    </>
  );
}
