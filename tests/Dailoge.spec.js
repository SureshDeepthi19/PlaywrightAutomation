const {test,expect }= require("@playwright/test");

//Run before Eac every test
test.beforeEach("Run before Ecah test", async({page})=>{


await page.goto('https://the-internet.herokuapp.com/');
await page.getByText('JavaScript Alerts').click();
})

test('Handle Dialogue alrets in playwright',async({page})=>{



    page.on('dialog',async(dialog)=> {
        console.log("Alert Messgage:", dialog.message());
         await page.waitForTimeout(3000);
        await dialog.accept();
        
        

    })
    
    await page.getByText('Click for JS Alert').click();
     
    
   
})

test('handle dialog box cancel alert',async({page})=>{
    page.on('dialog',async(dialog)=> {
        console.log("Alert Message:", dialog.message());
        await page.waitForTimeout(3000);
        await dialog.dismiss();

});
await page.getByText('Click for JS Confirm').click();

});

test('handle dailoge prompt inplaywright', async ({page}) =>{
    page.on('dialog',async(dialog)=>{

        console.log(dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept('iam Fine with test')
        
    });
    await page.getByText('Click for JS Prompt').click();
    await expect(page.locator("#result"))
    .toHaveText("You entered: iam Fine with test");

})