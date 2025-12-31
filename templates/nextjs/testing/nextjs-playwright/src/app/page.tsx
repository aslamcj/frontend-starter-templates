import { Counter } from '@/components/Counter';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js + Playwright</h1>
      <p className={styles.subtitle}>End-to-end testing</p>
      <Counter />
    </main>
  );
}
