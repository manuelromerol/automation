import { Page, Locator } from "@playwright/test";

export class BookDetailsPage {
    readonly page: Page;
    readonly url: string;
    readonly isbn: Locator;
    readonly backToBookStore: Locator;

    constructor(page: Page) {
        this.page = page;
        this.isbn = page.locator("div[id^='ISBN'] #userName-value");
        this.backToBookStore = page.locator('#addNewRecordButton');
    }

    async getISBN(): Promise<string> {
        return await this.isbn.innerText();
    }

    async goBackToBookStorePage() {
        await this.backToBookStore.click();
    }
}
