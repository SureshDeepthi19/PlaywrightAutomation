const { test, expect } = require('@playwright/test');

test('Validate YouTube title', async ({ page }) => {

  // Open YouTube
  await page.goto('https://www.youtube.com/');

  // Click search box
  await page.getByPlaceholder('Search').click();

  // Enter text
  await page.getByPlaceholder('Search').fill('Cypress by Testers Talk');

  // Verify search button enabled
  await expect(
    page.getByRole('button', { name: 'Search', exact: true })
  ).toBeEnabled();

  // Click search button
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // Wait
  await page.waitForTimeout(5000);
    
});