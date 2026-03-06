import { expect, test } from "@playwright/test";
import { HomeSteps } from "../steps/HomeSteps";
import { Constants } from "../utils/Constants";

test("Verify Home Page is loading properly", async ({ page }) => {
    const homeSteps = new HomeSteps(page);
    await homeSteps.navigateToHomePage();
    let title = await homeSteps.getPageTitle();
    expect(title).toContain(Constants.homePageTitle);
});
