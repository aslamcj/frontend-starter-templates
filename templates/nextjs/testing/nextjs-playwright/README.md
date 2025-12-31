# Next.js + Playwright

Next.js 15 with Playwright for end-to-end testing.

## Features

- ⚛️ Next.js 15 with App Router
- 🎭 Playwright for E2E testing
- 📱 Cross-browser testing
- 📸 Visual regression testing
- ⚡ Turbopack for development

## Quick Start

```bash
pnpm install
npx playwright install  # Install browsers
pnpm dev
```

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests with UI mode
pnpm test:ui

# Run tests in headed mode
pnpm test:headed

# Run tests in debug mode
pnpm test:debug

# View test report
pnpm test:report
```

## Playwright Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

## E2E Test Examples

### Basic Page Test

```typescript
import { test, expect } from '@playwright/test';

test('should load homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/My App/);
});
```

### User Interaction

```typescript
test('should submit form', async ({ page }) => {
  await page.goto('/contact');

  await page.getByLabel('Email').fill('test@example.com');
  await page.getByRole('button', { name: /submit/i }).click();

  await expect(page.getByText('Thanks!')).toBeVisible();
});
```

### API Route Testing

```typescript
test('should fetch data from API', async ({ request }) => {
  const response = await request.get('/api/posts');
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  expect(data).toHaveLength(10);
});
```

### Authentication Flow

```typescript
test('should login and access protected page', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Email').fill('user@example.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByText('Welcome')).toBeVisible();
});
```

## Project Structure

```
├── e2e/
│   ├── counter.spec.ts      # Counter tests
│   └── navigation.spec.ts   # Navigation tests
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Counter.tsx
│       └── Counter.module.css
├── playwright.config.ts
└── package.json
```

## Best Practices

1. **Use data-testid** for stable selectors
2. **Test user flows**, not implementation
3. **Use Page Object Model** for complex apps
4. **Run tests in CI** with retries
5. **Take screenshots** on failure

## Available Scripts

- `pnpm dev` - Start dev server with Turbopack
- `pnpm build` - Build for production
- `pnpm test` - Run E2E tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:headed` - Run tests visually
- `pnpm test:debug` - Debug tests
- `pnpm test:report` - View HTML report
- `pnpm lint` - Run ESLint

## Learn More

- [Playwright Documentation](https://playwright.dev/)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing/playwright)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

## License

MIT
