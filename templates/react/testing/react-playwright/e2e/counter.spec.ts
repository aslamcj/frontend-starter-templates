import { test, expect } from '@playwright/test';

test.describe('Counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display initial count of 0', async ({ page }) => {
    await expect(page.getByTestId('count')).toHaveText('0');
  });

  test('should increment count when + button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: /increment/i }).click();

    await expect(page.getByTestId('count')).toHaveText('1');
  });

  test('should decrement count when - button is clicked', async ({ page }) => {
    // First increment to 1
    await page.getByRole('button', { name: /increment/i }).click();
    await expect(page.getByTestId('count')).toHaveText('1');

    // Then decrement
    await page.getByRole('button', { name: /decrement/i }).click();
    await expect(page.getByTestId('count')).toHaveText('0');
  });

  test('should reset count when Reset button is clicked', async ({ page }) => {
    // Increment multiple times
    await page.getByRole('button', { name: /increment/i }).click();
    await page.getByRole('button', { name: /increment/i }).click();
    await page.getByRole('button', { name: /increment/i }).click();
    await expect(page.getByTestId('count')).toHaveText('3');

    // Reset
    await page.getByRole('button', { name: /reset/i }).click();
    await expect(page.getByTestId('count')).toHaveText('0');
  });

  test('should allow negative numbers', async ({ page }) => {
    await page.getByRole('button', { name: /decrement/i }).click();
    await page.getByRole('button', { name: /decrement/i }).click();

    await expect(page.getByTestId('count')).toHaveText('-2');
  });

  test('should handle rapid clicks', async ({ page }) => {
    const incrementButton = page.getByRole('button', { name: /increment/i });

    // Click rapidly 5 times
    await Promise.all([
      incrementButton.click(),
      incrementButton.click(),
      incrementButton.click(),
      incrementButton.click(),
      incrementButton.click(),
    ]);

    await expect(page.getByTestId('count')).toHaveText('5');
  });
});
