const { expect } =require('@playwright/test');

exports.orderpage = class  orderpage {
    /**
     * 
     * @param {import ('@playwright/test').Page}page
     */

    constructor(page){
        //Intialization
        this.page = page;
        //elements
        this.personname = page.getByPlaceholder('First Name');
        this.familyname = page.getByPlaceholder('Last Name');
        this.pincode = page.getByPlaceholder('Zip/Postal Code');
        this.submit = page.locator('#continue');
        this.complete = page.locator('#finish');
    }
    async ClickonAddresspage(firstname,lastname,Pincode){
        await this.personname.fill(firstname);
        await this.familyname.fill(lastname);
        await this.pincode.fill(Pincode);
        }
    async ClickOnSubmit(){
        await this.submit.click();
    }
    async ClickOncomplete(){
        await this.complete.click();
    }
}