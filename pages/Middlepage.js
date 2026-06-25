//Include playwright Module
const { expect } = require("@playwright/test");

exports.Middlepage = class Middlepage {
  /**
   *
   * @param {import ('@playwright/test').Page} page
   */
  constructor(page) {
    //intialize the Page Object
    this.page = page;
    //Elements
    this.courselistlink = page.getByRole("link", {
      name: "JavaScript Tutorial - W3Schools",
    });
  }

  async ClickOncourselistlink() {
    await expect(this.courselistlink.first()).toBeVisible();
    await this.courselistlink.first().click();
  }
};
