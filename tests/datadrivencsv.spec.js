const { test, expect } = require("@playwright/test");

import fs from "fs";
import path from "path";
import {parse} from 'csv-parse/sync';
const records = parse (
  fs.readFileSync(path.join(__dirname,"../test-data/qa/School.csv")),
  {
   columns:true,
   skip_empty_lines: true 
  })
  for ( const record of records) {

test(`datadriven testing using Csv file in playwright ${record.TestCaseId}`, async ({ page }) => {
   await page.goto(process.env.URL);

    await page.locator("#tnb-google-search-input").click();
    await page
      .locator("#tnb-google-search-input")
      .fill(record.Course2);
    await page.locator("#tnb-google-search-input").press("Enter");
    await page.waitForTimeout(3000);
  });
}
