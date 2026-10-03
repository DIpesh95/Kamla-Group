export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] uppercase ${
            light ? "text-brass-light" : "text-brass-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl leading-tight text-balance ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-paper/80" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
