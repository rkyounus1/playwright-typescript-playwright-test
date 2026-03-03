import test from "@lib/BaseTest";
import {expect} from "@playwright/test";

// test("Sauce verfiy login load", async ({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     await expect(page.getByText('Login')).toBeVisible();
//    await expect(page.getByText('Swag Labs')).toBeVisible(); 
// });

test("Sauce succesfull login", async ({swagPage,swagLoginPage})=>{
await swagLoginPage.navigateToURL();
 await  swagLoginPage.loginToApplication();
  await  swagPage.verifyProductPageVisible();
});