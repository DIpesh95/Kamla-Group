import Link from "next/link";
import { ReactNode } from "react";

function Arrow() {
  return (
    <svg width="15" height="11" viewBox="0 0 16 16" fill="none">
      <path
        d="M1 8h13M9 2l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "fill",
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "fill" | "outline" | "link";
  tone?: "dark" | "light";
  className?: string;
}) {
  if (variant === "link") {
    return (
      <Link
        href={href}
        className={`link-cta ${tone === "light" ? "text-ivory" : "text-ink"} ${className}`}
      >
        {children}
        <Arrow />
      </Link>
    );
  }

  const fill =
    tone === "light"
      ? "bg-ivory text-ink hover:bg-brass hover:text-ink"
      : "bg-ink text-ivory hover:bg-brass hover:text-ink";
  const outline =
    tone === "light"
      ? "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10"
      : "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 px-7 py-4 font-sans text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-400 ${
        variant === "fill" ? fill : outline
      } ${className}`}
    >
      {children}
      <span className="transition-transform duration-400 group-hover:translate-x-1">
        <Arrow />
      </span>
    </Link>
  );
}
