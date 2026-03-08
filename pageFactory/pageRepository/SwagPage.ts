import { expect, Locator, Page } from "@playwright/test";

export class SwagPage {
    readonly page:Page;
    readonly PRODUCT_HEADING:Locator;
    readonly ADD_TO_CART_BACKPACK: Locator;
    readonly CART_BADGE: Locator;
    readonly CART_ICON: Locator;

    constructor(page:Page){
        this.page = page;
        this.PRODUCT_HEADING = page.locator(".title");
        this.ADD_TO_CART_BACKPACK = page.locator("#add-to-cart-sauce-labs-backpack");

        this.CART_BADGE = page.locator(".shopping_cart_badge");

        this.CART_ICON = page.locator(".shopping_cart_link");

    }

    async verifyProductPageVisible(): Promise<void>{
         await this.page.waitForURL(/.*inventory\.html/);
           await expect(this.PRODUCT_HEADING).toHaveText("Products");
    }

    async addBackpackToCart(): Promise<void>{

    await this.ADD_TO_CART_BACKPACK.click();

}

async verifyProductAdded(): Promise<void>{

    await expect(this.CART_BADGE).toHaveText("1");

}

async openCart(): Promise<void>{

    await this.CART_ICON.click();

}

}