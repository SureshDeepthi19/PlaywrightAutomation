const { test, expect } = require("@playwright/test");

test ('Sauce demo using playwright 1',async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill("standard_user");
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('#react-burger-menu-btn').click();
    await page.getByText('All Items').isVisible();
    await page.getByText('All Items').click();


});
