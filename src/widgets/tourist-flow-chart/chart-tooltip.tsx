import type { TooltipContentProps } from 'recharts';

import styles from './chart-tooltip.module.css';

export function ChartTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active) {
    return null;
  }

  const item = payload[0];

  if (typeof item?.value !== 'number') {
    return null;
  }

  const isCagr = item.dataKey === 'cagr';

  return (
    <div className={styles.tooltip}>
      <p className={styles.year}>{label}</p>
      <p className={styles.value}>
        <span className={styles.swatch} style={{ backgroundColor: item.color ?? item.stroke }} />
        {item.name}: {isCagr ? `${item.value.toFixed(1)} %` : `${item.value} млн`}
      </p>
    </div>
  );
}
