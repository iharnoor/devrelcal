"use client";

import { useMemo, useState } from "react";
import type { VendorGroup, VendorEventFormat } from "@/lib/vendorEvents";
import { hasPitchTopic } from "@/lib/topics";
import { TopicBadges } from "./tags";

const FORMAT_COLOR: Record<VendorEventFormat, string> = {
  "in-person": "var(--color-accent)",
  virtual: "var(--color-accent-2)",
  hybrid: "var(--color-accent-3)",
};

const FORMAT_LABEL: Record<VendorEventFormat, string> = {
  "in-person": "In-person",
  virtual: "Virtual",
  hybrid: "Hybrid",
};

function FormatTag({ format }: { format: VendorEventFormat }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider"
      style={{ color: FORMAT_COLOR[format] }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: FORMAT_COLOR[format] }} aria-hidden />
      {FORMAT_LABEL[format]}
    </span>
  );
}

export default function EcosystemView({ groups }: { groups: VendorGroup[] }) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [ragOnly, setRagOnly] = useState(false);

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const displayGroups = useMemo(() => {
    if (!ragOnly) return groups;
    return groups
      .map((g) => ({ ...g, events: g.events.filter((e) => hasPitchTopic(e.topics)) }))
      .filter((g) => g.events.length > 0);
  }, [groups, ragOnly]);

  const sorted = [...displayGroups].sort((a, b) => b.events.length - a.events.length);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-highlight">
          <input
            type="checkbox"
            checked={ragOnly}
            onChange={(e) => setRagOnly(e.target.checked)}
            className="h-3.5 w-3.5 accent-[var(--color-highlight)]"
          />
          RAG / Vector DB / Graph only
        </label>
        <button
          onClick={() => setOpen(open.size === sorted.length ? new Set() : new Set(sorted.map((g) => g.id)))}
          className="font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink cursor-pointer"
        >
          {open.size === sorted.length && sorted.length > 0 ? "Collapse all" : "Expand all"}
        </button>
      </div>
      {ragOnly && sorted.length === 0 && (
        <p className="font-body text-ink-muted">No vendor events tagged RAG/vector-DB/graph right now.</p>
      )}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {sorted.map((group) => {
          const isOpen = open.has(group.id);
          const confirmed = group.events.filter((e) => e.status === "confirmed").length;
          const checkSource = group.events.filter((e) => e.status === "check-source").length;
          return (
            <div key={group.id} className="flex flex-col rounded-lg border border-line bg-surface">
              <button
                onClick={() => toggle(group.id)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left cursor-pointer"
              >
                <div>
                  <h4 className="font-display text-xl font-semibold text-ink">{group.company}</h4>
                  <p className="text-xs uppercase tracking-wide text-ink-muted">{group.category}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {group.events.length > 0 ? (
                    <span className="font-mono text-xs tabular-nums text-ink-muted">
                      {confirmed > 0 && <span className="text-good">{confirmed} confirmed</span>}
                      {confirmed > 0 && checkSource > 0 && " · "}
                      {checkSource > 0 && <span className="text-warn">{checkSource} unconfirmed</span>}
                    </span>
                  ) : (
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">Watchlist</span>
                  )}
                  <span className="text-ink-muted">{isOpen ? "−" : "+"}</span>
                </div>
              </button>
              {isOpen && (
                <div className="flex flex-col gap-3 border-t border-line p-4 pt-3">
                  {group.events.length === 0 && group.watchNote && (
                    <p className="text-sm leading-relaxed text-ink-muted italic">{group.watchNote}</p>
                  )}
                  {group.events.map((event) => (
                    <div key={event.id} className="flex flex-col gap-1 border-b border-line pb-3 last:border-b-0 last:pb-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <FormatTag format={event.format} />
                          {event.status === "check-source" && (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-warn">Unconfirmed</span>
                          )}
                          <TopicBadges topics={event.topics} />
                        </div>
                        <span className="font-mono text-xs tabular-nums text-ink-muted">{event.dateLabel}</span>
                      </div>
                      <p className="font-medium text-sm text-ink">{event.name}</p>
                      {event.location && <p className="text-xs text-ink-muted">{event.location}</p>}
                      <p className="text-sm text-ink-muted">{event.description}</p>
                      <a
                        href={event.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-0.5 font-mono text-xs text-accent-2 underline decoration-dotted underline-offset-4 hover:text-ink w-fit"
                      >
                        {event.sourceLabel} ↗
                      </a>
                    </div>
                  ))}
                  {group.events.length > 0 && group.watchNote && (
                    <p className="text-xs leading-relaxed text-ink-muted italic">{group.watchNote}</p>
                  )}
                  {group.events.length === 0 && (
                    <a
                      href={group.homepageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-accent-2 underline decoration-dotted underline-offset-4 hover:text-ink w-fit"
                    >
                      {group.homepageUrl.replace(/^https?:\/\//, "")} ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
