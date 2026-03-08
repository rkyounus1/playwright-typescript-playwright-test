import test from "@lib/BaseTest";

test("Verify product add to cart", async ({swagLoginPage, swagPage}) => {

await swagLoginPage.navigateToURL();

await swagLoginPage.loginToApplication();

await swagPage.verifyProductPageVisible();

await swagPage.addBackpackToCart();

await swagPage.verifyProductAdded();

await swagPage.openCart();

});