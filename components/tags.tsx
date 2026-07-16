import type { EventCategory, EventStatus } from "@/lib/events";

const CATEGORY_LABEL: Record<EventCategory, string> = {
  conference: "Conference",
  meetup: "Meetup",
  hackathon: "Hackathon",
};

const CATEGORY_COLOR_VAR: Record<EventCategory, string> = {
  conference: "var(--color-accent)",
  meetup: "var(--color-accent-2)",
  hackathon: "var(--color-accent-3)",
};

export function categoryColor(category: EventCategory): string {
  return CATEGORY_COLOR_VAR[category];
}

export function CategoryTag({ category }: { category: EventCategory }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider"
      style={{ color: CATEGORY_COLOR_VAR[category] }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: CATEGORY_COLOR_VAR[category] }}
        aria-hidden
      />
      {CATEGORY_LABEL[category]}
    </span>
  );
}

export function StatusBadge({ status, note }: { status: EventStatus; note?: string }) {
  if (status === "confirmed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-good">
        Confirmed
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-warn"
      title={note}
    >
      Unconfirmed
    </span>
  );
}
