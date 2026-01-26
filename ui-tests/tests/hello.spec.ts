import { test, expect } from '@playwright/test';

test.describe('Hello page', () => {
  test('loads and fetches hello message', async ({ page }) => {
    await page.goto('/hello-page');

    await expect(page).toHaveTitle(/Hello Sample/);
    await expect(page.getByTestId('hello-title')).toHaveText('Hello Sample');
    await expect(page.getByTestId('hello-result')).toHaveText('未取得');

    await page.getByTestId('hello-button').click();
    await expect(page.getByTestId('hello-result')).toHaveText('Hello');
  });
});
