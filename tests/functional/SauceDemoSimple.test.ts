import test from "@lib/BaseTest";
import {expect} from "@playwright/test";

test("Sauce verfiy login load", async ({page,swagLoginPage})=>{

     await swagLoginPage.navigateToURL();
    await swagLoginPage.validateLoginPage(); 
})


test("Sauce succesfull login", async ({swagPage,swagLoginPage})=>{
await swagLoginPage.navigateToURL();
 await  swagLoginPage.loginToApplication();
  await  swagPage.verifyProductPageVisible();
});