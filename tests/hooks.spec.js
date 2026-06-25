import { test, expect } from "@playwright/test";

// Run Before All Test
test.beforeAll("Run Before All Test", async () => {
  console.log("Run Before All Test.....");
});

//Run before Each test

test.beforeEach("Run Before Each Test", async ({ page }) => {
  console.log("Run Before Each test.....");

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // Click On User name, Password and Login
  await page.getByPlaceholder("username").fill("Admin");

  await page.getByPlaceholder("password").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();
});

test("hooks concept in playwright", async ({ page }) => {
  await page.getByPlaceholder("search").click();
  await page.getByPlaceholder("search").fill("Dashboard");
  await page.locator('a[href="/web/index.php/dashboard/index"]').click();
  await page.waitForTimeout(5000);
});

test("hooks concept in playwright2", async ({ page }) => {

  await page.getByPlaceholder("search").fill("Directory");
  
  await page
    .locator('a[href="/web/index.php/directory/viewDirectory"]')
    .click();
  await page.waitForTimeout(5000);
});
