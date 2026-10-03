export default function SectionLabel({
  index,
  text,
  dark = false,
}: {
  index?: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {index && (
        <span className={`label ${dark ? "text-ivory/40" : "text-stone"}`}>
          {index}
        </span>
      )}
      {index && (
        <span className={`h-px w-8 ${dark ? "bg-ivory/30" : "bg-stone-light"}`} />
      )}
      <span className="label text-brass">{text}</span>
    </div>
  );
}
