type PlaceholderMediaProps = {
  label: string;
  className?: string;
  aspect?: string;
};

export function PlaceholderMedia({
  label,
  className = "",
  aspect = "aspect-[3/4]",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-[22px] bg-black/5 transition-transform duration-500 ease-out hover:scale-[1.04] ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="px-4 text-center text-xs uppercase tracking-[0.2em] text-black/50">
        {label}
      </span>
    </div>
  );
}
