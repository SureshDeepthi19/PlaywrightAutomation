import { test, expect } from "@playwright/test";

//Run Beore Each test
test.beforeEach("Run Before Each Test", async ({ page }) => {
  console.log("Run Before Each test.....");

  await page.goto("https://www.w3schools.com/");
});

test("Handle KeyBoard actions in playwright", async ({ page }) => {
  //Search For Tutorials
  await page.locator("[aria-label='Search our tutorials']").click();
  //FIll Search Field
  await page
    .locator("[aria-label='Search our tutorials']")
    .fill("JavaScript Tutorial");

  //Press CTrl + A
  await page.locator("[aria-label='Search our tutorials']").press("Control+A");
  //press Delete
  await page.locator("[aria-label='Search our tutorials']").press("Delete");
  //Press tab
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await page.locator('[aria-label="Search field"]').fill("Python Tutorial");
  await page.keyboard.press("Backspace");
  await page.waitForTimeout(3000);
});



test("handle Dropdpwn list in playwright", async ({ page }) => {
  await page.getByRole("button", { name: "Tutorials" }).first().click();
  await page.getByText("Get W3Schools Certified").first().click();

  await page.keyboard.down("ArrowDown");
  await page.locator('[aria-Label="Search"]').click();
  await page.locator('[aria-label="Search"]').fill("java full stack developement");
  await page.keyboard.press("Control+A");
  await page,keyboard.press("Control+C");
  // await page.getByRole("link", { name: "Get W3Schools Certified"}).click();
  //await page.locator('[aria-label="Close navigation"]').first().click();

  await page.waitForTimeout(3000);
  //button[@class='tutnav-close-btn']
});
