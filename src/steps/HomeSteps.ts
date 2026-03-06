import { Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

export class HomeSteps {
    readonly page: Page;
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
    }

    async navigateToHomePage() {
        await this.homePage.navigateToHomePage();
    }

    async getPageTitle(): Promise<string> {
        const title = await this.homePage.getPageTitle();
        console.log(`Title:${title}`);
        return title;
    }

    async searchBook(term: string) {
        await this.homePage.searchBook(term);
    }

    async openFirstBookListed(): Promise<void> {
        await this.homePage.openFirstBook();
    }
}
