import test from '@lib/BaseTest';

test(`Verify Sauce Labs Login`, { tag: '@Smoke'}, async ({ swagLoginPage }) => {
    await test.step(`Navigate to Application`, async () => {
        await swagLoginPage.navigateToURL();
    });
    await test.step(`Login to Sauce Demo application`, async () => {
        await swagLoginPage.loginToApplication();
    });
    await test.step(`Verify User is logged in and navigated to Products page`, async () => {
        await swagLoginPage.verifyProfilePage();
    });
});
