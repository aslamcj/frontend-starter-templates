# Next.js + Jest

Next.js 15 with Jest and React Testing Library for unit testing.

## Features

- ⚛️ Next.js 15 with App Router
- 🧪 Jest 29 for testing
- 🔧 React Testing Library
- 📊 Code coverage reports
- ⚡ Turbopack for development

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

## Testing in Next.js

### Jest Configuration

```typescript
// jest.config.ts
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);
```

### Mocking Next.js Features

```typescript
// jest.setup.ts
import '@testing-library/jest-dom';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
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

### Testing Client Components

```typescript
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

### Testing with Router

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { NavigationButton } from '@/components/NavigationButton';

jest.mock('next/navigation');

describe('NavigationButton', () => {
  it('navigates on click', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    const user = userEvent.setup();
    render(<NavigationButton href="/about" />);

    await user.click(screen.getByRole('button'));

    expect(mockPush).toHaveBeenCalledWith('/about');
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
├── hooks/
│   └── __tests__/
└── utils/
    └── __tests__/
```

## Server vs Client Components

| Component Type | Testable with Jest? |
|----------------|---------------------|
| Client Components | Yes |
| Server Components | Limited (use E2E) |
| API Routes | Yes (with mocking) |

## Available Scripts

- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage
- `pnpm lint` - Run ESLint

## Learn More

- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing/jest)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

## License

MIT
