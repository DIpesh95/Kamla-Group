import Image from "next/image";
import Link from "next/link";
import { Vertical } from "@/lib/data";

export default function VerticalCard({ vertical }: { vertical: Vertical }) {
  return (
    <Link
      href={`/verticals/${vertical.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={vertical.image}
          alt={vertical.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-ink">{vertical.name}</h3>
        <p className="mt-1 text-sm font-medium text-brass-dark">
          {vertical.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {vertical.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-brass-dark">
          Learn more
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M1 8h13M9 2l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
