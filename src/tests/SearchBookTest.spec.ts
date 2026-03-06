import { expect, test } from "@playwright/test";
import { HomeSteps } from "../steps/HomeSteps";
import { BookDetailsSteps } from "../steps/BookDetailsSteps";
import { Constants } from "../utils/Constants";

test("Search a book", async ({ page }) => {
    const homeSteps = new HomeSteps(page);
    await homeSteps.navigateToHomePage();
    await homeSteps.searchBook("Git");
});

test("Verify book ISBN", async ({ page }) => {
    const homeSteps = new HomeSteps(page);
    await homeSteps.navigateToHomePage();
    await homeSteps.searchBook("Git");
    await homeSteps.openFirstBookListed();
    const bookSteps = new BookDetailsSteps(page);
    const bookIsbn = await bookSteps.getBookIsbn();
    expect(bookIsbn).toBe(Constants.mainISBN);
    await bookSteps.returnToBookStorePage();
});
