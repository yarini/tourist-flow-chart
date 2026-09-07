import type { XAxisTickContentProps } from 'recharts';

type YearTickProps = XAxisTickContentProps & {
  selectedYear: number | null;
};

export function YearTick({ x, y, payload, textAnchor, selectedYear }: YearTickProps) {
  const isSelected = payload.value === selectedYear;

  return (
    <text
      x={x}
      y={y}
      dy={16}
      textAnchor={textAnchor}
      fill={isSelected ? 'var(--chart-title)' : 'var(--chart-text)'}
      fontWeight={isSelected ? 700 : 400}
    >
      {payload.value}
    </text>
  );
}
