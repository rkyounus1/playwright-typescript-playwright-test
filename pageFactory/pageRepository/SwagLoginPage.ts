import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class SwagLoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly error_message: Locator;
    readonly Products_list: Locator;
    

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.USERNAME_EDITBOX = page.locator('#user-name');
        this.PASSWORD_EDITBOX = page.locator('#password');
        this.LOGIN_BUTTON = page.locator('#login-button');
        this.error_message = page.locator('.error-message-container.error')
        this.Products_list = page.locator('.title');
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
    }

    async clickOnLoginMainButton(): Promise<void> {
        await this.LOGIN_BUTTON.click();
    }

    async loginToApplication(): Promise<void> {
        await this.USERNAME_EDITBOX.fill(testConfig.username);
        await this.PASSWORD_EDITBOX.fill(testConfig.password);
        await this.LOGIN_BUTTON.click();
        await this.page.waitForURL('**/inventory.html', { timeout: 15000 });
    }
    async verifyErrorMessage(expectedMessage: string): Promise<void> {
    await this.error_message.waitFor({ state: 'visible', timeout: 5000 });
    await expect(this.error_message).toHaveText(expectedMessage);
    }

    async verifyProfilePage(): Promise<void> {
        await this.page.waitForSelector('.title', { state: 'visible', timeout: 15000 });
        await expect(this.Products_list).toHaveText('Products');
    }
    
}