import { PostsList } from '@/components/PostsList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-500 to-purple-600 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
        Next.js + shadcn/ui + TanStack Query
      </h1>
      <p className="text-white/80 mb-8">With Playwright E2E testing</p>
      <PostsList />
    </main>
  );
}
