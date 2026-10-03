import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { milestones } from "@/lib/data";

export default function Legacy() {
  return (
    <section id="legacy" className="scroll-mt-20 bg-ink py-28 text-ivory sm:py-36">
      <Container>
        <Reveal>
          <SectionLabel text="Our Legacy" dark />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] text-ivory text-balance sm:text-6xl">
            Six decades of building Mumbai, one landmark at a time.
          </h2>
        </Reveal>
      </Container>

      <div className="mt-24 sm:mt-32">
        {milestones.map((m, i) => {
          const reverse = i % 2 === 1;
          return (
            <Container key={m.year} className="relative">
              <div
                className={`grid items-center gap-10 border-t border-ivory/10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 ${
                  reverse ? "" : ""
                }`}
              >
                <div
                  className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
                >
                  <Reveal>
                    <span className="font-serif text-2xl text-brass sm:text-3xl">
                      {m.year}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory sm:text-4xl">
                      {m.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ivory/55">
                      {m.description}
                    </p>
                  </Reveal>
                </div>

                <div
                  className={`lg:col-span-6 ${reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
                >
                  <Reveal delay={0.15}>
                    <div className="img-hover relative aspect-[16/10] w-full">
                      {m.image && (
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover grayscale-[15%]"
                        />
                      )}
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>
          );
        })}
      </div>

      <Container>
        <div className="border-t border-ivory/10 pt-16 text-center sm:pt-24">
          <Reveal>
            <p className="label text-ivory/40">Today</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif text-[clamp(4rem,14vw,10rem)] leading-none text-ivory">
              65<span className="text-brass">+</span>
            </p>
            <p className="label mt-4 text-ivory/60">Years, built on principles</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
