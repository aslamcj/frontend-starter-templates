import { test, expect } from '@playwright/test';

test.describe('Navigation and Page Load', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/React \+ Playwright/);
  });

  test('should display main heading', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toHaveText('React + Playwright');
  });

  test('should display counter section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 2, name: 'Counter' })).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('buttons should be accessible', async ({ page }) => {
    await page.goto('/');

    // Check that buttons have accessible names
    await expect(page.getByRole('button', { name: /increment/i })).toBeEnabled();
    await expect(page.getByRole('button', { name: /decrement/i })).toBeEnabled();
    await expect(page.getByRole('button', { name: /reset/i })).toBeEnabled();
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');

    // Tab to first button and press Enter
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    // Count should change (depends on which button is focused first)
    const count = await page.getByTestId('count').textContent();
    expect(parseInt(count || '0')).not.toBe(0);
  });
});

test.describe('Responsive Design', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await expect(page.getByTestId('count')).toBeVisible();
    await expect(page.getByRole('button', { name: /increment/i })).toBeVisible();
  });

  test('should display correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page.getByTestId('count')).toBeVisible();
  });

  test('should display correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    await expect(page.getByTestId('count')).toBeVisible();
  });
});
