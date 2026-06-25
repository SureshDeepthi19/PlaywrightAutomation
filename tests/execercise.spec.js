import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByPlaceholder("username").click();
  await page.getByPlaceholder("username").fill("Admin");
  await page.getByPlaceholder("password").click();
  await page.getByPlaceholder("password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByPlaceholder("search").click();
  await page.getByPlaceholder("search").fill("Dashboard");
  await page.locator('a[href="/web/index.php/dashboard/index"]').click();
  await page.locator(".bi-gear-fill").click();
  await page.locator(".oxd-switch-input").click();
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "Assign Leave" }).click();

  await page
    .locator(".orangehrm-upgrade-button")
    .screenshot({ path: "screenshots/element.png" });
  await page.screenshot({ path: "screenshots/page.png" });
  await page.screenshot({ path: "screenshots/fullpage.png", fullpage: true });
  await page.getByText("Apply").click();
  await page.getByText("My Leave").click();
  await page.getByText("Entitlements").click();
  await page.getByText("Add Entitlements").click();
  await page.locator('.bi-caret-down-fill').nth(1).click();
  await page.getByText("CAN - Matternity").click();

  await page.waitForTimeout(5000);
});
