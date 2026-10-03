import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import { verticals } from "@/lib/data";

export default function VerticalChapters({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  return (
    <section className="bg-ivory py-28 sm:py-36">
      {showIntro && (
        <Container>
          <Reveal>
            <SectionLabel text="What We Do" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] text-ink text-balance sm:text-6xl">
              Six businesses. One set of principles.
            </h2>
          </Reveal>
        </Container>
      )}

      <div className={showIntro ? "mt-20 sm:mt-28" : ""}>
        {verticals.map((v, i) => {
          const reverse = i % 2 === 1;
          const num = String(i + 1).padStart(2, "0");
          return (
            <Container key={v.slug} className="border-t border-line">
              <div className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
                <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                  <Reveal>
                    <span
                      className="font-serif text-6xl text-transparent sm:text-7xl"
                      style={{ WebkitTextStroke: "1px var(--color-stone-light)" }}
                    >
                      {num}
                    </span>
                    <h3 className="mt-2 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                      {v.name}
                    </h3>
                    <p className="mt-3 text-sm font-semibold tracking-wide text-brass uppercase">
                      {v.tagline}
                    </p>
                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-stone">
                      {v.summary}
                    </p>

                    {v.stats && (
                      <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                        {v.stats.slice(0, 2).map((s) => (
                          <div key={s.label}>
                            <dt className="text-xs text-stone-light">{s.label}</dt>
                            <dd className="font-serif text-xl text-ink">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    <Button
                      href={`/verticals/${v.slug}`}
                      variant="link"
                      className="mt-8"
                    >
                      Discover {v.name}
                    </Button>
                  </Reveal>
                </div>

                <div
                  className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
                >
                  <Reveal delay={0.15}>
                    <Link
                      href={`/verticals/${v.slug}`}
                      className="img-hover relative block aspect-[4/3] w-full sm:aspect-[16/9]"
                    >
                      <Image
                        src={v.image}
                        alt={v.name}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover"
                      />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </Container>
          );
        })}
      </div>
    </section>
  );
}
