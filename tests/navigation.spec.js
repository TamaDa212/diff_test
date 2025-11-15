import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Home page shows Home <h1>', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Home');
  });

  test('About link navigates to About page and updates <h1>', async ({ page }) => {
    await page.click('a[href="about.html"]');
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator('h1')).toHaveText('About');
  });

  test('Contact link navigates to Contact page and updates <h1>', async ({ page }) => {
    await page.click('a[href="contact.html"]');
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.locator('h1')).toHaveText('Contact');
  });

  // Дополнительная проверка: проверка <title> на главной странице
  test('Home page has correct <title>', async ({ page }) => {
    await expect(page).toHaveTitle('Home');
  });
});
