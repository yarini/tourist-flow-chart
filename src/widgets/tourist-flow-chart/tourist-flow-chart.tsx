import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import {
  ALL_CATEGORY_LABEL,
  CAGR_COLOR,
  CAGR_LABEL,
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  CHILDREN_LABEL,
  SINGLE_SERIES_COLOR,
  TOURIST_CATEGORIES,
  getChartRows,
  touristRecords,
  type CategoryFilter,
} from '../../model';
import { Button } from '../../shared/ui/button';
import { Select, type SelectOption } from '../../shared/ui/select';

import { ChartTooltip } from './chart-tooltip';
import styles from './tourist-flow-chart.module.css';
import { YearTick } from './year-tick';

const CATEGORY_OPTIONS: SelectOption<CategoryFilter>[] = [
  { value: 'all', label: ALL_CATEGORY_LABEL },
  ...TOURIST_CATEGORIES.map((category) => ({
    value: category,
    label: CATEGORY_LABELS[category],
  })),
];

type TouristFlowChartProps = {
  selectedYear: number | null;
  selectedCategory: CategoryFilter;
  isChildMode: boolean;
  onYearSelect: (year: number) => void;
  onCategoryChange: (category: CategoryFilter) => void;
  onChildModeToggle: () => void;
};

export function TouristFlowChart({
  selectedYear,
  selectedCategory,
  isChildMode,
  onYearSelect,
  onCategoryChange,
  onChildModeToggle,
}: TouristFlowChartProps) {
  const data = getChartRows(touristRecords, selectedCategory, isChildMode);
  const total = data.reduce((sum, row) => sum + row.total, 0);

  const handleBarClick = (item: { payload?: { year?: unknown } }) => {
    const year = item.payload?.year;

    if (typeof year === 'number') {
      onYearSelect(year);
    }
  };

  return (
    <div className={styles.root}>
      <p className={styles.total}>Итого: {total} млн</p>
      <div className={styles.toolbar}>
        {isChildMode ? null : (
          <Select value={selectedCategory} options={CATEGORY_OPTIONS} onChange={onCategoryChange} />
        )}
        <Button pressed={isChildMode} onClick={onChildModeToggle}>
          {CHILDREN_LABEL}
        </Button>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={(props) => <YearTick {...props} selectedYear={selectedYear} />} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" unit="%" />
            <Legend />
            <Tooltip shared={false} animationDuration={0} content={ChartTooltip} />
            {isChildMode ? (
              <Bar
                yAxisId="left"
                dataKey="total"
                name={CHILDREN_LABEL}
                legendType="circle"
                fill={SINGLE_SERIES_COLOR}
                cursor="pointer"
                onClick={handleBarClick}
              />
            ) : selectedCategory === 'all' ? (
              TOURIST_CATEGORIES.map((category) => (
                <Bar
                  key={category}
                  yAxisId="left"
                  dataKey={category}
                  name={CATEGORY_LABELS[category]}
                  legendType="circle"
                  stackId="arrivals"
                  fill={CATEGORY_COLORS[category]}
                  cursor="pointer"
                  onClick={handleBarClick}
                />
              ))
            ) : (
              <Bar
                yAxisId="left"
                dataKey="total"
                name={CATEGORY_LABELS[selectedCategory]}
                legendType="circle"
                fill={SINGLE_SERIES_COLOR}
                cursor="pointer"
                onClick={handleBarClick}
              />
            )}
            <Line
              yAxisId="right"
              dataKey="cagr"
              name={CAGR_LABEL}
              legendType="line"
              stroke={CAGR_COLOR}
              dot={{ r: 4 }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
