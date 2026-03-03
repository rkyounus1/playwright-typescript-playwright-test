import { BrowserContext, Locator, Page } from "@playwright/test";
import {expect} from "@playwright/test";

export class SwagPage {
    readonly page:Page;
    readonly PRODUCT_HEADING:Locator;

    constructor(page:Page){
        this.page = page;
        this.PRODUCT_HEADING = page.locator(".title");
    }

    async verifyProductPageVisible(): Promise<void>{
         await this.page.waitForURL(/.*inventory\.html/);
           await expect(this.PRODUCT_HEADING).toHaveText("Products");
    }

}