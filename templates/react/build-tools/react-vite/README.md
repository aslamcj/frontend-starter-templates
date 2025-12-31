# React + Vite Boilerplate

A modern, fast, and type-safe React boilerplate powered by Vite.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier)](https://prettier.io/)

## Features

- **React 19** - Latest React with new features and improvements
- **Vite 6** - Lightning-fast development with native ESM
- **TypeScript 5.7** - Strict type checking for better code quality
- **ESLint 9** - Flat config with React-specific rules
- **Prettier** - Consistent code formatting
- **Path Aliases** - Clean imports with `@/` prefix
- **Example Components** - Button, Card, Layout components
- **Custom Hooks** - useCounter, useLocalStorage examples
- **CSS Variables** - Theming support with light/dark mode
- **Optimized Build** - Code splitting and tree shaking

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0 | UI Library |
| Vite | 6.0.5 | Build Tool |
| TypeScript | 5.7.2 | Type Safety |
| ESLint | 9.17.0 | Linting |
| Prettier | 3.4.2 | Code Formatting |

---

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- pnpm 9.x (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Type check and build
pnpm build

# Preview production build
pnpm preview
```

---

## Project Structure

```
react-vite/
├── public/
│   └── favicon.svg           # App favicon
├── src/
│   ├── components/           # React components
│   │   ├── Button/
│   │   │   ├── Button.tsx    # Button component
│   │   │   ├── Button.css    # Button styles
│   │   │   └── index.ts      # Barrel export
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.css
│   │   │   └── index.ts
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Layout.css
│   │       └── index.ts
│   ├── hooks/                # Custom React hooks
│   │   ├── useCounter.ts
│   │   ├── useLocalStorage.ts
│   │   └── index.ts
│   ├── styles/               # Global styles
│   │   ├── index.css         # CSS reset & variables
│   │   └── App.css           # App-specific styles
│   ├── types/                # TypeScript types
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   │   └── helpers.ts
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   └── vite-env.d.ts         # Vite type declarations
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tsconfig.node.json        # Node TypeScript config
└── vite.config.ts            # Vite configuration
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server at http://localhost:5173 |
| `pnpm build` | Type check and build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint to check for issues |
| `pnpm lint:fix` | Run ESLint and fix auto-fixable issues |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check if code is formatted |
| `pnpm typecheck` | Run TypeScript type checking |

---

## Configuration

### Path Aliases

Import from `src/` using the `@/` prefix:

```typescript
// Instead of this:
import { Button } from '../../../components/Button';

// Use this:
import { Button } from '@/components/Button';
```

Configured in both `tsconfig.json` and `vite.config.ts`.

### Environment Variables

Create `.env` files for environment-specific configuration:

```bash
# .env.development
VITE_API_URL=http://localhost:3001
VITE_APP_TITLE=My App (Dev)

# .env.production
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

> **Note**: Only variables prefixed with `VITE_` are exposed to client code.

### TypeScript

Strict mode is enabled with additional checks:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### ESLint

Uses flat config with these plugins:

- `@typescript-eslint` - TypeScript rules
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-react-refresh` - Fast Refresh rules

---

## Vite Guide

### Why Vite?

Vite offers significant advantages over traditional bundlers:

| Feature | Vite | Webpack |
|---------|------|---------|
| Dev Server Start | ~300ms | ~2-5s |
| HMR Speed | Instant | 1-2s |
| Config Complexity | Low | High |
| Native ESM | Yes | No |

### How Vite Works

**Development**:
- Serves source files directly as native ES modules
- Browser requests modules on-demand
- Only transforms requested files
- HMR updates only affected modules

**Production**:
- Uses Rollup for optimized bundling
- Automatic code splitting
- Tree shaking
- Minification with esbuild

### Key Vite Features

#### 1. Native ESM

```typescript
// Vite serves this directly to browser in development
import { useState } from 'react';
import { Button } from '@/components/Button';
```

#### 2. Fast HMR

Changes reflect instantly without losing component state:

```tsx
// Edit this and see changes immediately
export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

#### 3. Built-in Features

```typescript
// JSON imports
import data from './data.json';

// CSS imports
import './styles.css';

// Static assets
import logo from './logo.svg';

// URL imports
import workerUrl from './worker.js?url';
```

#### 4. Glob Imports

```typescript
// Import all modules matching a pattern
const modules = import.meta.glob('./modules/*.ts');

// Eager loading
const modules = import.meta.glob('./modules/*.ts', { eager: true });
```

---

## Best Practices

### Component Structure

```tsx
// components/Button/Button.tsx
import type { ComponentProps } from 'react';
import './Button.css';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
}
```

### Custom Hooks

```tsx
// hooks/useToggle.ts
import { useState, useCallback } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}
```

### Type-safe Environment Variables

```typescript
// src/vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

---

## Common Patterns

### Data Fetching

```typescript
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export function useUser(id: number) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setLoading(true);
        const res = await fetch(`/api/users/${id}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
    return () => controller.abort();
  }, [id]);

  return { user, loading, error };
}
```

### Code Splitting

```typescript
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const Chart = lazy(() => import('./components/Chart'));

function Dashboard() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <Chart />
    </Suspense>
  );
}
```

---

## Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
pnpm dev --port 3000
```

**TypeScript errors not showing**
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

**HMR not working**
```typescript
// Ensure file has React components or HMR boundary
// Add this at the end of files if needed:
if (import.meta.hot) {
  import.meta.hot.accept();
}
```

**Path alias not resolving**
- Check both `tsconfig.json` and `vite.config.ts` have matching paths
- Restart the dev server after config changes

---

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/)

---

## License

MIT License - feel free to use this template for your projects!
