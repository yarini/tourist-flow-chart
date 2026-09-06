import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CategoryFilter } from '../../model';

type ChartState = {
  selectedYear: number | null;
  selectedCategory: CategoryFilter;
  isChildMode: boolean;
};

const initialState: ChartState = {
  selectedYear: null,
  selectedCategory: 'all',
  isChildMode: false,
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
    toggleChildMode(state) {
      state.isChildMode = !state.isChildMode;
    },
  },
});

export const { setSelectedCategory, toggleChildMode, toggleSelectedYear } = chartSlice.actions;

export const selectSelectedYear = (state: { chart: ChartState }) => state.chart.selectedYear;
export const selectSelectedCategory = (state: { chart: ChartState }) => state.chart.selectedCategory;
export const selectIsChildMode = (state: { chart: ChartState }) => state.chart.isChildMode;

export const chartReducer = chartSlice.reducer;
