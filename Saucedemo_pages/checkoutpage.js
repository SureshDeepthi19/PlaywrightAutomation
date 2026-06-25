const { expect } = require('@playwright/test');

exports.checkoutpage = class  checkoutpage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page
     */

    constructor(page) {

        this.page = page;
        //Elements

        this.cartStorage = page.locator('.shopping_cart_link');
        this.purchasebutton = page.locator('#checkout');

    }
    async ClickOnCartContainer(){
        this.cartStorage.click();
        this.purchasebutton.click();
    }

}