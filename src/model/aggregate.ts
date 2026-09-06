import type { ChartRow, TouristRecord } from './types';

type YearTotals = ChartRow & { previous: number };

function emptyRow(year: number): YearTotals {
  return {
    year,
    rf: 0,
    cisCountries: 0,
    otherCountries: 0,
    total: 0,
    cagr: null,
    previous: 0,
  };
}

export function calcCagr(current: number, previous: number): number | null {
  if (previous === 0) {
    return null;
  }

  return (current / previous) * 100 - 100;
}

export function getChartRows(records: readonly TouristRecord[]): ChartRow[] {
  const totalsByYear = new Map<number, YearTotals>();

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
    totals.previous += record.countPrevYear;
  }

  return [...totalsByYear.values()]
    .sort((a, b) => a.year - b.year)
    .map(({ previous, ...row }) => ({
      ...row,
      cagr: calcCagr(row.total, previous),
    }));
}
