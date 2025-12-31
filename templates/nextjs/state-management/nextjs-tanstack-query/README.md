# Next.js + TanStack Query

Next.js 15 with TanStack Query for server state management.

## Features

- ⚛️ Next.js 15 with App Router
- 🔄 TanStack Query 5 for data fetching
- 📦 Automatic caching and refetching
- ⚡ Turbopack for development
- 🛠️ DevTools included

## Quick Start

```bash
pnpm install
pnpm dev
```

## TanStack Query in Next.js

### Query Provider Setup

```typescript
// src/components/QueryProvider.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            gcTime: 5 * 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```

### Layout Integration

```typescript
// src/app/layout.tsx
import { QueryProvider } from '@/components/QueryProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
```

### Data Fetching Hook

```typescript
// src/hooks/usePosts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('/api/posts');
      return res.json();
    },
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
```

### Client Component Usage

```typescript
'use client';

import { usePosts, useCreatePost } from '@/hooks/usePosts';

export function PostsList() {
  const { data, isLoading, error } = usePosts();
  const createPost = useCreatePost();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => createPost.mutate({ title: 'New Post' })}
        disabled={createPost.isPending}
      >
        Add Post
      </button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Prefetching on Server

```typescript
// src/app/posts/page.tsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchPosts } from '@/api/posts';
import { PostsList } from '@/components/PostsList';

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  );
}
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with QueryProvider
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── api/
│   └── posts.ts         # API functions
├── hooks/
│   └── usePosts.ts      # Query hooks
└── components/
    ├── QueryProvider.tsx
    └── PostsList.tsx
```

## Server Components + TanStack Query

| Pattern | Use Case |
|---------|----------|
| Server Component | Initial data fetch, SEO |
| Client + useQuery | Interactive updates, real-time |
| Prefetch + Hydration | Best of both worlds |

## Available Scripts

- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Learn More

- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TanStack Query + Next.js](https://tanstack.com/query/latest/docs/framework/react/guides/ssr)

## License

MIT
