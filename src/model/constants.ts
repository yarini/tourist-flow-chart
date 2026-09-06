import type { TouristCategory } from './types';

export const TOURIST_CATEGORIES: readonly TouristCategory[] = ['rf', 'cisCountries', 'otherCountries'];

export const CATEGORY_LABELS = {
  rf: 'Граждане РФ',
  cisCountries: 'Граждане стран ближнего зарубежья',
  otherCountries: 'Граждане стран дальнего зарубежья',
} as const;

export const CATEGORY_COLORS = {
  rf: '#00FFFF',
  cisCountries: '#8A2BE2',
  otherCountries: '#FF69B4',
} as const;

export const SINGLE_SERIES_COLOR = '#4f46e5';
