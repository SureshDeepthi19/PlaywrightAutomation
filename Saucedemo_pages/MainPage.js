//Include playwright Module
  const {expect} = require("@playwright/test");

  exports.MainPage = class MainPage {
     /**
      * 
      * @param {import ('@playwright/test').Page} page 
      */
     
     constructor(page){
        //intiate the page
        this.page = page;
        //ELEMENTS
        this.burgerButton = page.locator('#react-burger-menu-btn')
        this.allItemsmenu = page.getByText('All Items',{ exact:true })
     }
        async clickOnBurgerButton(){
        await this.burgerButton.click();
      
       
    }
    async ClickOnAllItemsMenu(){
   await expect(this.allItemsmenu).toBeVisible();
   await this.allItemsmenu.click();
    }

}
    

