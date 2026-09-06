import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { CATEGORY_COLORS, CATEGORY_LABELS, TOURIST_CATEGORIES, getChartRows, touristRecords } from '../../model';

import { ChartTooltip } from './chart-tooltip';
import styles from './tourist-flow-chart.module.css';

const data = getChartRows(touristRecords);

export function TouristFlowChart() {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
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
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
