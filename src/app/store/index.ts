import { configureStore } from '@reduxjs/toolkit';

import { chartReducer } from './chart-slice';

export {
  selectIsChildMode,
  selectSelectedCategory,
  selectSelectedYear,
  setSelectedCategory,
  toggleChildMode,
  toggleSelectedYear,
} from './chart-slice';
export { useAppDispatch, useAppSelector } from './hooks';

export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
