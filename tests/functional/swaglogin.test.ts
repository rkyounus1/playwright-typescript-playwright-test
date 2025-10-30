import test from '@lib/BaseTest';
import { expect } from '@playwright/test';


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

// // valid pass n login

// test.only('verify swaglab login',async({swagLoginPage })=> {
// await test.step('navigate to source demo', async()=>{
//     await swagLoginPage.navigateToURL()

// })

// await test.step('login using valid credentails',async()=>{
// await swagLoginPage.loginToApplication();

// })
 
// await test.step('varify user redirected', async()=>{
//  await swagLoginPage.verifyProfilePage()

// })

// });


// //login with invalid 

// test('verify Swag Labs invalid Login', async ({ swagLoginPage }) => {

//   await test.step('Navigate to Sauce Demo site', async () => {
//     await swagLoginPage.navigateToURL();
//   });

//   await test.step('attempt login with invalid credentials', async () => {
//     await swagLoginPage.USERNAME_EDITBOX.fill('invalid_user');
//     await swagLoginPage.PASSWORD_EDITBOX.fill('wrong_password');
//     await swagLoginPage.LOGIN_BUTTON.click();
//   });

//   await test.step('Verify error message is displayed', async () => {
//     const errorMessage = swagLoginPage.page.locator('[data-test="error"]');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toHaveText(/Username and password do not match any user/i);
//   });

// });
  

// // invalid password and emptyfileds

// test('Verify error message for empty username and password fields', async ({ swagLoginPage }) => {

//   await test.step('Navigate to Sauce Demo site', async () => {
//     await swagLoginPage.navigateToURL();
//   });

//   await test.step('Click login button without entering credentials', async () => {
//     await swagLoginPage.LOGIN_BUTTON.click();
//   });

//   await test.step('Verify error message for missing username', async () => {
//     const errorMessage = swagLoginPage.page.locator('[data-test="error"]');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toHaveText(/Username is required/i);
//   });

//   await test.step('Enter username only and click Login', async () => {
//     await swagLoginPage.USERNAME_EDITBOX.fill('standard_user');
//     await swagLoginPage.LOGIN_BUTTON.click();
//   });

//   await test.step('Verify error message for missing password', async () => {
//     const errorMessage = swagLoginPage.page.locator('[data-test="error"]');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toHaveText(/Password is required/i);
//   });

// });

// // After logout, user should be redirected back to the login page



// test('verify swaglab login and logout', async({swagLoginPage})=>{


//     await test.step('Navigate to Sauce Demo', async()=>{

//         await swagLoginPage.navigateToURL();
  
//     })
   
// await test.step('login using valid credentials', async()=>{

//     await swagLoginPage.loginToApplication()
// })
//  await test.step('verify product page', async()=>{
// await swagLoginPage.verifyProfilePage()

//  })

// await test.step('logout and verify user is redirected to login', async()=>{

//     await swagLoginPage.page.locator('#react-burger-menu-btn').click()

//     await swagLoginPage.page.locator('#logout_sidebar_link').click()



//     await expect(swagLoginPage.page).toHaveURL('https://www.saucedemo.com/')

//     await expect(swagLoginPage.page.locator('#login-button')).toBeVisible()
// })


// })