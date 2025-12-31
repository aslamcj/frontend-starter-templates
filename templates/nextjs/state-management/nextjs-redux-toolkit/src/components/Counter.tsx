'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { increment, decrement, reset, incrementAsync } from '@/store/slices/counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const status = useAppSelector((state) => state.counter.status);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <h2>Counter</h2>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttons}>
        <button className={styles.btnSecondary} onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className={styles.btnSecondary} onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button className={styles.btn} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.asyncSection}>
        <button
          className={styles.btn}
          onClick={() => dispatch(incrementAsync(1))}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Loading...' : 'Increment Async'}
        </button>
      </div>
    </div>
  );
}
