export const TOURIST_CATEGORIES = ['rf', 'cisCountries', 'otherCountries'] as const;

export type TouristCategory = (typeof TOURIST_CATEGORIES)[number];

export type CategoryFilter = 'all' | TouristCategory;

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

export const SINGLE_SERIES_COLOR = '#4F46E5';

export const CAGR_COLOR = '#FFFF00';

export const CAGR_LABEL = 'Темп прироста, % (год к году)';

export const ALL_CATEGORY_LABEL = 'Все туристы';
