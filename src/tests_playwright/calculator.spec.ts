import { test, expect } from '@playwright/test';

test.describe('Calculator E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should perform addition', async ({ page }) => {
    await page.click('text=2');
    await page.click('text=+');
    await page.click('text=3');
    await page.click('text==');
    await expect(page.locator('ul')).toContainText('5');
  });

  test('should perform subtraction', async ({ page }) => {
    await page.click('text=1');
    await page.click('text=0');
    await page.click('text=-');
    await page.click('text=5');
    await page.click('text==');
    await expect(page.locator('ul')).toContainText('5');
  });

  test('should perform multiplication', async ({ page }) => {
    await page.click('text=2');
    await page.click('text=*');
    await page.click('text=3');
    await page.click('text==');
    await expect(page.locator('ul')).toContainText('6');
  });

  test('should clear display', async ({ page }) => {
    await page.click('text=2');
    await page.click('text=+');
    await page.click('text=3');
    await page.click('text==');
    await page.click('text=C');
    await expect(page.locator('div').filter({ hasText: /^0$/ })).toContainText(
      '0'
    );
  });

  test('should clear all', async ({ page }) => {
    await page.click('text=2');
    await page.click('text=+');
    await page.click('text=3');
    await page.click('text=AC');
    await expect(page.locator('ul')).toContainText(
      'Aucun calcul pour le moment'
    );
  });

  test('should perform division', async ({ page }) => {
    await page.click('text=6');
    await page.click('text=/');
    await page.click('text=3');
    await page.click('text==');
    await expect(page.locator('ul')).toContainText('2');
  });

  // Tests opérations complexes
  test('should perform complex operations', async ({ page }) => {
    await page.click('text=2');
    await page.click('text=+');
    await page.click('text=3');
    await page.click('text=*');
    await page.click('text=4');
    await page.click('text==');
    await expect(page.locator('ul')).toContainText('14');
  });

  // ------------------ HISTORY ------------------
  test('should store result in history', async ({ page }) => {
    await page.click('text=4');
    await page.click('text=*');
    await page.click('text=5');
    await page.click('text==');
    await expect(page.locator('ul')).toContainText('4*5');
    await expect(page.locator('ul')).toContainText('20');
  });

  test('should clear history', async ({ page }) => {
    await page.click('text=4');
    await page.click('text=*');
    await page.click('text=5');
    await page.click('text==');
    await page.click('text=AC');
    await expect(page.locator('ul')).not.toContainText('4 * 5');
  });

  test('should recall from history', async ({ page }) => {
    await page.click('text=4');
    await page.click('text=*');
    await page.click('text=5');
    await page.click('text==');
    await page.click('text=Utiliser');
    await expect(page.locator('ul')).toContainText('20');
  });

  test('should show empty history message', async ({ page }) => {
    await expect(page.locator('ul')).toContainText(
      'Aucun calcul pour le moment'
    );
  });
});
