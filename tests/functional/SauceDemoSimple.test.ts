import {expect, test} from '@playwright/test';

test("Sauce verfiy login load", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByText('Login')).toBeVisible();
   await expect(page.getByText('Swag Labs')).toBeVisible(); 
});