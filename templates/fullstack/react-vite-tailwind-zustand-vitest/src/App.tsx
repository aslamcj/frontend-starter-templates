import { Counter } from './components/Counter';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-blue-600 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
        React + Vite + Tailwind + Zustand + Vitest
      </h1>
      <p className="text-white/80 mb-8">Full-stack React development</p>
      <Counter />
    </div>
  );
}
