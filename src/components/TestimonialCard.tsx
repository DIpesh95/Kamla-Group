import { Testimonial } from "@/lib/data";

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-7">
      <blockquote className="font-serif text-lg leading-snug text-ink">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="block font-semibold text-ink">{item.name}</span>
        {item.role && <span className="text-ink-soft">{item.role}</span>}
      </figcaption>
    </figure>
  );
}
