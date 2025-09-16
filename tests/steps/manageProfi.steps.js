import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
import { loginFeature } from '../pages/loginFunction';

Given('User is logged in to the application', async ({page}) => {
    await loginFeature(page);
  // Step: Given User is logged in to the application
  // From: tests\features\mangeProfi.feature:4:5
});

When('User press on {string} menu', async ({page}) => {

    await page.getByRole("link", { name: "Edit Account" }).click();
  // Step: When User press on "Edit Account" menu
  // From: tests\features\mangeProfi.feature:7:7
});

When('User updates the Telephone', async ({page}) => {

    const telephone = "1234567890";
    await page.getByPlaceholder('Telephone').fill(telephone);
  // Step: And User updates the Telephone
  // From: tests\features\mangeProfi.feature:8:7
});

When('User press the Continue button', async ({page}) => {
    await page.getByRole("button", { name: "Continue" }).click();
  // Step: And User press the Continue button
  // From: tests\features\mangeProfi.feature:9:7
});

Then('user see this message {string}', async ({page}) => {
    await expect(page.getByText('Success: Your account has been successfully updated.')).toBeVisible();
  // Step: Then user see this message "Success: Your account has been successfully updated."
  // From: tests\features\mangeProfi.feature:10:7
});
