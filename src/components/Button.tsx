import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";
  const styles = {
    solid: "bg-ink text-paper hover:bg-brass-dark",
    outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
    ghost: "border border-paper/30 text-paper hover:bg-paper/10",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
