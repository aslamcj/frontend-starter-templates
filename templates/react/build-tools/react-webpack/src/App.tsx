import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { useCounter } from '@/hooks/useCounter';
import './styles/App.css';

/**
 * Main application component
 * Demonstrates the use of custom components and hooks
 */
export function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="app">
      <Header />

      <main className="main">
        <h1>React + Vite + TypeScript</h1>
        <p className="description">
          A modern, fast, and type-safe React boilerplate powered by Vite.
        </p>

        <Card title="Counter Example" className="counter-card">
          <p className="counter-value">Count: {count}</p>
          <div className="button-group">
            <Button onClick={decrement} variant="secondary">
              Decrement
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
            <Button onClick={increment} variant="primary">
              Increment
            </Button>
          </div>
        </Card>

        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>React 19 with latest features</li>
            <li>Vite 6 for lightning-fast development</li>
            <li>TypeScript with strict mode</li>
            <li>ESLint 9 with flat config</li>
            <li>Prettier for code formatting</li>
            <li>Path aliases (@/) configured</li>
            <li>Example components and hooks</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
