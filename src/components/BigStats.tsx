import Container from "./Container";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { heroStat, supportingStats } from "@/lib/data";

export default function BigStats() {
  return (
    <section className="border-y border-line bg-ivory py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label text-stone">By the numbers</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 flex items-baseline gap-5">
                <CountUp
                  value={heroStat.value}
                  className="font-serif text-[clamp(5rem,16vw,11rem)] leading-[0.85] text-ink"
                />
                <span className="pb-3 font-serif text-3xl text-stone sm:pb-5 sm:text-4xl">
                  {heroStat.label}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
                Six decades of continuous presence in Mumbai real estate —
                long enough to have built the city, and still building it.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="rule" />
            {supportingStats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="flex items-center justify-between py-6 sm:py-7">
                  <span className="text-sm text-stone">{s.label}</span>
                  <CountUp
                    value={s.value}
                    className="font-serif text-3xl text-ink sm:text-4xl"
                  />
                </div>
                <div className="rule" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
