const {test, expect } = require('@playwright/test');

test ('Visual  Comparison testing  in playwright', async ({page}) => {
    await page.goto ("https://www.w3schools.com/");
   //Before actiom
    await expect(page).toHaveScreenshot('w3schools.png');

    await page.getByPlaceholder("Search our tutorials").click();
    await page.getByPlaceholder("Search our tutorials").fill("Java Tutorials");
//After action
await expect(page).toHaveScreenshot('w3schools.png');
     await page.waitForTimeout(3000);


});