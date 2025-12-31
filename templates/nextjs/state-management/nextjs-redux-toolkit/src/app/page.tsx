import { Counter } from '@/components/Counter';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js + Redux Toolkit</h1>
      <p className={styles.subtitle}>Server-side rendering with Redux</p>
      <Counter />
    </main>
  );
}
