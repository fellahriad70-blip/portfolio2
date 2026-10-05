export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4">
        <span className="font-tech text-xs font-bold tracking-[0.3em] text-cyber">
          [{index}]
        </span>
        <span className="font-tech text-[10px] uppercase tracking-[0.35em] text-slate-500">
          {"//"} {eyebrow}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-edge to-transparent" />
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
        {title}
        <span className="text-cyber">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
