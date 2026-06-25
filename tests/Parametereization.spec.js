//Including Play wright Module
const { test, expect } = require("@playwright/test");

const testParameters = [
  "JavaScript Tutorial",
  "Python Tutorial",
  "CSS Tutorial",
  "HTML Tutorial",
];
for (const searchKeyword of testParameters) {
  test(`Parameterize test in playwright - ${searchKeyword}`, async ({
    page,
  }) => {
    // Go to url
    await page.goto("https://www.w3schools.com/");

    await page.getByPlaceholder("Search our tutorials").click();
    await page.getByPlaceholder("Search our tutorials").fill(searchKeyword);
    await page.getByPlaceholder("Search our tutorials").press("Enter");
  });
}