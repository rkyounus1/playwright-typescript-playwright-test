import test from "@lib/BaseTest";

test("Sauce verfiy login load", async ({swagLoginPage})=>{
    await swagLoginPage.navigateToURL()
 await swagLoginPage.validateLoginPage()
});

test("Sauce succesfull login", async ({swagPage,swagLoginPage})=>{
await swagLoginPage.navigateToURL();
 await  swagLoginPage.loginToApplication();
  await  swagPage.verifyProductPageVisible();
});
test("Verify sorting dropdown", async ({ swagLoginPage }) => {

    await swagLoginPage.navigateToURL();
    await swagLoginPage.loginToApplication();

    await swagLoginPage.sortByNameAZ();
    await swagLoginPage.sortByNameZA();
    await swagLoginPage.sortByPriceLowHigh();
    await swagLoginPage.sortByPriceHighLow();
});
