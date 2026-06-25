//Include playwright Module
const { expect } = require("@playwright/test");

exports.Finalpage = class Finalpage {
  /**
   *
   * @param {import ('@playwright/test').Page} page
   */
  constructor(page) {
    //intialize the Page Object
    this.page = page;
    //Elements
    this.HomePagelink = page.getByRole('link', { name: 'Home' }).first();
  }

  async ClickOnHomepagelink() {
   await this.HomePagelink.click();

  }
};
