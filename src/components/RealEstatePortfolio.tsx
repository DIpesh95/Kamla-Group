import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import { realEstateBrands } from "@/lib/data";

export default function RealEstatePortfolio() {
  return (
    <section className="bg-ink py-28 text-ivory sm:py-36">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <SectionLabel text="Real Estate" dark />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] text-ivory text-balance sm:text-6xl">
                Four brands. Every corner of the market.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Button href="/verticals/real-estate" variant="link" tone="light">
              The Full Portfolio
            </Button>
          </Reveal>
        </div>
      </Container>

      <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32">
        {realEstateBrands.map((b, i) => (
          <Reveal key={b.slug}>
            <div>
              <Container>
                <div className="flex items-baseline justify-between">
                  <span className="label text-ivory/40">
                    0{i + 1} / 0{realEstateBrands.length}
                  </span>
                  <span className="label text-brass">{b.category}</span>
                </div>
              </Container>

              <div className="img-hover relative mt-6 h-[58vh] min-h-[320px] w-full sm:h-[72vh]">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <Container className="absolute inset-0 flex items-end pb-10">
                  <h3 className="font-serif text-[14vw] leading-none text-ivory sm:text-[8vw] lg:text-[6.5vw]">
                    {b.name}
                  </h3>
                </Container>
              </div>

              <Container>
                <div className="grid gap-6 pt-7 sm:grid-cols-12 sm:gap-8">
                  <p className="label text-ivory/50 sm:col-span-3">{b.region}</p>
                  <p className="max-w-xl text-[15px] leading-relaxed text-ivory/65 sm:col-span-7">
                    {b.description}
                  </p>
                  <p className="label text-ivory/50 sm:col-span-2 sm:text-right">
                    {b.year}
                  </p>
                </div>
              </Container>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
