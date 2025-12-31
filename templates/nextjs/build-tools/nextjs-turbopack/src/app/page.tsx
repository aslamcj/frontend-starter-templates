import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Next.js 15 + <span className={styles.highlight}>Webpack</span>
        </h1>
        <p className={styles.description}>
          A production-ready Next.js boilerplate with the standard Webpack
          bundler for maximum compatibility and configuration control.
        </p>

        <div className={styles.cta}>
          <Link href="/about" className={styles.button}>
            Get Started
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonOutline}
          >
            Documentation
          </a>
        </div>
      </div>

      <section className={styles.features}>
        <h2>Features</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Next.js 15</h3>
            <p>App Router, Server Components, and all the latest features.</p>
          </div>
          <div className={styles.card}>
            <h3>Webpack</h3>
            <p>Standard bundler with full configuration control.</p>
          </div>
          <div className={styles.card}>
            <h3>TypeScript</h3>
            <p>Strict type checking for better code quality.</p>
          </div>
          <div className={styles.card}>
            <h3>ESLint</h3>
            <p>Next.js ESLint configuration for best practices.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
