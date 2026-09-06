export type TouristCategory = 'rf' | 'cisCountries' | 'otherCountries';

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
  rf: number;
  cisCountries: number;
  otherCountries: number;
  total: number;
};
