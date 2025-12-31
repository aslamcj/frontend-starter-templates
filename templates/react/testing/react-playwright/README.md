# React + Playwright

React 19 with Playwright for end-to-end testing.

## Features

- ⚛️ React 19 with TypeScript
- 🎭 Playwright for E2E testing
- 📱 Cross-browser testing
- 📸 Visual regression testing
- ⚡ Vite 6 for development

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

# Run tests in headed mode (visible browser)
pnpm test:headed

# Run tests in debug mode
pnpm test:debug

# View test report
pnpm test:report
```

## E2E Testing Patterns

### Basic Navigation Test

```typescript
import { test, expect } from '@playwright/test';

test('should load homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/My App/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Welcome');
});
```

### User Interaction Test

```typescript
test('should increment counter', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /increment/i }).click();

  await expect(page.getByTestId('count')).toHaveText('1');
});
```

### Form Submission Test

```typescript
test('should submit form', async ({ page }) => {
  await page.goto('/contact');

  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Message').fill('Hello!');
  await page.getByRole('button', { name: /submit/i }).click();

  await expect(page.getByText('Thanks for your message!')).toBeVisible();
});
```

### Visual Regression Test

```typescript
test('homepage visual regression', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('homepage.png', {
    maxDiffPixelRatio: 0.1,
  });
});
```

### Accessibility Test

```typescript
test('should be keyboard navigable', async ({ page }) => {
  await page.goto('/');

  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');

  await expect(page.getByTestId('count')).not.toHaveText('0');
});
```

## Project Structure

```
├── e2e/
│   ├── counter.spec.ts      # Counter tests
│   ├── navigation.spec.ts   # Navigation tests
│   └── visual.spec.ts       # Visual regression tests
├── src/
│   ├── components/
│   │   └── Counter.tsx
│   ├── App.tsx
│   └── main.tsx
├── playwright.config.ts     # Playwright configuration
└── package.json
```

## Playwright Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
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
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

## Common Locators

```typescript
// By role (recommended)
page.getByRole('button', { name: 'Submit' });
page.getByRole('heading', { level: 1 });
page.getByRole('link', { name: 'Home' });

// By test id
page.getByTestId('count');

// By text
page.getByText('Welcome');

// By label
page.getByLabel('Email');

// By placeholder
page.getByPlaceholder('Enter your email');
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run E2E tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:headed` - Run tests visually
- `pnpm test:debug` - Debug tests
- `pnpm test:report` - View HTML report
- `pnpm lint` - Run ESLint

## Learn More

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Playwright Locators](https://playwright.dev/docs/locators)
- [Visual Comparisons](https://playwright.dev/docs/test-snapshots)

## License

MIT
