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
