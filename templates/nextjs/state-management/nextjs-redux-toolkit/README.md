# Next.js + Redux Toolkit

Next.js 15 with Redux Toolkit for state management.

## Features

- ⚛️ Next.js 15 with App Router
- 🔧 Redux Toolkit 2 for state
- 📦 TypeScript strict mode
- ⚡ Turbopack for development
- 🎨 CSS Modules styling

## Quick Start

```bash
pnpm install
pnpm dev
```

## Redux in Next.js App Router

### Store Setup

```typescript
// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
```

### Store Provider (Client Component)

```typescript
// src/store/StoreProvider.tsx
'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, type AppStore } from './store';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
```

### Layout Integration

```typescript
// src/app/layout.tsx
import { StoreProvider } from '@/store/StoreProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```

### Typed Hooks

```typescript
// src/store/hooks.ts
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
```

### Client Components with Redux

```typescript
'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { increment, decrement } from '@/store/slices/counterSlice';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with StoreProvider
│   ├── page.tsx         # Home page (Server Component)
│   ├── page.module.css  # Page styles
│   └── globals.css      # Global styles
├── components/
│   ├── Counter.tsx      # Client component using Redux
│   └── Counter.module.css
└── store/
    ├── store.ts         # Store configuration
    ├── hooks.ts         # Typed hooks
    ├── StoreProvider.tsx # Client provider component
    └── slices/
        └── counterSlice.ts
```

## Server vs Client Components

| Component Type | Can Use Redux? | Use Case |
|----------------|----------------|----------|
| Server Component | ❌ No | Data fetching, SEO |
| Client Component | ✅ Yes | Interactive UI |

## Best Practices

1. **Server Components by default** - Only use 'use client' when needed
2. **Keep state minimal** - Don't duplicate server data
3. **Use selectors** - Prevent unnecessary re-renders
4. **Create store per request** - Avoid shared state between requests

## Available Scripts

- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Learn More

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Redux with Next.js](https://redux.js.org/usage/nextjs)

## License

MIT
