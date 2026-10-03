import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import RealEstatePortfolio from "@/components/RealEstatePortfolio";
import { verticals, verticalDetails } from "@/lib/data";

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = verticals.find((v) => v.slug === slug);
  if (!vertical) return {};
  return {
    title: vertical.name,
    description: vertical.summary,
  };
}

export default async function VerticalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = verticals.findIndex((v) => v.slug === slug);
  const vertical = verticals[index];
  if (!vertical) notFound();

  const paragraphs = verticalDetails[vertical.slug] ?? [vertical.summary];
  const num = String(index + 1).padStart(2, "0");

  return (
    <>
      <section className="relative flex h-[78vh] min-h-[460px] w-full items-end overflow-hidden bg-ink">
        <Image
          src={vertical.image}
          alt={vertical.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <Container className="relative w-full pt-40 pb-16 sm:pb-20">
          <SectionLabel index={num} text={`Since ${vertical.since}`} dark />
          <h1 className="mt-6 font-serif text-5xl leading-[0.98] text-ivory text-balance sm:text-7xl">
            {vertical.name}
          </h1>
          <p className="mt-5 max-w-lg text-sm font-semibold tracking-wide text-brass uppercase">
            {vertical.tagline}
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-5 text-[15px] leading-relaxed text-stone lg:col-span-7">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Get in Touch</Button>
                <Button href="/verticals" variant="outline">
                  All Businesses
                </Button>
              </div>
            </Reveal>
          </div>

          {vertical.stats && (
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <div className="border-t border-line">
                  {vertical.stats.map((s) => (
                    <div key={s.label} className="border-b border-line py-6">
                      <p className="font-serif text-3xl text-ink">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs text-stone">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          )}
        </Container>
      </section>

      {vertical.slug === "real-estate" && <RealEstatePortfolio />}
    </>
  );
}
