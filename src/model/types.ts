import type { TouristCategory } from './constants';

export type TouristRecord = {
  year: number;
  category: TouristCategory;
  region: string | null;
  country: string | null;
  children: boolean;
  count: number;
  countPrevYear: number;
};

export type ChartRow = {
  year: number;
  total: number;
} & Record<TouristCategory, number>;
