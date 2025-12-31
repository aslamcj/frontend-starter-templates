# React + Jotai

React 19 with Jotai for atomic state management.

## Features

- ⚛️ React 19 with TypeScript
- 🔮 Jotai 2 for atomic state
- ⚡ Derived atoms for computed values
- 🔧 Vite 6 for fast development
- 📦 Zero boilerplate state

## Quick Start

```bash
pnpm install
pnpm dev
```

## Jotai Concepts

### Primitive Atoms

```typescript
import { atom } from 'jotai';

// Simple atom with initial value
export const countAtom = atom(0);
export const nameAtom = atom('');
export const isLoadingAtom = atom(false);
```

### Derived Atoms (Read-only)

```typescript
import { atom } from 'jotai';

export const countAtom = atom(0);

// Computed value that updates when countAtom changes
export const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Combine multiple atoms
export const summaryAtom = atom((get) => {
  const count = get(countAtom);
  const doubled = get(doubleCountAtom);
  return `Count: ${count}, Doubled: ${doubled}`;
});
```

### Writable Derived Atoms

```typescript
import { atom } from 'jotai';

export const countAtom = atom(0);

// Read and write derived atom
export const doubleCountAtom = atom(
  (get) => get(countAtom) * 2,
  (get, set, newValue: number) => {
    set(countAtom, newValue / 2);
  }
);
```

### Using Atoms in Components

```typescript
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { countAtom, doubleCountAtom } from './store/atoms';

function Counter() {
  // Read and write
  const [count, setCount] = useAtom(countAtom);

  // Read-only (no re-render on write)
  const doubleCount = useAtomValue(doubleCountAtom);

  // Write-only (no re-render on read)
  const setCount = useSetAtom(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
```

### Async Atoms

```typescript
import { atom } from 'jotai';

// Async atom for data fetching
export const userAtom = atom(async () => {
  const response = await fetch('/api/user');
  return response.json();
});

// Derived async atom
export const postsAtom = atom(async (get) => {
  const user = await get(userAtom);
  const response = await fetch(`/api/posts?userId=${user.id}`);
  return response.json();
});
```

### Atom with Storage (Persistence)

```typescript
import { atomWithStorage } from 'jotai/utils';

// Persists to localStorage
export const themeAtom = atomWithStorage('theme', 'light');
export const settingsAtom = atomWithStorage('settings', {
  notifications: true,
  language: 'en',
});
```

## Project Structure

```
src/
├── store/
│   └── atoms.ts      # Atom definitions
├── App.tsx           # Main component
├── main.tsx          # Entry point
└── index.css         # Styles
```

## Why Jotai?

| Feature | Jotai | Redux | Zustand |
|---------|-------|-------|---------|
| Bundle Size | ~3KB | ~15KB | ~3KB |
| Boilerplate | Minimal | High | Low |
| Learning Curve | Easy | Steep | Easy |
| Async Support | Built-in | Middleware | Built-in |
| DevTools | Yes | Yes | Yes |
| Re-renders | Atomic | Selector-based | Selector-based |

## When to Use Jotai

- **Fine-grained updates**: Only components using specific atoms re-render
- **Simple state**: When Redux feels like overkill
- **Derived state**: Computed values that depend on other atoms
- **Code splitting**: Atoms can be defined anywhere
- **Server components**: Works with React Server Components

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Learn More

- [Jotai Documentation](https://jotai.org/)
- [Jotai GitHub](https://github.com/pmndrs/jotai)
- [React Documentation](https://react.dev/)

## License

MIT
