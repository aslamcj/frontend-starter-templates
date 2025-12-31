import { Counter } from '@/components/Counter';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-500 to-green-600 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
        Next.js + Tailwind + Zustand + Jest
      </h1>
      <p className="text-white/80 mb-8">Full-stack Next.js development</p>
      <Counter />
    </main>
  );
}
