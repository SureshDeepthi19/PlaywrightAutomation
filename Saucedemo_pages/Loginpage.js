//include playwright module
const {expect} = require ('@playwright/test');
exports.LoginPage = class LoginPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page){
        //init the pag object
        this .page = page;
        //Elements
        this.username = page.locator('#user-name');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('#login-button');
    }
    async goto(){
        await this.page.setViewportSize({ width:1536, height:816 });
        await this.page.goto("https://www.saucedemo.com/")
    }
    async login(username,Password){
    await this.username.fill(username);
    await this.password.fill(Password);
        await this.loginButton.click();
    }

}