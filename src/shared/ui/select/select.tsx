import styles from './select.module.css';

export type SelectOption<T extends string> = {
  value: T;
  label: string;
};

type SelectProps<T extends string> = {
  value: T;
  options: readonly SelectOption<T>[];
  onChange: (value: T) => void;
};

export function Select<T extends string>({ value, options, onChange }: SelectProps<T>) {
  const selectedLabel = options.find((option) => option.value === value)?.label ?? value;

  return (
    <div className={styles.wrap}>
      <span className={styles.sizer} aria-hidden>
        {selectedLabel}
      </span>
      <select
        className={styles.select}
        value={value}
        onChange={(event) => {
          const option = options.find((item) => item.value === event.target.value);

          if (option) {
            onChange(option.value);
          }
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
