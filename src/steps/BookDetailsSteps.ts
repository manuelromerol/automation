import { Page } from "@playwright/test";
import { BookDetailsPage } from "../pages/BookDetailsPage";

export class BookDetailsSteps {
    readonly page: Page;
    readonly bookDetailsPage: BookDetailsPage;

    constructor(page: Page) {
        this.page = page;
        this.bookDetailsPage = new BookDetailsPage(page);
    }

    async getBookIsbn(): Promise<string> {
        return await this.bookDetailsPage.getISBN();
    }

    async returnToBookStorePage(): Promise<void> {
        await this.bookDetailsPage.goBackToBookStorePage();
    }
}
