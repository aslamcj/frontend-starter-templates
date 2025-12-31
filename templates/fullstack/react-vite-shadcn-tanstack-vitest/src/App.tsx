import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PostsList } from './components/PostsList';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-br from-violet-500 to-purple-600 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
          React + shadcn/ui + TanStack Query
        </h1>
        <p className="text-white/80 mb-8">Server state management</p>
        <PostsList />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
