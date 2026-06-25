const { test, expect } = require("@playwright/test");

//import { Module1TestData } from ".."test-data/qa/data.json
const Module1TestData = require("../test-data/qa/data.json");

for (const [key, value] of Object.entries(Module1TestData.Module1TestData)) {
  test(`datadriven testing in playwright - ${key}`, async ({ page }) => {
    await page.goto(process.env.URL);

    await page.locator("#tnb-google-search-input").click();
    await page
      .locator("#tnb-google-search-input")
      .fill(value);
    await page.locator("#tnb-google-search-input").press("Enter");
    await page.waitForTimeout(3000);
  });
}
