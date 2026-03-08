import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Swag Labs Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

});