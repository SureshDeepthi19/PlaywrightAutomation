const {test,expect} = require("@playwright/test")
test.beforeEach('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
});



test('frames',async({page})=>{
    

    //const allframes = await page.frames()
    //console.log("Number of frames:",allframes.length);
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
    /*for (const frame of page.frames()) {
    console.log(frame.url());
}
    console.log(frame1);*/

    await frame1.fill("[name='mytext1']",'Hello Master');
    await page.waitForTimeout(3000);
})


test('frame2',async({page})=>{

    const inputbox = await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']")
    inputbox.fill('sureshsurya');
    await page.waitForTimeout(3000);

})



test('frame3',async({page})=>{
    

   
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
    await frame3.fill("[name='mytext3']",'Hello Master');

    const childFrames = await frame3.childFrames();
    console.log(childFrames.length);
    console.log(childFrames[0].url());

    await childFrames[0].locator("//*[@id='i6']/div[3]/div").check();

    await page.waitForTimeout(3000);
})




