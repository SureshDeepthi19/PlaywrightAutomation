const {test,expect} = require("@playwright/test");

test ('Temparory test in play wright',async({page}) =>{

    await page.goto("https://www.w3schools.com/");
    await page.locator('[aria-label="Search field"]').click();
    await page.locator('[aria-label="Search field"]').fill("JavaScript Tutorial");
    await page.keyboard.press("Enter");

    await page.getByRole('link', { name: 'Home' }).first().click();
    await page.locator(".tnb-spaces-btn").first().click();
    ////body/div[@class='contentcontainer']/div[@class='belowtopnavcontainer']/div[@id='belowtopnav']/div[@class='w3-row']/div[@id='main']/div[2]/a[1]
    

});
