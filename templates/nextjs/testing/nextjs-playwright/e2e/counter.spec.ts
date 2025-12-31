import { test, expect } from '@playwright/test';

test.describe('Counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display initial count of 0', async ({ page }) => {
    await expect(page.getByTestId('count')).toHaveText('0');
  });

  test('should increment count', async ({ page }) => {
    await page.getByRole('button', { name: /increment/i }).click();
    await expect(page.getByTestId('count')).toHaveText('1');
  });

  test('should decrement count', async ({ page }) => {
    await page.getByRole('button', { name: /increment/i }).click();
    await page.getByRole('button', { name: /decrement/i }).click();
    await expect(page.getByTestId('count')).toHaveText('0');
  });

  test('should reset count', async ({ page }) => {
    await page.getByRole('button', { name: /increment/i }).click();
    await page.getByRole('button', { name: /increment/i }).click();
    await page.getByRole('button', { name: /increment/i }).click();
    await expect(page.getByTestId('count')).toHaveText('3');

    await page.getByRole('button', { name: /reset/i }).click();
    await expect(page.getByTestId('count')).toHaveText('0');
  });

  test('should allow negative numbers', async ({ page }) => {
    await page.getByRole('button', { name: /decrement/i }).click();
    await page.getByRole('button', { name: /decrement/i }).click();
    await expect(page.getByTestId('count')).toHaveText('-2');
  });
});
