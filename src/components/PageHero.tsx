import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-ink py-20 sm:py-28">
      <Container>
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brass-light">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-paper sm:text-5xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/70">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
