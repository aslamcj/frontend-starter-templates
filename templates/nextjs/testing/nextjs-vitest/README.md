# Next.js + Vitest

Next.js 15 with Vitest for blazing fast unit testing.

## Features

- ⚛️ Next.js 15 with App Router
- ⚡ Vitest for fast testing
- 🔧 React Testing Library
- 📊 V8 coverage reports
- 🎨 Vitest UI
- ⚡ Turbopack for development

## Quick Start

```bash
pnpm install
pnpm dev
```

## Running Tests

```bash
# Run all tests (watch mode)
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

## Vitest Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
```

### Mocking Next.js

```typescript
// vitest.setup.ts
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));
```

### Testing Components

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '@/components/Counter';

describe('Counter', () => {
  it('increments on click', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });
});
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Counter.tsx
│   ├── Counter.module.css
│   └── __tests__/
│       └── Counter.test.tsx
└── hooks/
    └── __tests__/
```

## Vitest vs Jest

| Feature | Vitest | Jest |
|---------|--------|------|
| Speed | Very Fast | Fast |
| ESM Support | Native | Partial |
| HMR | Yes | No |
| UI Mode | Built-in | No |
| Watch Mode | Instant | Good |

## Available Scripts

- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Build for production
- `pnpm test` - Run tests (watch mode)
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage
- `pnpm lint` - Run ESLint

## Learn More

- [Vitest Documentation](https://vitest.dev/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Testing Library](https://testing-library.com/)

## License

MIT
