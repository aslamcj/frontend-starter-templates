import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Next.js + Webpack',
  description: 'Learn more about this Next.js boilerplate',
};

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: 'var(--spacing-xl)',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'inline-block',
          marginBottom: 'var(--spacing-lg)',
          color: 'var(--color-muted)',
        }}
      >
        ← Back to Home
      </Link>

      <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>About This Template</h1>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>What&apos;s Included</h2>
        <ul
          style={{
            listStyle: 'none',
            display: 'grid',
            gap: 'var(--spacing-sm)',
          }}
        >
          <li>✓ Next.js 15 with App Router</li>
          <li>✓ TypeScript with strict mode</li>
          <li>✓ ESLint with Next.js config</li>
          <li>✓ Prettier for formatting</li>
          <li>✓ CSS Modules support</li>
          <li>✓ Path aliases (@/)</li>
          <li>✓ Google Fonts (Inter)</li>
        </ul>
      </section>

      <section>
        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Why Webpack?</h2>
        <p style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
          Webpack is the default and most battle-tested bundler for Next.js. It
          offers maximum compatibility with the npm ecosystem and provides full
          control over the build configuration. While Turbopack is faster for
          development, Webpack remains the stable choice for production
          applications requiring complex build customizations.
        </p>
      </section>
    </main>
  );
}
