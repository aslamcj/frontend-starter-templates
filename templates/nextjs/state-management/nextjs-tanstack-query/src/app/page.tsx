import { PostsList } from '@/components/PostsList';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js + TanStack Query</h1>
      <p className={styles.subtitle}>Server state management</p>
      <PostsList />
    </main>
  );
}
