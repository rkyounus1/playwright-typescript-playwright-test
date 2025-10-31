import { test } from '@playwright/test';
import { SwagLoginPage } from '../../pageFactory/pageRepository/SwagLoginPage';
import { testConfig } from '../../testConfig';

test.describe('Invalid Login Tests', { tag: '@Smoke' }, () => {

  test('Login with empty username and password', async ({ page, context }) => {
    const loginPage = new SwagLoginPage(page, context);
    await loginPage.navigateToURL();
    await loginPage.clickOnLoginMainButton();
    await loginPage.verifyErrorMessage('Epic sadface: Username is required');
  });

  test('Login with empty password', async ({ page, context }) => {
    const loginPage = new SwagLoginPage(page, context);
    await loginPage.navigateToURL();
    await loginPage.USERNAME_EDITBOX.fill(testConfig.username);
    await loginPage.clickOnLoginMainButton();
    await loginPage.verifyErrorMessage('Epic sadface: Password is required');
  });

  test('Login with invalid username', async ({ page, context }) => {
    const loginPage = new SwagLoginPage(page, context);
    await loginPage.navigateToURL();
    await loginPage.USERNAME_EDITBOX.fill('wrong_user');
    await loginPage.PASSWORD_EDITBOX.fill(testConfig.password);
    await loginPage.clickOnLoginMainButton();
    await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

  test('Login with invalid password', async ({ page, context }) => {
    const loginPage = new SwagLoginPage(page, context);
    await loginPage.navigateToURL();
    await loginPage.USERNAME_EDITBOX.fill(testConfig.username);
    await loginPage.PASSWORD_EDITBOX.fill('wrong_pass');
    await loginPage.clickOnLoginMainButton();
    await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

});
