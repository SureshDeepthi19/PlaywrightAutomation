import { test, expect } from '@playwright/test';

test('Google Search Test', async ({ page }) => {

    // Open Google
    await page.goto('https://www.google.com/');

    // Enter text in Google search
    await page.locator('[name="q"]').fill('Cypress By Testers Talk');

    // Press Enter
    await page.keyboard.press('Enter');

    await page.getByRole('link', {name :'Videos'}).click();



    //await page.locator('xpath =//*[@name="search_query"]').click();
    //await page.locator('xpath =//*[@name="search_query"]').fill('Cypress by Testrs Talk');
    //await page.locator('xpath =//*[@name="search_query"]').press('Enter');
    await page.waitForTimeout(5000);
});


