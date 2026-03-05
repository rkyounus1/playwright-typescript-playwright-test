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
    readonly ERROR_MESSAGE: Locator;
    readonly PRODUCTS_LIST: Locator;
    readonly SORT_DROPDOWN: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;

        webActions = new WebActions(this.page, this.context);

        this.USERNAME_EDITBOX = page.locator('#user-name');
        this.PASSWORD_EDITBOX = page.locator('#password');
        this.LOGIN_BUTTON = page.locator('#login-button');
        this.ERROR_MESSAGE = page.locator('.error-message-container.error');
        this.PRODUCTS_LIST = page.locator('.title');
        this.SORT_DROPDOWN = page.locator('.product_sort_container');
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
        await this.ERROR_MESSAGE.waitFor({ state: 'visible', timeout: 5000 });
        await expect(this.ERROR_MESSAGE).toHaveText(expectedMessage);
    }

    async verifyProfilePage(): Promise<void> {
        await this.page.waitForSelector('.title', { state: 'visible', timeout: 15000 });
        await expect(this.PRODUCTS_LIST).toHaveText('Products');
    }

    async validateLoginPage(): Promise<void> {
        await expect(this.page.getByText('Login')).toBeVisible();
        await expect(this.page.getByText('Swag Labs')).toBeVisible();
    }

    // ---------- Sorting Methods ----------

   async sortByNameAZ(): Promise<void> {
    await this.SORT_DROPDOWN.waitFor({ state: 'visible' });
    await this.SORT_DROPDOWN.selectOption("az");
}

async sortByNameZA(): Promise<void> {
    await this.SORT_DROPDOWN.selectOption("za");
}

async sortByPriceLowHigh(): Promise<void> {
    await this.SORT_DROPDOWN.selectOption("lohi");
}

async sortByPriceHighLow(): Promise<void> {
    await this.SORT_DROPDOWN.selectOption("hilo");
}
}