# React + TanStack Query

React 19 with TanStack Query (React Query) for server state management.

## Features

- ⚛️ React 19 with TypeScript
- 🔄 TanStack Query 5 for data fetching
- 📦 Automatic caching and background updates
- ⚡ Vite 6 for fast development
- 🛠️ DevTools included

## Quick Start

```bash
pnpm install
pnpm dev
```

## TanStack Query Concepts

### Setup

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```

### useQuery - Fetching Data

```typescript
import { useQuery } from '@tanstack/react-query';

function Posts() {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],        // Unique key for caching
    queryFn: fetchPosts,        // Function that returns a promise
    staleTime: 5 * 60 * 1000,   // Consider fresh for 5 min
    enabled: true,              // Conditionally enable/disable
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### useMutation - Creating/Updating Data

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';

function CreatePost() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Failed to create:', error);
    },
  });

  return (
    <button
      onClick={() => mutation.mutate({ title: 'New Post' })}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? 'Creating...' : 'Create Post'}
    </button>
  );
}
```

### Query Key Factory

```typescript
// Organize query keys for cache management
export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (filters: object) => [...postKeys.lists(), filters] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (id: number) => [...postKeys.details(), id] as const,
};

// Usage
useQuery({ queryKey: postKeys.detail(1), queryFn: () => fetchPost(1) });

// Invalidate all post queries
queryClient.invalidateQueries({ queryKey: postKeys.all });

// Invalidate only the list
queryClient.invalidateQueries({ queryKey: postKeys.lists() });
```

### Optimistic Updates

```typescript
const mutation = useMutation({
  mutationFn: updatePost,
  onMutate: async (newPost) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: ['posts', newPost.id] });

    // Snapshot previous value
    const previousPost = queryClient.getQueryData(['posts', newPost.id]);

    // Optimistically update
    queryClient.setQueryData(['posts', newPost.id], newPost);

    // Return context for rollback
    return { previousPost };
  },
  onError: (err, newPost, context) => {
    // Rollback on error
    queryClient.setQueryData(['posts', newPost.id], context?.previousPost);
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});
```

### Infinite Queries

```typescript
import { useInfiniteQuery } from '@tanstack/react-query';

function InfinitePosts() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', 'infinite'],
    queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    initialPageParam: 0,
  });

  return (
    <>
      {data?.pages.map((page) =>
        page.posts.map((post) => <Post key={post.id} {...post} />)
      )}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </button>
    </>
  );
}
```

## Project Structure

```
src/
├── api/
│   └── posts.ts         # API functions
├── hooks/
│   └── usePosts.ts      # Query hooks
├── App.tsx              # Main component
├── main.tsx             # Entry with QueryClient
└── index.css            # Styles
```

## When to Use TanStack Query

- Server state that needs caching
- Background data synchronization
- Optimistic updates
- Pagination and infinite scroll
- Offline support

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Learn More

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Query Invalidation](https://tanstack.com/query/latest/docs/guides/query-invalidation)
- [React Documentation](https://react.dev/)

## License

MIT
