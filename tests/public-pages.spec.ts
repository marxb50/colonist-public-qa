import { expect, test } from '@playwright/test';

test.describe('Colonist public experience', () => {
  test('homepage exposes the two primary play actions', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', {
      name: /free online settlers of catan alternative/i,
    })).toBeVisible();
    await expect(page.getByText('Play with Friends', { exact: true })).toBeVisible();
    await expect(page.getByText('Play Online', { exact: true })).toBeVisible();
  });

  test('homepage navigation reaches the public rules', async ({ page }) => {
    await page.goto('/');

    const rulesLink = page.getByRole('link', { name: 'Rules', exact: true });
    await expect(rulesLink).toHaveAttribute('href', '/catan-rules');
    await expect(rulesLink).toHaveAttribute('target', '_blank');

    const rulesPagePromise = page.waitForEvent('popup');
    await rulesLink.click();
    const rulesPage = await rulesPagePromise;

    await expect(rulesPage).toHaveURL(/\/catan-rules\/?$/);
    await expect(rulesPage.getByRole('heading', { name: '4 Player', exact: true })).toBeVisible();
  });

  test('base rules explain robber and building mechanics', async ({ page }) => {
    await page.goto('/catan-rules');

    await expect(page.getByText(/block and steal cards with the robber/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /building & buying costs/i })).toBeVisible();
  });

  test('extended-player rules cover 5-6 and 7-8 player games', async ({ page }) => {
    await page.goto('/catan-rules/5-6-player');

    await expect(page.getByRole('heading', { name: '5-6 / 7-8 Players', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: '5-6 Players', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: '7-8 Players', exact: true })).toBeVisible();
  });

  test('company values page documents the five operating values', async ({ page }) => {
    await page.goto('/values');

    for (const value of [
      'Dependability',
      'Ownership',
      'Clear Communication',
      'Efficient Execution',
      'Continuous Learning',
    ]) {
      await expect(page.getByRole('heading', { name: new RegExp(value, 'i') }).first()).toBeVisible();
    }
  });

  test('homepage primary content fits a mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await expect(page.getByRole('heading', {
      name: /free online settlers of catan alternative/i,
    })).toBeVisible();
    await expect(page.getByText('Continue on Web', { exact: true })).toBeVisible();

    const horizontalOverflow = await page.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(horizontalOverflow).toBeLessThanOrEqual(1);
  });
});
