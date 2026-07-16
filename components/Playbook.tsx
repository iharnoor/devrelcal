"use client";

import { useState } from "react";
import { cadenceTemplate, ideaBank, type EventMode, type Effort } from "@/lib/playbook";

const EFFORT_LABEL: Record<Effort, string> = {
  low: "Low lift",
  medium: "Medium lift",
  high: "High lift",
};

const MODE_ACCENT: Record<EventMode, string> = {
  "in-person": "var(--color-accent)",
  online: "var(--color-accent-2)",
};

function ModeChip({ mode }: { mode: EventMode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider"
      style={{ color: MODE_ACCENT[mode] }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: MODE_ACCENT[mode] }} aria-hidden />
      {mode === "in-person" ? "In-person" : "Online"}
    </span>
  );
}

export default function Playbook() {
  const [mode, setMode] = useState<"all" | EventMode>("all");
  const ideas = ideaBank.filter((i) => mode === "all" || i.mode === mode);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
            A monthly rhythm that lands on 2 + 2
          </h3>
          <p className="font-mono text-xs text-ink-muted">one suggested week-by-week template</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cadenceTemplate.map((slot) => (
            <div
              key={slot.week}
              className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">{slot.week}</span>
                <ModeChip mode={slot.mode} />
              </div>
              <h4 className="font-display text-lg font-semibold text-ink">{slot.label}</h4>
              <p className="text-sm leading-relaxed text-ink-muted">{slot.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
            Idea bank — rotate so it doesn&apos;t feel like reruns
          </h3>
          <div className="flex flex-wrap gap-2">
            {(["all", "in-person", "online"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  mode === m
                    ? "border-ink bg-ink text-bg"
                    : "border-line text-ink-muted hover:border-ink hover:text-ink"
                }`}
              >
                {m === "all" ? "All" : m === "in-person" ? "In-person" : "Online"}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <div key={idea.id} className="flex flex-col gap-2.5 rounded-lg border border-line bg-surface p-5">
              <div className="flex items-center justify-between gap-2">
                <ModeChip mode={idea.mode} />
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                  {EFFORT_LABEL[idea.effort]}
                </span>
              </div>
              <h4 className="font-display text-xl font-semibold text-ink">{idea.title}</h4>
              <p className="text-xs uppercase tracking-wide text-ink-muted">{idea.cadenceFit}</p>
              <p className="text-sm leading-relaxed text-ink">{idea.description}</p>
              <p className="text-sm leading-relaxed text-ink-muted italic">{idea.example}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
