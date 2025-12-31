# React + Vitest

React 19 with Vitest for blazing fast unit testing.

## Features

- ⚛️ React 19 with TypeScript
- ⚡ Vitest for fast testing
- 🔧 React Testing Library
- 📊 V8 coverage reports
- 🎨 Vitest UI for visual testing
- ⚡ Vite 6 for development

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

## Vitest vs Jest

| Feature | Vitest | Jest |
|---------|--------|------|
| Speed | Very Fast | Fast |
| ESM Support | Native | Partial |
| Config | Vite-based | Separate |
| Watch Mode | Instant | Fast |
| UI | Built-in | Third-party |
| HMR in Tests | Yes | No |

## Testing Patterns

### Component Testing

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  it('renders initial value', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('increments on click', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('calls callback', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Counter onCountChange={handleChange} />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(handleChange).toHaveBeenCalledWith(1);
  });
});
```

### Hook Testing

```typescript
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('initializes with value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    expect(result.current.count).toBe(5);
  });

  it('increments', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

### Mocking

```typescript
import { describe, it, expect, vi } from 'vitest';

// Mock a module
vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'mocked' })),
}));

// Mock a function
const mockFn = vi.fn();
mockFn.mockReturnValue(42);

// Spy on a method
const spy = vi.spyOn(console, 'log');

// Timer mocks
vi.useFakeTimers();
vi.advanceTimersByTime(1000);
vi.useRealTimers();
```

## Project Structure

```
src/
├── components/
│   ├── Counter.tsx
│   └── __tests__/
│       └── Counter.test.tsx
├── hooks/
│   ├── useCounter.ts
│   └── __tests__/
│       └── useCounter.test.ts
├── utils/
│   ├── math.ts
│   └── __tests__/
│       └── math.test.ts
├── setupTests.ts
├── App.tsx
└── main.tsx
```

## Vitest Configuration

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    globals: true,              // Use global test functions
    environment: 'jsdom',       // DOM environment
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        global: { lines: 80 },
      },
    },
  },
});
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests (watch mode)
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage
- `pnpm lint` - Run ESLint

## Learn More

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest UI](https://vitest.dev/guide/ui.html)

## License

MIT
