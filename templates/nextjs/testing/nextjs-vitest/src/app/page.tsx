import { Counter } from '@/components/Counter';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js + Vitest</h1>
      <p className={styles.subtitle}>Blazing fast testing</p>
      <Counter />
    </main>
  );
}
