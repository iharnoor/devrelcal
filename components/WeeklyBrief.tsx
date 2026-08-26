import type { BriefItem } from "@/lib/brief";

export default function WeeklyBrief({ items }: { items: BriefItem[] }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface-alt p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
          This Week
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
          next 7 days, fast scan
        </p>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-ink-muted">Nothing tracked in the next 7 days — check the full calendar below.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-line">
          {items.map((item) => (
            <li key={item.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="shrink-0 font-mono text-xs tabular-nums text-ink-muted">{item.dateLabel}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate font-medium text-sm text-ink hover:text-accent-2 hover:underline"
                >
                  {item.name}
                </a>
                {item.isPitchFit && (
                  <span className="shrink-0 rounded-full border border-highlight/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-highlight">
                    Pitch fit
                  </span>
                )}
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                {item.source === "calendar" ? item.sourceLabel : `${item.sourceLabel} · competitors`}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
