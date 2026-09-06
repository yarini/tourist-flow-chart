import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import {
  CAGR_COLOR,
  CAGR_LABEL,
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  TOURIST_CATEGORIES,
  getChartRows,
  touristRecords,
} from '../../model';

import { ChartTooltip } from './chart-tooltip';
import styles from './tourist-flow-chart.module.css';
import { YearTick } from './year-tick';

const data = getChartRows(touristRecords);

type TouristFlowChartProps = {
  selectedYear: number | null;
  onYearSelect: (year: number) => void;
};

export function TouristFlowChart({ selectedYear, onYearSelect }: TouristFlowChartProps) {
  const handleBarClick = (item: { payload?: { year?: unknown } }) => {
    const year = item.payload?.year;

    if (typeof year === 'number') {
      onYearSelect(year);
    }
  };

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={(props) => <YearTick {...props} selectedYear={selectedYear} />} />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Legend />
          <Tooltip shared={false} animationDuration={0} content={ChartTooltip} />
          {TOURIST_CATEGORIES.map((category) => (
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
          ))}
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
  );
}
