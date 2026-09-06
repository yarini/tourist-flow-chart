import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { CATEGORY_COLORS, CATEGORY_LABELS, TOURIST_CATEGORIES, getChartRows, touristRecords } from '../../model';

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
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={(props) => <YearTick {...props} selectedYear={selectedYear} />} />
          <YAxis />
          <Legend iconType="circle" />
          <Tooltip shared={false} animationDuration={0} content={ChartTooltip} />
          {TOURIST_CATEGORIES.map((category) => (
            <Bar
              key={category}
              dataKey={category}
              name={CATEGORY_LABELS[category]}
              stackId="arrivals"
              fill={CATEGORY_COLORS[category]}
              cursor="pointer"
              onClick={handleBarClick}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
