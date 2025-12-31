import { useState } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Header } from '@/components/Header';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <Header />

      <main className="container-custom py-12">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            React + Tailwind CSS
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A utility-first CSS framework for rapid UI development
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-md">
          <h2 className="mb-4 text-xl font-semibold">Counter Example</h2>
          <p className="mb-6 text-4xl font-bold text-blue-600">{count}</p>
          <div className="flex justify-center gap-3">
            <Button
              variant="secondary"
              onClick={() => setCount((c) => c - 1)}
            >
              Decrement
            </Button>
            <Button variant="outline" onClick={() => setCount(0)}>
              Reset
            </Button>
            <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
          </div>
        </Card>

        <section className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Utility-First"
              description="Build designs directly in your markup with utility classes"
            />
            <FeatureCard
              title="Responsive"
              description="Mobile-first breakpoints for responsive design"
            />
            <FeatureCard
              title="Dark Mode"
              description="Built-in dark mode support with the dark: variant"
            />
            <FeatureCard
              title="Component-Friendly"
              description="Extract components when patterns emerge"
            />
            <FeatureCard
              title="Customizable"
              description="Extend and customize through configuration"
            />
            <FeatureCard
              title="Tiny in Production"
              description="Automatic removal of unused styles"
            />
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-gray-200 py-8 dark:border-gray-800">
        <p className="text-center text-sm text-gray-500">
          Built with React + Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
