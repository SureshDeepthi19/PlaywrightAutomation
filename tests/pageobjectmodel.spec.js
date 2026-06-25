const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/homepage");
const { Middlepage } = require("../pages/Middlepage");
const { Finalpage } = require("../pages/Finalpage");

test("Page Object Model in playwright ", async ({ page }) => {
  //Go To URl
  const homepage = new HomePage(page);
  await homepage.goto();

  //search keywords
  await homepage.searchKeywords("JavaScript Tutorial");

  //click on middle page
  const middlepage = new Middlepage(page);
  await middlepage.ClickOncourselistlink();

  //Click on Home page link
  const finalpage = new Finalpage(page);
  await finalpage.ClickOnHomePagelink;
  await page.waitForTimeout(3000);
});
