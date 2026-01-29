import { expect, Page } from "@playwright/test";
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
        const title = await this.homePage.getPageTitle();
        console.log(`Title:${title}`);
        expect(title).toContain("Playwright");
    }
}
