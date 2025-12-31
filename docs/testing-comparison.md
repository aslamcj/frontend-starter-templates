# Testing Frameworks Comparison

A comprehensive comparison of testing frameworks and tools for React applications.

## Table of Contents

- [Overview](#overview)
- [Quick Comparison](#quick-comparison)
- [Detailed Analysis](#detailed-analysis)
  - [Jest](#jest)
  - [Vitest](#vitest)
  - [React Testing Library](#react-testing-library)
  - [Playwright](#playwright)
  - [Cypress](#cypress)
- [Testing Strategies](#testing-strategies)
- [Decision Guide](#decision-guide)
- [Best Practices](#best-practices)

---

## Overview

Testing in React applications typically involves:

| Type | Description | Tools |
|------|-------------|-------|
| **Unit Testing** | Test individual functions/components | Jest, Vitest |
| **Integration Testing** | Test component interactions | Testing Library |
| **E2E Testing** | Test full user flows | Playwright, Cypress |
| **Component Testing** | Test components in isolation | Playwright, Cypress, Storybook |

---

## Quick Comparison

| Feature | Jest | Vitest | Playwright | Cypress |
|---------|------|--------|------------|---------|
| **Type** | Unit/Integration | Unit/Integration | E2E/Component | E2E/Component |
| **Speed** | Moderate | Fast | Moderate | Moderate |
| **Configuration** | Medium | Low | Low | Low |
| **Browser Testing** | jsdom | jsdom/happy-dom | Real browsers | Real browsers |
| **Watch Mode** | Yes | Yes | Yes | Yes |
| **Parallel Execution** | Yes | Yes | Yes | Limited |
| **Snapshot Testing** | Yes | Yes | Yes | Yes |
| **Visual Testing** | Plugin | Plugin | Built-in | Plugin |
| **Mobile Testing** | No | No | Yes | Limited |
| **API Testing** | No | No | Yes | Yes |

---

## Detailed Analysis

### Jest

> **Recommendation**: Battle-tested choice for unit and integration testing

**Overview**

Jest is Facebook's JavaScript testing framework with a focus on simplicity. It comes with built-in assertions, mocking, and snapshot testing.

**Pros**
- Zero configuration for most projects
- Built-in code coverage
- Snapshot testing
- Powerful mocking capabilities
- Large ecosystem and community
- Great documentation

**Cons**
- Slower than Vitest
- Heavy bundle for simple projects
- ESM support still evolving
- jsdom can have limitations

**Configuration**

```javascript
// jest.config.js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

**Example Test**

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles', () => {
    render(<Button variant="primary">Primary</Button>);

    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

**Mocking**

```typescript
// Mocking modules
jest.mock('@/api/users', () => ({
  fetchUser: jest.fn(),
}));

// Mocking with implementation
import { fetchUser } from '@/api/users';

const mockFetchUser = fetchUser as jest.MockedFunction<typeof fetchUser>;

beforeEach(() => {
  mockFetchUser.mockResolvedValue({
    id: 1,
    name: 'John Doe',
  });
});

// Spying on methods
const consoleSpy = jest.spyOn(console, 'log');
expect(consoleSpy).toHaveBeenCalledWith('message');
```

---

### Vitest

> **Recommendation**: Best choice for Vite projects with Jest-compatible API

**Overview**

Vitest is a blazing-fast unit testing framework powered by Vite. It's designed to be a drop-in replacement for Jest with native ESM support.

**Pros**
- Extremely fast (uses Vite's transform)
- Native ESM support
- Jest-compatible API
- Watch mode is instant
- Built-in TypeScript support
- Shares Vite config

**Cons**
- Younger ecosystem
- Some Jest features missing
- Fewer plugins
- Less documentation

**Configuration**

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

**Example Test**

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    expect(container).toMatchSnapshot();
  });
});
```

**Mocking**

```typescript
// Mocking modules
vi.mock('@/api/users', () => ({
  fetchUser: vi.fn(),
}));

// Mocking with factory
vi.mock('@/api/users', async () => {
  const actual = await vi.importActual('@/api/users');
  return {
    ...actual,
    fetchUser: vi.fn(),
  };
});

// Spying
const spy = vi.spyOn(object, 'method');
expect(spy).toHaveBeenCalled();
```

---

### React Testing Library

> **Recommendation**: Essential companion for testing React components

**Overview**

React Testing Library encourages testing components the way users interact with them, focusing on behavior over implementation details.

**Pros**
- User-centric testing approach
- Discourages testing implementation details
- Great accessibility testing
- Framework agnostic core
- Excellent documentation
- Active community

**Cons**
- Learning curve for new concepts
- Some scenarios are harder to test
- Async testing can be tricky
- Limited for visual testing

**Setup**

```typescript
// setupTests.ts
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
```

**Query Priorities**

```typescript
// Priority order for queries (most to least preferred)

// 1. Accessible by Everyone
screen.getByRole('button', { name: 'Submit' });
screen.getByLabelText('Email');
screen.getByPlaceholderText('Enter email');
screen.getByText('Welcome');
screen.getByDisplayValue('current value');

// 2. Semantic Queries
screen.getByAltText('Profile picture');
screen.getByTitle('Close');

// 3. Test IDs (last resort)
screen.getByTestId('submit-button');
```

**Async Testing**

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('UserProfile', () => {
  it('loads and displays user data', async () => {
    render(<UserProfile userId={1} />);

    // Wait for loading to finish
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for content
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText('Name'), 'John');
    await user.type(screen.getByLabelText('Email'), 'john@example.com');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(screen.getByText('Form submitted!')).toBeInTheDocument();
    });
  });
});
```

**Custom Render**

```typescript
// test-utils.tsx
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/context/ThemeContext';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialTheme?: 'light' | 'dark';
}

function customRender(
  ui: React.ReactElement,
  options: CustomRenderOptions = {}
) {
  const { initialTheme = 'light', ...renderOptions } = options;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider initialTheme={initialTheme}>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { customRender as render };
```

---

### Playwright

> **Recommendation**: Best for E2E testing with real browser support

**Overview**

Playwright is Microsoft's E2E testing framework supporting all modern browsers with auto-wait and web-first assertions.

**Pros**
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile emulation
- Auto-wait for elements
- Network interception
- Parallel execution
- Visual comparison testing
- Component testing support

**Cons**
- Heavier than unit test frameworks
- Slower execution
- More complex setup
- Resource intensive

**Configuration**

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

**E2E Test Example**

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText('Welcome back')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('Email').fill('wrong@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  test('should logout successfully', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Then logout
    await page.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL('/login');
  });
});
```

**Component Testing**

```typescript
// Button.spec.tsx
import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './Button';

test.describe('Button', () => {
  test('renders correctly', async ({ mount }) => {
    const component = await mount(<Button>Click me</Button>);

    await expect(component).toContainText('Click me');
  });

  test('handles click events', async ({ mount }) => {
    let clicked = false;
    const component = await mount(
      <Button onClick={() => { clicked = true; }}>Click me</Button>
    );

    await component.click();

    expect(clicked).toBe(true);
  });

  test('visual regression', async ({ mount }) => {
    const component = await mount(<Button variant="primary">Primary</Button>);

    await expect(component).toHaveScreenshot('button-primary.png');
  });
});
```

**API Mocking**

```typescript
test('displays user data from API', async ({ page }) => {
  // Mock API response
  await page.route('**/api/users/1', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      }),
    });
  });

  await page.goto('/users/1');
  await expect(page.getByText('John Doe')).toBeVisible();
});
```

---

### Cypress

> **Recommendation**: Great for E2E testing with excellent developer experience

**Overview**

Cypress is a JavaScript-based E2E testing framework with a focus on developer experience and real-time reloading.

**Pros**
- Excellent developer experience
- Real-time reloading
- Time-travel debugging
- Automatic waiting
- Network stubbing
- Component testing

**Cons**
- Chrome-focused (other browsers supported)
- No native multi-tab support
- Can be slow for large suites
- Limited parallel execution in free tier

**Configuration**

```typescript
// cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // Node event listeners
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
```

**E2E Test Example**

```typescript
// cypress/e2e/auth.cy.ts
describe('Authentication', () => {
  it('should login successfully', () => {
    cy.visit('/login');

    cy.get('[data-testid="email-input"]').type('user@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="submit-button"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/login');

    cy.get('[data-testid="email-input"]').type('wrong@example.com');
    cy.get('[data-testid="password-input"]').type('wrongpassword');
    cy.get('[data-testid="submit-button"]').click();

    cy.contains('Invalid credentials').should('be.visible');
  });
});
```

**API Stubbing**

```typescript
describe('User Profile', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/users/1', {
      statusCode: 200,
      body: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      },
    }).as('getUser');
  });

  it('displays user data', () => {
    cy.visit('/users/1');
    cy.wait('@getUser');
    cy.contains('John Doe').should('be.visible');
  });
});
```

---

## Testing Strategies

### The Testing Trophy

```
         /\
        /  \
       / E2E \      <- Few, critical user journeys
      /--------\
     /Integration\ <- Component interactions
    /--------------\
   /  Unit Tests    \ <- Many, fast, focused
  /------------------\
 / Static Analysis    \ <- TypeScript, ESLint
/______________________\
```

### Recommended Coverage

| Test Type | Coverage | Focus |
|-----------|----------|-------|
| Unit | 80%+ | Pure functions, utilities, hooks |
| Integration | Key flows | Component interactions |
| E2E | Critical paths | User journeys, happy paths |

---

## Decision Guide

### Choose Jest if:
- Using Create React App
- Need mature ecosystem
- Want extensive documentation
- Team is familiar with Jest

### Choose Vitest if:
- Using Vite
- Want faster test runs
- Need native ESM support
- Want Jest-compatible API

### Choose Playwright if:
- Need cross-browser testing
- Want mobile emulation
- Need API testing
- Want visual testing

### Choose Cypress if:
- Value developer experience
- Want time-travel debugging
- Need component testing
- Prefer in-browser testing

---

## Best Practices

### General

1. **Test behavior, not implementation**
2. **Write tests that resemble usage**
3. **Use meaningful test descriptions**
4. **Keep tests focused and simple**
5. **Don't test library code**

### Unit Tests

```typescript
// Good: Descriptive, focused
it('returns filtered items when filter matches', () => {
  const items = [
    { name: 'Apple', category: 'fruit' },
    { name: 'Carrot', category: 'vegetable' },
  ];

  const result = filterByCategory(items, 'fruit');

  expect(result).toHaveLength(1);
  expect(result[0].name).toBe('Apple');
});

// Bad: Vague, tests implementation
it('works correctly', () => {
  const result = filterByCategory(items, 'fruit');
  expect(result).toBeDefined();
});
```

### Component Tests

```typescript
// Good: User-centric
it('submits form with valid data', async () => {
  const onSubmit = vi.fn();
  render(<ContactForm onSubmit={onSubmit} />);

  await userEvent.type(screen.getByLabelText('Name'), 'John');
  await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

  expect(onSubmit).toHaveBeenCalledWith({ name: 'John' });
});

// Bad: Implementation-focused
it('sets state when input changes', () => {
  const wrapper = shallow(<ContactForm />);
  wrapper.find('input').simulate('change', { target: { value: 'John' } });
  expect(wrapper.state('name')).toBe('John');
});
```

### E2E Tests

```typescript
// Good: Full user journey
test('complete checkout flow', async ({ page }) => {
  await page.goto('/products');
  await page.click('[data-testid="product-1"] button');
  await page.click('[data-testid="cart-button"]');
  await page.click('[data-testid="checkout-button"]');
  await page.fill('[name="email"]', 'user@example.com');
  await page.click('[data-testid="place-order"]');

  await expect(page.getByText('Order confirmed')).toBeVisible();
});
```

---

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Cypress Documentation](https://docs.cypress.io/)
- [Testing Trophy Article](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
