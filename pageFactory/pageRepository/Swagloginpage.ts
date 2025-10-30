import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class SwagLoginPage {
    verifyProfilePage() {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_INPUT: Locator;
    readonly PASSWORD_INPUT: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly ERROR_MESSAGE: Locator;
    readonly PRODUCTS_TITLE: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);

        // 🔹 Locators for Swag Labs login page
        this.USERNAME_INPUT = page.locator('#user-name');
        this.PASSWORD_INPUT = page.locator('#password');
        this.LOGIN_BUTTON = page.locator('#login-button');
        this.ERROR_MESSAGE = page.locator('[data-test="error"]');
        this.PRODUCTS_TITLE = page.locator('.title');
    }

    // 🔹 Step 1: Navigate to Swag Labs
    async navigateToURL(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // 🔹 Step 2: Login using credentials
    async loginToApplication(username: string = testConfig.username, password: string = testConfig.password): Promise<void> {
        await this.USERNAME_INPUT.fill(username);
        await this.PASSWORD_INPUT.fill(password);
        await this.LOGIN_BUTTON.click();
        await this.page.waitForURL('**/inventory.html', { timeout: 10000 });
    }

    // 🔹 Step 3: Verify successful login
    async verifyLoginSuccessful(): Promise<void> {
        await expect(this.PRODUCTS_TITLE).toHaveText('Products');
    }

    // 🔹 Step 4: Negative test — verify login failure
    async verifyLoginFailed(): Promise<void> {
        await expect(this.ERROR_MESSAGE).toBeVisible();
        await expect(this.ERROR_MESSAGE).toContainText('Username and password do not match');
    }
}
