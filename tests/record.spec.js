import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("username").click();
  await page.getByPlaceholder("username").fill("standard_user");
  await page.getByPlaceholder("password").click();
  await page.getByPlaceholder("password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  // verify Swag Labs
  await expect(page.getByText("Swag Labs")).toBeVisible();
  //Verify Products
  await expect(page.getByText("Products")).toBeVisible();
  // verify filter

  await page.locator(".product_sort_container").selectOption("lohi");

  //Add To cart
  await page
    .locator(".inventory_item")
    .filter({ hasText: "Test.allTheThings() T-Shirt (Red)" })
    .getByRole("button", { name: "Add to cart" })
    .click();
  //Go to cart
  await page.locator(".shopping_cart_link").click();
  //verify in cart
  await expect(
    page.getByText("Test.allTheThings() T-Shirt (Red)"),
  ).toBeVisible();
  //Click On Remove
  // Click Remove button
  await page.getByRole("button", { name: "Remove" }).click();
  //verify remove
  await expect(page.getByText("sauce Labs Backpack")).not.toBeVisible();
  //Click continue Shopping
  await page.locator("#continue-shopping").click();

  //Click 3Lines Lefts side

  await page.locator("#react-burger-menu-btn").click();

  // 4 Options Visible
  await expect(page.getByText("All Items")).toBeVisible();
  await expect(page.getByText("About")).toBeVisible();
  await expect(page.getByText("Logout")).toBeVisible();
  await expect(page.getByText("Reset App State")).toBeVisible();
  await page.waitForTimeout(5000);

  await page.getByText("Logout").click();
});
