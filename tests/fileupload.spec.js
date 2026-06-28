 // How To upload files
 const { test, expect } = require("@playwright/test");

test ('Handle upload files', async ({page})=> {
   await page.goto("https://demoqa.com/upload-download")
   await page.locator("#uploadFile").setInputFiles("upload_files/tiger.jpg")


   

})