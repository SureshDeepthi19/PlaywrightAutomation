import { test, expect } from "@playwright/test";

test("Handle iframe in playwright  Drag and drop", async ({ page }) => {

    await page.goto("https://jqueryui.com/droppable/");

    const frame = page.frameLocator('.demo-frame');

    const dragElement = frame.locator('[id="draggable"]');
    const dropElement = frame.locator('[id="droppable"]');
    
     await dragElement.dragTo(dropElement);


});