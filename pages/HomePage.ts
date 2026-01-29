import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly url: string;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = "https://playwright.dev/";

        // Locators
        this.title = page.locator("#username");
    }

    async navigateToHomePage() {
        await this.page.goto(this.url);
    }

    async getPageTitle() {
        await this.page.waitForLoadState("domcontentloaded");
        return await this.page.title()
    }
}
