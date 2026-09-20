export default function ProcessRow({
  index,
  title,
  description,
  meta,
  active = false,
}: {
  index: string;
  title: string;
  description: string;
  meta?: string[];
  active?: boolean;
}) {
  return (
    <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-6 border-t border-line py-8 transition-colors duration-150 hover:border-line-strong md:grid-cols-[120px_minmax(0,1fr)_minmax(0,0.9fr)]">
      <div className={`t-label pt-1.5 ${active ? "text-signal" : "text-ink-faint"}`}>
        {index}
      </div>
      <div>
        <h3 className="t-display-m text-ink">{title}</h3>
        {meta && meta.length > 0 && (
          <div className="t-label-s mt-4 flex flex-wrap gap-4 text-ink-faint">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        )}
      </div>
      <div className="col-start-2 md:col-start-3">
        <p className="max-w-[60ch] leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  );
}
