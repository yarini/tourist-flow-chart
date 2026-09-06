import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CategoryFilter } from '../../model';

type ChartState = {
  selectedYear: number | null;
  selectedCategory: CategoryFilter;
};

const initialState: ChartState = {
  selectedYear: null,
  selectedCategory: 'all',
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    toggleSelectedYear(state, action: PayloadAction<number>) {
      state.selectedYear = state.selectedYear === action.payload ? null : action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<CategoryFilter>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory, toggleSelectedYear } = chartSlice.actions;

export const selectSelectedYear = (state: { chart: ChartState }) => state.chart.selectedYear;
export const selectSelectedCategory = (state: { chart: ChartState }) => state.chart.selectedCategory;

export const chartReducer = chartSlice.reducer;
