import { test, expect } from "@playwright/test";

test("Handle trace in playwright", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");
  //clicking on 3 dots
  //await page.locator("#navbtn_services").click();
      await page.locator('[aria-label="Search field"]').click();
    await page.locator('[aria-label="Search field"]').fill("JavaScript Tutorial");
    await page.keyboard.press("Enter");

    await page.getByRole('link', { name: 'Home' }).first().click();
    await page.locator(".tnb-spaces-btn").first().click();
  const courses = [
    "JQUERY",
    "EXCEL",
    "XML",
    "DJANGO",
    "NUMPY",
    "PANDAS",
    "NODEJS",
    "DSA",
    "TYPESCRIPT",
    "ANGULAR",
    "ANGULARJS",
    "GIT",
    "POSTGRESQL",
    "MONGODB",
    "ASP",
    "AI",
    "R",
    "GO",
    "KOTLIN",
    "SWIFT",
    "SAAS",
    "VUE",
    "GEN AI",
    "SCIPY",
    "AWS",
    "CYBERSECURITY",
    "DATA SCIENCE",
    "INTRO TO PROGRAMMING",
    "INTRO TO HTML &CSS",
    "BASH",
    "RUST",
    "TOOLS",
  ];

  for (let i = 0; i < courses.length; i++) {
    await page.locator("#scroll_right_btn").click();

    console.log("Checking:", courses[i]);

    await expect(page.getByRole("link", { name: courses[i] })).toBeVisible();
  }

  await page.waitForTimeout(3000);
  
});
