import { useState } from 'react';
import styles from './App.module.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React + CSS Modules</h1>
      <p style={{ textAlign: 'center', color: '#64748b' }}>
        Scoped CSS with zero runtime overhead
      </p>

      <div className={styles.card}>
        <h2>Counter</h2>
        <p className={styles.count}>{count}</p>
        <div className={styles.buttonGroup}>
          <button
            className={styles.buttonSecondary}
            onClick={() => setCount((c) => c - 1)}
          >
            Decrement
          </button>
          <button className={styles.button} onClick={() => setCount((c) => c + 1)}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
