'use client';

import { useCounterStore } from '@/store/useCounterStore';
import styles from './Counter.module.css';

export function Counter() {
  const { count, isLoading, increment, decrement, reset, incrementAsync } =
    useCounterStore();

  return (
    <div className={styles.card}>
      <h2>Counter</h2>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttons}>
        <button className={styles.btnSecondary} onClick={decrement}>
          -
        </button>
        <button className={styles.btnSecondary} onClick={reset}>
          Reset
        </button>
        <button className={styles.btn} onClick={increment}>
          +
        </button>
      </div>
      <div className={styles.asyncSection}>
        <button
          className={styles.btn}
          onClick={incrementAsync}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Increment Async'}
        </button>
      </div>
    </div>
  );
}
