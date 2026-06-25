const { test,expect } = require("@playwright/test");

const { LoginPage } = require("../Saucedemo_pages/Loginpage");
const { MainPage } =  require("../Saucedemo_pages/MainPage");
const { Cartpage } = require("../Saucedemo_pages/Cartpage");
const { checkoutpage } = require("../Saucedemo_pages/checkoutpage");
const { orderpage } = require("../Saucedemo_pages/orderpage");

test("Navigating to home page  webiste using Playwright", async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    //log in details
  await loginPage.login('standard_user', 'secret_sauce');

    //click on Main page
  const mainpage = new MainPage(page);
  await mainpage.clickOnBurgerButton();
  await mainpage.ClickOnAllItemsMenu();

  //Click on cart page
  const cartpage = new Cartpage(page);

  await cartpage.ClickOnProduct();
  await cartpage.ClickOnAddtoCart();

  //Click on checkoutpage
  const Checkoutpage = new checkoutpage(page);
   await Checkoutpage.ClickOnCartContainer();

   //Fill and Submit the details
   const Orderpage = new orderpage(page);
    await Orderpage.ClickonAddresspage('starindia','digital','500065');
    await Orderpage.ClickOnSubmit();
    await Orderpage.ClickOncomplete();

  await page.waitForTimeout(3000);
});