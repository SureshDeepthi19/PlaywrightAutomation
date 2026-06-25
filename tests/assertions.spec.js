import { test, expect } from "@playwright/test";

test("Handle Assetions in playwright", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");

  //Assertion for Url
  await expect(page).toHaveURL("https://www.w3schools.com/");

  //Assert the tittle

  await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
  // ASSERT TEXT
  await page.locator('[aria-label="Search our tutorials"]').click();
  await page
    .locator('[aria-label="Search our tutorials"]')
    .fill("Javascript Tutorial");
  await expect(page.locator('[aria-label="Search our tutorials"]')).toHaveValue(
    "Javascript Tutorial",
  );
  //ASSERT Editable
  await expect(
    page.locator('[aria-label="Search our tutorials"]'),
  ).toBeEditable();
  //ASSERT VISIBLE
  await expect(
    page.locator('[aria-label="Search our tutorials"]'),
  ).toBeVisible();
  //ASSERT ENABLED
  await expect(
    page.locator('[aria-label="Search our tutorials"]'),
  ).toBeEnabled();
  //keyboard action
  // await page.locator('[aria-label="Search our tutorials"]').press("Control+A");
  const keyboard = page.keyboard;
  await keyboard.press("Control+A");
  await keyboard.press("Delete");
  //Assert Empty
  await expect(page.locator('[aria-label="Search our tutorials"]')).toBeEmpty();

  await page.waitForTimeout(3000);
});
