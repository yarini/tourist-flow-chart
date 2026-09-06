import type { CategoryFilter } from './constants';
import type { ChartRow, TouristRecord } from './types';

type YearTotals = Omit<ChartRow, 'cagr'> & { previous: number };

function emptyRow(year: number): YearTotals {
  return {
    year,
    rf: 0,
    cisCountries: 0,
    otherCountries: 0,
    total: 0,
    previous: 0,
  };
}

export function calcCagr(current: number, previous: number): number | null {
  if (previous === 0) {
    return null;
  }

  return (current / previous) * 100 - 100;
}

export function getChartRows(
  records: readonly TouristRecord[],
  category: CategoryFilter = 'all',
  children = false
): ChartRow[] {
  const totalsByYear = new Map<number, YearTotals>();

  for (const year of new Set(records.map((record) => record.year))) {
    totalsByYear.set(year, emptyRow(year));
  }

  for (const record of records) {
    if (record.children !== children) {
      continue;
    }

    if (!children && category !== 'all' && record.category !== category) {
      continue;
    }

    const totals = totalsByYear.get(record.year);

    if (!totals) {
      continue;
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
