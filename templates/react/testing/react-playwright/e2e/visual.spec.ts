import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('homepage should match snapshot', async ({ page }) => {
    await page.goto('/');

    // Wait for fonts and styles to load
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('homepage.png', {
      maxDiffPixelRatio: 0.1,
    });
  });

  test('counter at different states', async ({ page }) => {
    await page.goto('/');

    // Initial state
    await expect(page.locator('.counter')).toHaveScreenshot('counter-initial.png');

    // After increment
    await page.getByRole('button', { name: /increment/i }).click();
    await page.getByRole('button', { name: /increment/i }).click();
    await page.getByRole('button', { name: /increment/i }).click();
    await expect(page.locator('.counter')).toHaveScreenshot('counter-incremented.png');

    // Negative state
    await page.getByRole('button', { name: /reset/i }).click();
    await page.getByRole('button', { name: /decrement/i }).click();
    await expect(page.locator('.counter')).toHaveScreenshot('counter-negative.png');
  });
});
