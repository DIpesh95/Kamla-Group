import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import {
  verticals,
  verticalDetails,
  realEstateBrands,
} from "@/lib/data";

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
  const vertical = verticals.find((v) => v.slug === slug);
  if (!vertical) notFound();

  const paragraphs = verticalDetails[vertical.slug] ?? [vertical.summary];

  return (
    <>
      <PageHero
        eyebrow={`Business Vertical · ${vertical.name}`}
        title={vertical.tagline}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={vertical.image}
                alt={vertical.name}
                fill
                className="object-cover"
              />
            </div>
            {vertical.stats && (
              <div className="grid grid-cols-2 gap-4">
                {vertical.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-line bg-white p-4"
                  >
                    <p className="font-serif text-xl text-ink">{s.value}</p>
                    <p className="mt-1 text-xs text-ink-soft">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {vertical.slug === "real-estate" && (
        <section className="bg-paper-dim py-20 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Real Estate Brands"
              title="Four brands, every corner of the market"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {realEstateBrands.map((b) => (
                <div
                  key={b.slug}
                  className="overflow-hidden rounded-2xl border border-line bg-white"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
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
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            Want to know more about {vertical.name.toLowerCase()}?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact">Get in Touch</Button>
            <Button href="/verticals" variant="outline">
              Back to All Verticals
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
