import { test, expect } from "@playwright/test";

test.describe("Smoke Testing", () => {

test("group test 1", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");

  //Assertion for Url
  await expect(page).toHaveURL("https://www.w3schools.com/");

  //Assert the tittle

  await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
  // ASSERT TEXT
  await page.locator('#tnb-google-search-input').click();
  await page
    .locator('#tnb-google-search-input')
    .fill("Javascript Tutorial");
  await expect(page.locator('#tnb-google-search-input')).toHaveValue(
    "Javascript Tutorial",
  );
  //ASSERT Editable
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeEditable();
  //ASSERT VISIBLE
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeVisible();
  //ASSERT ENABLED
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeEnabled();
  //keyboard action
  // await page.locator('[aria-label="Search our tutorials"]').press("Control+A");
  const keyboard = page.keyboard;
  await keyboard.press("Control+A");
  await keyboard.press("Delete");
  //Assert Empty
  await expect(page.locator('#tnb-google-search-input')).toBeEmpty();

  await page.waitForTimeout(3000);
});

test("group test 2", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");

  //Assertion for Url
  await expect(page).toHaveURL("https://www.w3schools.com/");

  //Assert the tittle

  await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
  // ASSERT TEXT
  await page.locator('#tnb-google-search-input').click();
  await page
    .locator('#tnb-google-search-input')
    .fill("Javascript Tutorial");
  await expect(page.locator('#tnb-google-search-input')).toHaveValue(
    "Javascript Tutorial",
  );
  //ASSERT Editable
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeEditable();
  //ASSERT VISIBLE
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeVisible();
  //ASSERT ENABLED
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeEnabled();
  //keyboard action
  // await page.locator('[aria-label="Search our tutorials"]').press("Control+A");
  const keyboard = page.keyboard;
  await keyboard.press("Control+A");
  await keyboard.press("Delete");
  //Assert Empty
  await expect(page.locator('#tnb-google-search-input')).toBeEmpty();

  await page.waitForTimeout(3000);
});

});

test.describe("Sanity testing", () => {

test("group test 3", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");

  //Assertion for Url
  await expect(page).toHaveURL("https://www.w3schools.com/");

  //Assert the tittle

  await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
  // ASSERT TEXT
  await page.locator('#tnb-google-search-input').click();
  await page
    .locator('#tnb-google-search-input')
    .fill("Javascript Tutorial");
  await expect(page.locator('#tnb-google-search-input')).toHaveValue(
    "Javascript Tutorial",
  );
  //ASSERT Editable
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeEditable();
  //ASSERT VISIBLE
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeVisible();
  //ASSERT ENABLED
  await expect(
    page.locator('#tnb-google-search-input'),
  ).toBeEnabled();
  //keyboard action
  // await page.locator('[aria-label="Search our tutorials"]').press("Control+A");
  const keyboard = page.keyboard;
  await keyboard.press("Control+A");
  await keyboard.press("Delete");
  //Assert Empty
  await expect(page.locator('#tnb-google-search-input')).toBeEmpty();

  await page.waitForTimeout(3000);
});
//Run Beore Each test
test.beforeEach("Run Before Each Test", async ({ page }) => {
  console.log("Run Before Each test.....");

  await page.goto("https://www.w3schools.com/");
});

test("Handle KeyBoard actions in playwright4", async ({ page }) => {
  //Search For Tutorials
  await page.locator('#tnb-google-search-input').click();
  //FIll Search Field
  await page
    .locator('#tnb-google-search-input')
    .fill("JavaScript Tutorial");

  //Press CTrl + A
  await page.locator('#tnb-google-search-input').press("Control+A");
  //press Delete
  await page.locator('#tnb-google-search-input').press("Delete");
  //Press tab
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await page.locator('#tnb-google-search-input').fill("Python Tutorial");
  await page.keyboard.press("Backspace");
  await page.waitForTimeout(3000);
});



test("handle Dropdpwn list in playwright5", async ({ page }) => {
  await page.getByRole("button", { name: "Tutorials" }).first().click();
  await page.getByText("Get W3Schools Certified").first().click();

  await page.keyboard.down("ArrowDown");
  await page.locator('#tnb-google-search-input').click();
  await page.locator('#tnb-google-search-input').fill("Java full stack developement");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+c");
  // await page.getByRole("link", { name: "Get W3Schools Certified"}).click();
  //await page.locator('[aria-label="Close navigation"]').first().click();

  await page.waitForTimeout(3000);
  //button[@class='tutnav-close-btn']
});

});
