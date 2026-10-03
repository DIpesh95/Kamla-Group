import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import ValueCard from "@/components/ValueCard";
import { milestones, values } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "The story of Kamala Group — founded in 1960, built on principles, and still growing across six business verticals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A foundation laid in 1960 — still standing today."
        description="Three simple words, put together, became the foundation of one of Mumbai's most enduring business houses: Built on Principles."
      />

      {/* Founder story */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/founder-portrait.jpg"
              alt="Late Shri Ghamandiram Gowani, Founder"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brass-dark">
              Founder
            </p>
            <h2 className="mt-2 font-serif text-3xl text-ink">
              Late Shri Ghamandiram Gowani
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                In 1960, during a time when real estate in India was
                perceived as unstructured and unregulated, one man&rsquo;s
                vision went beyond the years, beyond the present and far
                beyond the near future. Late Shri Ghamandiram Gowani
                envisioned an industry — the real estate industry — and the
                Kamala Group was incepted. Every conceivable idea was
                fertilized by his will to achieve, to execute.
              </p>
              <p>
                From giving Mumbai one of its first high-rises, &lsquo;Prithvi&rsquo;
                at Altamount Road, to successfully diversifying into Power,
                Hospitality, Fashion, HR Solutions and Tours &amp; Travels,
                through every one of Kamala Group&rsquo;s years, the focus has
                always been on the future.
              </p>
              <blockquote className="border-l-2 border-brass pl-5 font-serif text-xl text-ink">
                &ldquo;If you build that foundation, both the moral and the
                ethical foundation, as well as the business foundation, and
                the experience foundation, then the building won&rsquo;t
                crumble.&rdquo;
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* Chairman message */}
      <section className="bg-paper-dim py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brass-dark">
              Message from the Executive Chairman
            </p>
            <h2 className="mt-2 font-serif text-3xl text-ink">
              Ramesh Gowani
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Greetings to all our customers, associates, stakeholders and
                our people! Decades ago when we started off, the foundation
                was laid. It was a foundation consisting of three simple
                words, but the most powerful when put together — Built On
                Principles. And this became the foundation of one of the
                mightiest empires, Kamala Group.
              </p>
              <p>
                We are a customer-focused group. Be it real estate,
                hospitality, HR solutions, fashion or any of the business
                verticals we have envisioned, the focus has been and will
                always be on customer service and satisfaction. Trust, among
                all things, is something we have earned over a period of
                time — and we remain convinced that investors&rsquo; and
                buyers&rsquo; money with us is a trust reposed on us.
              </p>
              <p>
                Powered by these principles, the cornerstones of our beliefs,
                Kamala Group has grown from strength to strength. We will
                continue our march towards further growth, add more value,
                build more landmarks, and above all, create more beautiful
                experiences.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/chairman-portrait.jpg"
                alt="Ramesh Gowani, Executive Chairman"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8">
            <h3 className="font-serif text-2xl text-ink">Mission</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Powered by integrity, Kamala Group delivers high-quality
              customer experiences by creating and building efficient
              residential and commercial spaces — leading through innovation,
              foresight and dedication across every business vertical, to
              offer India and the world the best of products and services.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8">
            <h3 className="font-serif text-2xl text-ink">Vision</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              To explore newer avenues, to lead by example, and to be known
              as an organisation that values its people, respects its
              associates, and lives up to the trust reposed on it by its
              customers across all its verticals.
            </p>
          </div>
        </Container>
      </section>

      {/* Values - Petals of our strength */}
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Petals of Our Strength"
            title="Six attributes, one guiding philosophy"
            description="Derived from the six key attributes of the lotus flower — kamal, the very origin of our name — these have been our guiding principles since 1960."
            light
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <ValueCard key={v.name} value={v} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="65+ years, in brief"
          />
          <div className="mt-12">
            <Timeline items={milestones} />
          </div>
        </Container>
      </section>
    </>
  );
}
