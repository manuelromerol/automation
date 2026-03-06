import {Page, Locator} from "@playwright/test";
import {Constants} from "../utils/Constants";

export class HomePage {
    readonly page: Page;
    readonly url: string;
    readonly searchBookInput: Locator;
    readonly booksItems: Locator;


    constructor(page: Page) {
        this.page = page;
        this.url = Constants.homePageUrl;
        this.searchBookInput = page.locator('#searchBox');
        this.booksItems = page.locator('table tbody > tr');
        this.booksItems = page.locator('table tbody > tr');
    }

    async navigateToHomePage() {
        await this.page.goto(this.url);
    }

    async getPageTitle() {
        await this.page.waitForLoadState("domcontentloaded");
        return await this.page.title()
    }

    async searchBook(term: string) {
        await this.searchBookInput.fill(term);
    }

    async openFirstBook() {
        await this.booksItems.locator('a').first().click();
    }
}
