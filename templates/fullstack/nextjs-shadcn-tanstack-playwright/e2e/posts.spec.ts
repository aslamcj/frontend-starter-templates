import { test, expect } from '@playwright/test';

test.describe('Posts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load posts', async ({ page }) => {
    await expect(page.getByTestId('loading')).toBeVisible();
    await expect(page.getByTestId('posts-list')).toBeVisible();
    await expect(page.getByTestId('post-item').first()).toBeVisible();
  });

  test('should add a new post', async ({ page }) => {
    await page.waitForSelector('[data-testid="posts-list"]');

    await page.getByTestId('post-input').fill('New Test Post');
    await page.getByTestId('add-button').click();

    await expect(page.getByText('New Test Post')).toBeVisible();
  });

  test('should display page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Next.js');
  });
});
