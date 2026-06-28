 const {test,expect}= require("@playwright/test");
 test('multiple tabs handle',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
     await page.goto("https://www.qafox.com/selenium-practice/")
    

    const[newPage] = await Promise.all([
        context.waitForEvent("page"),
     page.getByRole('link',{ name: "Check our Udemy Courses" }).click()

    ])


    await newPage.getByPlaceholder('Search for anything').first().click();
    await newPage.getByPlaceholder('Search for anything').fill('JavaScript');
    await page.waitForTimeout(3000);
    await newPage.close();
    await page.getByPlaceholder("Search for...").click();
    await page.getByPlaceholder("Search for...").fill("Python Course");
    await page.waitForTimeout(3000);
    await page.close();
    
    })