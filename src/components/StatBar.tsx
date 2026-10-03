const stats = [
  { value: "65+", label: "Years in business" },
  { value: "100+", label: "Projects delivered" },
  { value: "20M+", label: "Sq. ft. developed" },
  { value: "6", label: "Business verticals" },
  { value: "100%", label: "Debt-free" },
];

export default function StatBar() {
  return (
    <div className="grid grid-cols-2 gap-8 border-y border-line/80 py-10 sm:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="font-serif text-3xl text-ink sm:text-4xl">{s.value}</p>
          <p className="mt-1 text-xs tracking-wide text-ink-soft uppercase">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
