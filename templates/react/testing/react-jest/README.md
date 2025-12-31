# React + Jest

React 19 with Jest and React Testing Library for unit testing.

## Features

- ⚛️ React 19 with TypeScript
- 🧪 Jest 29 for testing
- 🔧 React Testing Library
- 📊 Code coverage reports
- ⚡ Vite 6 for development

## Quick Start

```bash
pnpm install
pnpm dev
```

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## Testing Patterns

### Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  it('renders with initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByTestId('count')).toHaveTextContent('5');
  });

  it('increments when + button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  it('calls callback on change', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Counter onCountChange={handleChange} />);

    await user.click(screen.getByRole('button', { name: /increment/i }));

    expect(handleChange).toHaveBeenCalledWith(1);
  });
});
```

### Hook Testing

```typescript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('increments count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('respects max value', () => {
    const { result } = renderHook(() => useCounter({ max: 5 }));

    act(() => {
      for (let i = 0; i < 10; i++) {
        result.current.increment();
      }
    });

    expect(result.current.count).toBe(5);
  });
});
```

### Utility Function Testing

```typescript
import { add, divide } from './math';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
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
├── setupTests.ts        # Test setup and matchers
├── App.tsx
└── main.tsx
```

## Jest Configuration

```typescript
// jest.config.ts
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
```

## Common Matchers

```typescript
// DOM matchers (from @testing-library/jest-dom)
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toBeEnabled();
expect(element).toHaveTextContent('text');
expect(element).toHaveClass('className');
expect(input).toHaveValue('value');

// Jest matchers
expect(value).toBe(expected);
expect(value).toEqual(expected);
expect(fn).toHaveBeenCalled();
expect(fn).toHaveBeenCalledWith(arg);
expect(() => fn()).toThrow('error');
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage
- `pnpm lint` - Run ESLint

## Learn More

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)

## License

MIT
