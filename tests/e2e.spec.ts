import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite \+ React/);
});

test('renders the game scene', async ({ page }) => {
  await page.goto('/');

  // Expect the game scene to be visible
  await expect(page.locator('canvas')).toBeVisible();
});
