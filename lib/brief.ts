import type { CalEvent } from "./events";
import type { VendorGroup } from "./vendorEvents";
import { hasPitchTopic } from "./topics";
import { todayInPacific } from "./utils";

export interface BriefItem {
  id: string;
  name: string;
  dateLabel: string;
  sortDate: string;
  source: "calendar" | "ecosystem";
  sourceLabel: string;
  location?: string;
  url: string;
  isPitchFit: boolean;
}

/** Everything happening in the next `days` days, across the calendar and ecosystem, for a fast weekly scan. */
export function getWeeklyBrief(
  scheduledEvents: CalEvent[],
  vendorGroups: VendorGroup[],
  today: Date,
  days = 7,
): BriefItem[] {
  const start = todayInPacific(today);
  const end = todayInPacific(new Date(today.getTime() + days * 24 * 60 * 60 * 1000));

  const fromCalendar: BriefItem[] = scheduledEvents
    .filter((e) => (e.endDate ?? e.sortDate) >= start && e.sortDate <= end)
    .map((e) => ({
      id: `cal-${e.id}`,
      name: e.name,
      dateLabel: e.dateLabel,
      sortDate: e.sortDate,
      source: "calendar",
      sourceLabel: e.category,
      location: e.location,
      url: e.sourceUrl,
      isPitchFit: hasPitchTopic(e.topics),
    }));

  const fromEcosystem: BriefItem[] = vendorGroups.flatMap((g) =>
    g.events
      .filter((e) => e.sortDate >= start && e.sortDate <= end)
      .map((e) => ({
        id: `eco-${e.id}`,
        name: `${g.company}: ${e.name}`,
        dateLabel: e.dateLabel,
        sortDate: e.sortDate,
        source: "ecosystem" as const,
        sourceLabel: e.format,
        location: e.location,
        url: e.sourceUrl,
        isPitchFit: hasPitchTopic(e.topics),
      })),
  );

  return [...fromCalendar, ...fromEcosystem].sort((a, b) => a.sortDate.localeCompare(b.sortDate));
}
