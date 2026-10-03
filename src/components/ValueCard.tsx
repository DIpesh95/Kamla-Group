import { Value } from "@/lib/data";

export default function ValueCard({ value, index }: { value: Value; index: number }) {
  return (
    <div className="rounded-2xl border border-paper/15 bg-paper/5 p-6">
      <span className="font-serif text-sm text-brass-light">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-2 font-serif text-xl text-paper">{value.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-paper/60">
        {value.description}
      </p>
    </div>
  );
}
