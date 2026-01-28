import { test, expect } from '@playwright/test';
import path from 'path';

const screenshotDir = path.join(__dirname, '../screenshots');

test.describe('Hello page', () => {
  test('loads and fetches hello message when OK is clicked', async ({ page }) => {
    await page.goto('/hello-page');
    await page.screenshot({ path: path.join(screenshotDir, '01-initial-load.png'), fullPage: true });

    await expect(page).toHaveTitle(/Hello Sample/);
    await expect(page.getByTestId('hello-title')).toHaveText('Hello Sample');
    await expect(page.getByTestId('hello-result')).toHaveText('未取得');
    await page.screenshot({ path: path.join(screenshotDir, '02-before-button-click.png'), fullPage: true });

    // ボタンをクリックしてダイアログを表示
    await page.getByTestId('hello-button').click();
    await page.waitForSelector('[data-testid="confirm-dialog"]', { state: 'visible' });
    await page.screenshot({ path: path.join(screenshotDir, '03-dialog-shown.png'), fullPage: true });

    // OKボタンをクリック
    await page.getByTestId('confirm-ok').click();
    await page.waitForTimeout(500); // APIレスポンスを待つ
    await page.screenshot({ path: path.join(screenshotDir, '04-after-ok-click.png'), fullPage: true });

    await expect(page.getByTestId('hello-result')).toHaveText('Hello');
    await page.screenshot({ path: path.join(screenshotDir, '05-result-displayed.png'), fullPage: true });
  });

  test('does not fetch hello message when Cancel is clicked', async ({ page }) => {
    await page.goto('/hello-page');
    await page.screenshot({ path: path.join(screenshotDir, '06-cancel-initial-load.png'), fullPage: true });

    await expect(page.getByTestId('hello-result')).toHaveText('未取得');
    await page.screenshot({ path: path.join(screenshotDir, '07-before-cancel-click.png'), fullPage: true });

    // ボタンをクリックしてダイアログを表示
    await page.getByTestId('hello-button').click();
    await page.waitForSelector('[data-testid="confirm-dialog"]', { state: 'visible' });
    await page.screenshot({ path: path.join(screenshotDir, '08-dialog-shown-cancel.png'), fullPage: true });

    // キャンセルボタンをクリック
    await page.getByTestId('confirm-cancel').click();
    await page.waitForTimeout(500); // ダイアログが閉じるのを待つ
    await page.screenshot({ path: path.join(screenshotDir, '09-after-cancel-click.png'), fullPage: true });

    // 結果は変わらない
    await expect(page.getByTestId('hello-result')).toHaveText('未取得');
    await page.screenshot({ path: path.join(screenshotDir, '10-result-unchanged.png'), fullPage: true });
  });
});
