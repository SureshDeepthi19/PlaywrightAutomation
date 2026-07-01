const {test,expect} = require("@playwright/test");

test('screenshots',async({page})=> {
    await page.goto("https://www.w3schools.com/");
    await page.locator("[aria-label='Contact us about W3Schools Academy for educational institutions']").first().screenshot({path:"screenshots/element.png"});
    await page.screenshot({path:"screenshots/page.png"});
    await page.screenshot({path:"screenshots/fullpage.png",fullPage:true});
    await page.waitForTimeout(3000);

})

test.only('Keyboard actions',async({page})=> {
    await page.goto("https://www.w3schools.com/");
    await page.locator("#tnb-google-search-input").click();
     await page.locator("#tnb-google-search-input").pressSequentially("JavaScript Tutorial");
     await page.keyboard.press("Control+A");
     await page.keyboard.press("Control+C");
     await page.waitForTimeout(3000);
     await page.keyboard.press("Enter");
     await page.keyboard.press("Tab");
     await page.locator("#tnb-google-search-input").click();
    await page.keyboard.press("Control+V");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Delete");
    await page.waitForTimeout(3000);


})