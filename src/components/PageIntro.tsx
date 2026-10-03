import Container from "./Container";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-ink pt-44 pb-20 text-ivory sm:pt-52 sm:pb-28">
      <Container>
        <Reveal>
          <SectionLabel text={label} dark />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] text-ivory text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/60">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
