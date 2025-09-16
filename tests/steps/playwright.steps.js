import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
import { expect } from '@playwright/test';

Given('I go to {string}  environment', async ({page}, url) => {
    await page.goto(url);
  // Step: Given I go to "https://playwright.dev/"  environment
  // From: tests\features\playwright.feature:4:5
});

When('I go to the {string} button', async ({page}) => {

    await page.getByRole('link', { name: 'API' }).click()
  // Step: When I go to the "API" button
  // From: tests\features\playwright.feature:8:5
});

When('I hover on the {string} menu', async ({page}) => {
     await page.locator('//div[@class="navbar__item dropdown dropdown--hoverable"]').hover();
     await page.waitForTimeout(2000);
  // Step: And I hover on the "NodeNode.js" menu
  // From: tests\features\playwright.feature:9:5
});

When('I go  the {string} button', async ({page}) => {
     await page.getByRole('link', { name: 'Python' }).click()
  // Step: And I go  the "Python" button
  // From: tests\features\playwright.feature:9:5
});

Then('the test verify url contains {string}', async ({page}, logged_url) => {

    await expect(page).toHaveURL(new RegExp(logged_url));
  // Step: Then the test verify url contains "api/class-playwright"
  // From: tests\features\playwright.feature:10:5
});
