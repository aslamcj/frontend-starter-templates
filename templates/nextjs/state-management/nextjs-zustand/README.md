# Next.js + Zustand

Next.js 15 with Zustand for simple, fast state management.

## Features

- ⚛️ Next.js 15 with App Router
- 🐻 Zustand 5 for state
- 💾 Persist middleware for localStorage
- ⚡ Turbopack for development
- 📦 Zero boilerplate

## Quick Start

```bash
pnpm install
pnpm dev
```

## Zustand in Next.js

### Creating a Store

```typescript
// src/store/useCounterStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
      }),
      { name: 'counter-storage' }
    )
  )
);
```

### Using in Client Components

```typescript
'use client';

import { useCounterStore } from '@/store/useCounterStore';

export function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### Hydration for SSR

```typescript
'use client';

import { useEffect, useState } from 'react';
import { useCounterStore } from '@/store/useCounterStore';

export function Counter() {
  const [isHydrated, setIsHydrated] = useState(false);
  const { count, increment } = useCounterStore();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

### Async Actions

```typescript
export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  isLoading: false,
  incrementAsync: async () => {
    set({ isLoading: true });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1, isLoading: false }));
  },
}));
```

### Selectors for Performance

```typescript
// Select only what you need to prevent unnecessary re-renders
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);

// Multiple selectors
const { count, increment } = useCounterStore((state) => ({
  count: state.count,
  increment: state.increment,
}));
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout (no provider needed!)
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Counter.tsx      # Client component
│   └── Counter.module.css
└── store/
    └── useCounterStore.ts  # Zustand store
```

## Why Zustand for Next.js?

| Feature | Benefit |
|---------|---------|
| No Provider | Works without context provider |
| Simple API | Minimal learning curve |
| Small Bundle | ~3KB gzipped |
| SSR Ready | Works with Next.js App Router |
| Middleware | Persist, devtools, immer support |

## Available Scripts

- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Learn More

- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

## License

MIT
