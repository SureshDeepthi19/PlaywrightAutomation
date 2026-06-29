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

test("mouse actions", async ({ page }) => {
  await page.goto("https://www.tebra.com/why-tebra/automate-practice");
  await page.getByText("Products").first().hover();
  //await page.locator("//*[normalize-space()='Products']").first().hover();
  await page
    .locator("[aria-label='Link to Product Tour']")
    .first()
    .click({ button: "right" });
  await page.locator("[aria-label='Link to Product Tour']").first().click();
  await page.waitForTimeout(3000);
});


test("drag and Drop", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");
  const drag = page.locator("#draggable");
  const drop = page.locator("#droppable").first();
  //console.log(await page.locator("#draggable").count());
  //console.log(await page.locator("#droppable").count());
  await drag.dragTo(drop);
  await page.waitForTimeout(3000);
  await expect(drop).toContainText("Dropped!");
});

