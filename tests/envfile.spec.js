

//console.log("All ENV =", process.env);
//console.log("URL =", process.env.URL);

const { test, expect } = require("@playwright/test");

test("Read Env File  in playwright", async ({ page }) => {
  
  await page.goto(process.env.URL);
  await page.locator("#tnb-google-search-input").click();
  await page.locator("#tnb-google-search-input").fill("JavaScript Tutorials");
  await page.locator("#tnb-google-search-input").press("Enter");

  console.log("Username is : "+process.env.USER_NAME);
  console.log("Password is : "+process.env.PASSWORD)
  await page.waitForTimeout(3000);
});
