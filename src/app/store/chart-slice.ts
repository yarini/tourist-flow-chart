import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ChartState = {
  selectedYear: number | null;
};

const initialState: ChartState = {
  selectedYear: null,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    toggleSelectedYear(state, action: PayloadAction<number>) {
      state.selectedYear = state.selectedYear === action.payload ? null : action.payload;
    },
  },
});

export const { toggleSelectedYear } = chartSlice.actions;

export const selectSelectedYear = (state: { chart: ChartState }) => state.chart.selectedYear;

export const chartReducer = chartSlice.reducer;
