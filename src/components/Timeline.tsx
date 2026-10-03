import { Milestone } from "@/lib/data";

export default function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className="relative border-s border-line pl-8">
      {items.map((m) => (
        <li key={m.title} className="mb-10 last:mb-0">
          <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-paper bg-brass" />
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brass-dark">
            {m.year}
          </p>
          <h3 className="mt-1 font-serif text-xl text-ink">{m.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {m.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
