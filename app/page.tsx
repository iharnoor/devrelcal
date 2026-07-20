export const dynamic = "force-dynamic";

import ThemeToggle from "@/components/ThemeToggle";
import CalendarView from "@/components/CalendarView";
import EcosystemView from "@/components/EcosystemView";
import Playbook from "@/components/Playbook";
import WeeklyBrief from "@/components/WeeklyBrief";
import {
  scheduledEvents,
  recurringSeries,
  pastEvents2026,
  researchDate,
} from "@/lib/events";
import { vendorGroups } from "@/lib/vendorEvents";
import { getWeeklyBrief } from "@/lib/brief";
import { isUpcoming, todayInPacific } from "@/lib/utils";

function countBy(events: typeof scheduledEvents, series: typeof recurringSeries, category: "conference" | "meetup" | "hackathon") {
  const scheduled = events.filter((e) => e.category === category).length;
  const recurring = series.filter((s) => s.category === category).length;
  return scheduled + recurring;
}

export default function Home() {
  const now = new Date();
  const today = todayInPacific(now);

  // A day's events stay visible through their endDate, not just their start —
  // this is the one place "already happened" gets filtered, so it can't drift
  // out of sync the way manually pruning the data file did.
  const activeEvents = scheduledEvents.filter((e) => isUpcoming(e, today));
  const activeVendorGroups = vendorGroups.map((g) => ({
    ...g,
    events: g.events.filter((e) => isUpcoming(e, today)),
  }));

  const upcoming = [...activeEvents].sort((a, b) => a.sortDate.localeCompare(b.sortDate))[0];
  const briefItems = getWeeklyBrief(activeEvents, activeVendorGroups, now);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-24 pt-8 sm:px-8">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight text-ink">
            Agent Builders
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            DevRel Calendar
          </span>
        </div>
        <nav className="flex items-center gap-5">
          <a
            href="#calendar"
            className="hidden font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink sm:inline"
          >
            Calendar
          </a>
          <a
            href="#ecosystem"
            className="hidden font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink sm:inline"
          >
            Ecosystem
          </a>
          <a
            href="#playbook"
            className="hidden font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-ink sm:inline"
          >
            Playbook
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <WeeklyBrief items={briefItems} />

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="max-w-2xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
            Every Bay Area room where agent builders gather.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted">
            Conferences, recurring meetups, and hackathons worth tracking for DevRel work with
            AI agent builders — plus a playbook for keeping a steady 2 in-person + 2 online
            cadence every month.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-accent/40 bg-surface p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Next up</p>
            {upcoming ? (
              <>
                <p className="mt-1 font-display text-lg font-semibold text-ink">{upcoming.name}</p>
                <p className="font-mono text-xs tabular-nums text-ink-muted">
                  {upcoming.dateLabel} · {upcoming.location}
                </p>
              </>
            ) : (
              <p className="mt-1 text-sm text-ink-muted">All tracked dates have passed — refresh sources.</p>
            )}
          </div>
          <div className="rounded-lg border border-line bg-surface p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Conferences</p>
            <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-ink">
              {countBy(activeEvents, recurringSeries, "conference")}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Meetups</p>
            <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-ink">
              {countBy(activeEvents, recurringSeries, "meetup")}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Hackathons</p>
            <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-ink">
              {countBy(activeEvents, recurringSeries, "hackathon")}
            </p>
          </div>
        </div>
      </section>

      <section id="calendar" className="flex scroll-mt-8 flex-col gap-6">
        <div className="flex flex-col gap-2 border-b border-line pb-6">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
            Calendar
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
            Researched as of{" "}
            {new Date(researchDate + "T00:00:00").toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            . Items marked <span className="text-warn">unconfirmed</span> are inferred from past
            patterns or not yet locked in by the organizer — verify at the source link before you
            plan around them.
          </p>
        </div>
        <CalendarView
          scheduledEvents={activeEvents}
          recurringSeries={recurringSeries}
          pastEvents={pastEvents2026}
        />
      </section>

      <section id="ecosystem" className="flex scroll-mt-8 flex-col gap-6">
        <div className="flex flex-col gap-2 border-b border-line pb-6">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
            Ecosystem
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
            Events organized by RAG, vector-database, and GraphRAG vendors — competitive and
            partnership tracking, not agent-builder outreach. Includes virtual and global events,
            not just Bay Area. Companies with nothing confirmed are kept as a watchlist rather than
            dropped.
          </p>
        </div>
        <EcosystemView groups={activeVendorGroups} />
      </section>

      <section id="playbook" className="flex scroll-mt-8 flex-col gap-6">
        <div className="flex flex-col gap-2 border-b border-line pb-6">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink">
            Playbook
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
            The goal: <span className="text-ink">2 in-person + 2 online events every month.</span>{" "}
            Use the events above to anchor the in-person slots, and rotate through this idea bank
            so the cadence doesn&apos;t collapse into the same four events on repeat.
          </p>
        </div>
        <Playbook />
      </section>

      <footer className="flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-ink-muted">
        <p>
          Event data hand-researched from organizer sources on {researchDate} — dates and venues
          change; re-check before committing sponsorship dollars or travel.
        </p>
      </footer>
    </div>
  );
}
