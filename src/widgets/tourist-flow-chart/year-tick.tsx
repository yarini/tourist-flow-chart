import type { XAxisTickContentProps } from 'recharts';

type YearTickProps = XAxisTickContentProps & {
  selectedYear: number | null;
};

export function YearTick({ x, y, payload, fill, textAnchor, selectedYear }: YearTickProps) {
  const isSelected = payload.value === selectedYear;

  return (
    <text
      x={x}
      y={y}
      dy={16}
      textAnchor={textAnchor}
      fill={isSelected ? 'var(--text-h)' : fill}
      fontWeight={isSelected ? 700 : 400}
    >
      {payload.value}
    </text>
  );
}
