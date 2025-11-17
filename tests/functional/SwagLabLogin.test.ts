import test from '@lib/BaseTest';
import { expect } from '@playwright/test';



test(`Verify Sauce Labs Login`, { tag: '@Smoke' }, async ({ swagLoginPage }) => {

  await test.step(`Navigate to Application`, async () => {
    await swagLoginPage.navigateToURL();
  });

  await test.step(`Login using valid credentials`, async () => {
    await swagLoginPage.loginToApplication();
  });

  await test.step(`Verify user is redirected to Products page`, async () => {
    await swagLoginPage.verifyProfilePage();
  });

});



test('Verify Swag Labs Invalid Login', async ({ swagLoginPage }) => {

  await test.step('Navigate to Sauce Demo site', async () => {
    await swagLoginPage.navigateToURL();
  });

  await test.step('Attempt login with invalid credentials', async () => {
    await swagLoginPage.USERNAME_EDITBOX.fill('invalid_user');
    await swagLoginPage.PASSWORD_EDITBOX.fill('wrong_password');
    await swagLoginPage.LOGIN_BUTTON.click();
  });

  await test.step('Verify error message is displayed', async () => {
    const errorMessage = swagLoginPage.page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(/Username and password do not match any user/i);
  });

});



test('Verify error message for empty username and password fields', async ({ swagLoginPage }) => {

  await test.step('Navigate to Sauce Demo site', async () => {
    await swagLoginPage.navigateToURL();
  });

  await test.step('Click login button without entering credentials', async () => {
    await swagLoginPage.LOGIN_BUTTON.click();
  });

  await test.step('Verify error message for missing username', async () => {
    const errorMessage = swagLoginPage.page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(/Username is required/i);
  });

  await test.step('Enter username only and click Login', async () => {
    await swagLoginPage.USERNAME_EDITBOX.fill('standard_user');
    await swagLoginPage.LOGIN_BUTTON.click();
  });

  await test.step('Verify error message for missing password', async () => {
    const errorMessage = swagLoginPage.page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(/Password is required/i);
  });

});




test.only('Verify login and logout', async ({ swagLoginPage }) => {

  await test.step('Navigate to Sauce Demo', async () => {
    await swagLoginPage.navigateToURL();
  });

  await test.step('Login using valid credentials', async () => {
    await swagLoginPage.loginToApplication();
  });

  await test.step('Verify product page', async () => {
    await swagLoginPage.verifyProfilePage();
  });

  await test.step('Logout and verify user is redirected to login page', async () => {

    await swagLoginPage.page.locator('#react-burger-menu-btn').click();
    await swagLoginPage.page.locator('#logout_sidebar_link').click();

    // Validate we are back on login screen
    await expect(swagLoginPage.page).toHaveURL('https://www.saucedemo.com/');

    // Verify Login button is visible again
    await expect(swagLoginPage.page.locator('[data-test="login-button"]')).toBeVisible();
  });

});
