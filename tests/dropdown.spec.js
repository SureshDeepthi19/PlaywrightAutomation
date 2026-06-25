import { test, expect } from "@playwright/test";

test("Handle Dropdown in playwright", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.getByText("Create new account").click();

  await page.locator('[aria-label="Select month"]').click();
  await page.getByText("March").click();

  await page
    .getByRole("combobox")
    .filter({ hasText: "Select your gender" })
    .click();

  await page.locator('text="Male"').click();
  //await page.getByText("Male", { exact: true }).last().click();
  //await page.getByRole("option").nth(1).click();

});
