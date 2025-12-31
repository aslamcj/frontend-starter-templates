'use client';

import { useState } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className={styles.counter}>
      <h2>Counter</h2>
      <p className={styles.count} data-testid="count">
        {count}
      </p>
      <div className={styles.buttons}>
        <button onClick={() => setCount((c) => c - 1)} aria-label="Decrement">
          -
        </button>
        <button onClick={() => setCount(initialValue)} aria-label="Reset">
          Reset
        </button>
        <button onClick={() => setCount((c) => c + 1)} aria-label="Increment">
          +
        </button>
      </div>
    </div>
  );
}
