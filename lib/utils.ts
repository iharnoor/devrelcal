const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatMonth(monthKey: string): string {
  const [year, month] = monthKey.split("-").map(Number);
  return `${MONTH_NAMES[month - 1]} ${year}`;
}

/**
 * "Today" as YYYY-MM-DD in the Bay Area's own timezone — every event in this
 * app is Pacific-time. Using `now.toISOString()` instead would roll over to
 * the next calendar day mid-evening PT (since UTC is 7-8h ahead), hiding
 * still-happening events a few hours early.
 */
export function todayInPacific(now: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/**
 * True while an event's run hasn't fully finished yet — multi-day events stay
 * visible through their endDate, not just their start (sortDate).
 */
export function isUpcoming(
  event: { sortDate: string; endDate?: string },
  todayISO: string,
): boolean {
  return (event.endDate ?? event.sortDate) >= todayISO;
}

export function groupByMonth<T extends { month: string; sortDate: string }>(
  items: T[],
): { month: string; items: T[] }[] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const bucket = map.get(item.month) ?? [];
    bucket.push(item);
    map.set(item.month, bucket);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, items]) => ({
      month,
      items: items.sort((a, b) => a.sortDate.localeCompare(b.sortDate)),
    }));
}
