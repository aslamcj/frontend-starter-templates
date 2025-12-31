import { useState } from 'react';
import { lightTheme } from './styles/theme.css';
import * as styles from './App.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={`${lightTheme} ${styles.container}`}>
      <h1 className={styles.title}>React + Vanilla Extract</h1>
      <p style={{ textAlign: 'center', color: '#64748b' }}>
        Type-safe CSS with zero runtime
      </p>

      <div className={styles.card}>
        <h2>Counter</h2>
        <p className={styles.count}>{count}</p>
        <div className={styles.buttonGroup}>
          <button
            className={styles.button.secondary}
            onClick={() => setCount((c) => c - 1)}
          >
            Decrement
          </button>
          <button
            className={styles.button.primary}
            onClick={() => setCount((c) => c + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
