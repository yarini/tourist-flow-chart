import type { ReactNode } from 'react';

import styles from './button.module.css';

type ButtonProps = {
  children: ReactNode;
  pressed?: boolean;
  onClick: () => void;
};

export function Button({ children, pressed = false, onClick }: ButtonProps) {
  return (
    <button type="button" className={`${styles.button}${pressed ? ` ${styles.pressed}` : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}
