import { test } from "@playwright/test";
import { HomeSteps } from "../steps/HomeSteps";

test("Navigate to Home Page", async ({ page }) => {
    const homeSteps = new HomeSteps(page);
    await homeSteps.navigateToHomePage();
});
