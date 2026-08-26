"use client";

import { useMemo, useState } from "react";
import type { CalEvent, EventCategory, RecurringSeries, PastEvent } from "@/lib/events";
import { formatMonth, groupByMonth } from "@/lib/utils";
import { hasPitchTopic } from "@/lib/topics";
import { CategoryTag, StatusBadge, TopicBadges, categoryColor } from "./tags";

type Filter = "all" | EventCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "conference", label: "Conferences" },
  { id: "meetup", label: "Meetups" },
  { id: "hackathon", label: "Hackathons" },
];

export default function CalendarView({
  scheduledEvents,
  recurringSeries,
  pastEvents,
}: {
  scheduledEvents: CalEvent[];
  recurringSeries: RecurringSeries[];
  pastEvents: PastEvent[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [showTentative, setShowTentative] = useState(true);
  const [pitchOnly, setPitchOnly] = useState(false);
  const [showPast, setShowPast] = useState(false);

  const filteredScheduled = useMemo(
    () =>
      scheduledEvents.filter(
        (e) =>
          (filter === "all" || e.category === filter) &&
          (showTentative || e.status === "confirmed") &&
          (!pitchOnly || hasPitchTopic(e.topics)),
      ),
    [scheduledEvents, filter, showTentative, pitchOnly],
  );

  const filteredRecurring = useMemo(
    () => (pitchOnly ? [] : recurringSeries.filter((s) => filter === "all" || s.category === filter)),
    [recurringSeries, filter, pitchOnly],
  );

  const months = useMemo(() => groupByMonth(filteredScheduled), [filteredScheduled]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                filter === f.id
                  ? "border-ink bg-ink text-bg"
                  : "border-line text-ink-muted hover:border-ink hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-highlight">
            <input
              type="checkbox"
              checked={pitchOnly}
              onChange={(e) => setPitchOnly(e.target.checked)}
              className="h-3.5 w-3.5 accent-[var(--color-highlight)]"
            />
            Voice agents / STT only
          </label>
          <label className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <input
              type="checkbox"
              checked={showTentative}
              onChange={(e) => setShowTentative(e.target.checked)}
              className="h-3.5 w-3.5 accent-[var(--color-accent)]"
            />
            Include unconfirmed
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {months.length === 0 && pitchOnly && (
          <p className="font-body text-ink-muted">
            No Bay Area conference/meetup/hackathon in this list is tagged as a speech-to-text
            or voice-agent pitch right now — competitor-hosted sessions mostly live with the
            vendors themselves. See the{" "}
            <a href="#competitor-calendar" className="text-accent-2 underline decoration-dotted underline-offset-4 hover:text-ink">
              Competitor Calendar
            </a>{" "}
            above for those.
          </p>
        )}
        {months.length === 0 && !pitchOnly && (
          <p className="font-body text-ink-muted">No scheduled events match these filters.</p>
        )}
        {months.map(({ month, items }) => (
          <div key={month} className="grid grid-cols-1 gap-6 md:grid-cols-[9rem_1fr]">
            <h3 className="font-display text-3xl font-semibold uppercase tracking-tight text-ink md:sticky md:top-6 md:self-start">
              {formatMonth(month)}
            </h3>
            <ul className="flex flex-col gap-5 border-l border-line pl-6">
              {items.map((event) => (
                <li key={event.id} className="relative">
                  <span
                    className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg"
                    style={{ background: categoryColor(event.category) }}
                    aria-hidden
                  />
                  <div className="flex flex-col gap-1.5 rounded-lg bg-surface p-5 shadow-[var(--shadow-card)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <CategoryTag category={event.category} />
                        <StatusBadge status={event.status} note={event.note} />
                        <TopicBadges topics={event.topics} />
                      </div>
                      <span className="font-mono text-xs tabular-nums text-ink-muted">
                        {event.dateLabel}
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-ink">{event.name}</h4>
                    <p className="text-sm text-ink-muted">{event.location}</p>
                    <p className="text-sm leading-relaxed text-ink">{event.description}</p>
                    {event.note && (
                      <p className="text-xs italic text-warn">{event.note}</p>
                    )}
                    {event.topicNote && (
                      <p className="text-xs italic text-highlight">{event.topicNote}</p>
                    )}
                    <a
                      href={event.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 font-mono text-xs text-accent-2 underline decoration-dotted underline-offset-4 hover:text-ink w-fit"
                    >
                      {event.sourceLabel} ↗
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {filteredRecurring.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
              Always-on series
            </h3>
            <p className="font-mono text-xs text-ink-muted">no locked forward date — check source before planning</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecurring.map((series) => (
              <div
                key={series.id}
                className="flex flex-col gap-2 rounded-lg border border-line bg-surface-alt p-4"
              >
                <CategoryTag category={series.category} />
                <h4 className="font-display text-lg font-semibold text-ink">{series.name}</h4>
                <p className="font-mono text-xs text-ink-muted">{series.cadence}</p>
                <p className="text-sm text-ink-muted">{series.location}</p>
                <p className="text-sm leading-relaxed text-ink">{series.description}</p>
                {series.watchNote && (
                  <p className="text-xs italic leading-relaxed text-warn">{series.watchNote}</p>
                )}
                <a
                  href={series.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 font-mono text-xs text-accent-2 underline decoration-dotted underline-offset-4 hover:text-ink w-fit"
                >
                  {series.sourceLabel} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {pastEvents.length > 0 && (
        <div className="flex flex-col gap-3 border-t border-line pt-6">
          <button
            onClick={() => setShowPast((v) => !v)}
            className="flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink cursor-pointer"
          >
            {showPast ? "− Hide" : "+ Show"} earlier 2026 events (annual-recurrence reference)
          </button>
          {showPast && (
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {pastEvents.map((event) => (
                <li key={event.id} className="flex items-baseline justify-between gap-3 border-b border-line py-2 text-sm">
                  <span className="text-ink-muted">
                    <span className="text-ink">{event.name}</span> — {event.location}
                    {event.note && <span className="italic"> ({event.note})</span>}
                  </span>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-ink-muted">{event.dateLabel}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
