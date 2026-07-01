const {test,expect} = require("@playwright/test");

test('screenshots',async({page})=> {
    await page.goto("https://www.w3schools.com/");
    await page.locator("[aria-label='Contact us about W3Schools Academy for educational institutions']").first().screenshot({path:"screenshots/element.png"});
    await page.screenshot({path:"screenshots/page.png"});
    await page.screenshot({path:"screenshots/fullpage.png",fullPage:true});
    await page.waitForTimeout(3000);

})