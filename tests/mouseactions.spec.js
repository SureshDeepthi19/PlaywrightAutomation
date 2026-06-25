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
  // mouse Actions one Click
  await page.getByRole("button", { name: "Leave List" }).click();
  // Mouse action Double click
  await page.getByRole("button", { name: "Reset" }).dblclick();
  // Mouse action left click
  await page.getByText("Reset").click({ button: "left" });

  //Mouse action Right Click
  await page
    .getByRole("button", { name: "Reset" })
    .first()
    .click({ button: "right" });

  //Mouse action Hover
  await page.locator(".bi-question-lg").hover();

  await page.waitForTimeout(5000);
});
