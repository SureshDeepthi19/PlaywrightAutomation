const { test, expect } = require("@playwright/test");

import { qaTestData } from '../test-data/qa/data.json';
import { stageTestData } from '../test-data/stage/data.json';


test.describe('Module test', () => {
  let testData = null;
  test.beforeAll("Running before All tests", () => {
    if (process.env.ENV == "qa") {
      testData = qaTestData;
    } else {
      testData = stageTestData;
    }
  });

  test('Read Test data in Different Environment', async ({ page }) => {
    await page.goto(process.env.URL);

    await page.locator("#tnb-google-search-input").click();
    await page.locator("#tnb-google-search-input").fill(testData.course1);
    await page.locator("#tnb-google-search-input").press("Enter");
    await page.waitForTimeout(3000);
  });
});
