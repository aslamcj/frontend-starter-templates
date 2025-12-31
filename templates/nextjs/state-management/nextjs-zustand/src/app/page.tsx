import { Counter } from '@/components/Counter';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js + Zustand</h1>
      <p className={styles.subtitle}>Simple, fast state management</p>
      <Counter />
    </main>
  );
}
