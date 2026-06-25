//Include playwright Module
const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  /**
   *
   * @param {import ('@playwright/test').Page} page
   */
  constructor(page) {
    //intialize the Page Object
    this.page = page;
    //Elements
    this.searchTextbox = page.locator("#tnb-google-search-input");
    this.searchIcon = page.locator("#tnb-google-search-icon");
  }

  async goto() {
    await this.page.setViewportSize({ width:1536, height:816 });
    await this.page.goto("https://www.w3schools.com/");
  }
  async searchKeywords(param1) {
    //await expect(this.searchTextbox).toBeEnabled();
    await this.searchTextbox.click();
    await this.searchTextbox.fill(param1);
    await this.searchIcon.click();
  }
};
