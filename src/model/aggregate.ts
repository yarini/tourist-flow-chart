import type { ChartRow, TouristRecord } from './types';

function emptyRow(year: number): ChartRow {
  return {
    year,
    rf: 0,
    cisCountries: 0,
    otherCountries: 0,
    total: 0,
  };
}

export function getChartRows(records: readonly TouristRecord[]): ChartRow[] {
  const totalsByYear = new Map<number, ChartRow>();

  for (const record of records) {
    if (record.children) {
      continue;
    }

    let totals = totalsByYear.get(record.year);

    if (!totals) {
      totals = emptyRow(record.year);
      totalsByYear.set(record.year, totals);
    }

    totals[record.category] += record.count;
    totals.total += record.count;
  }

  return [...totalsByYear.values()].sort((a, b) => a.year - b.year);
}
