const { expect } = require('@playwright/test');

exports.Cartpage = class Cartpage {
    /**
     * 
     * @param {import('playwright/test').Page} page
     */
    constructor(page){
        //intiate the page
        this.page = page
        //Elements
        this.product =  page.locator('#item_4_title_link')
        this.cartOption = page.locator('#add-to-cart')
    
    }
    async ClickOnProduct(){
        await this.product.click();
    }
    async ClickOnAddtoCart(){
        await this.cartOption.click();
    }

}