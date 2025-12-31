import { Counter } from '@/components/Counter';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js + Jest</h1>
      <p className={styles.subtitle}>Unit testing for Next.js</p>
      <Counter />
    </main>
  );
}
