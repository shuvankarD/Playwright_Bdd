import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();
import { expect } from '@playwright/test';

Given('I launch the browser {string}', async ({page}, url) => {
    await page.goto(url);
  // Step: Given I launch the browser "https://ecommerce-playground.lambdatest.io/"
  // From: tests\features\login.feature:3:6
});

When('I click on the {string} link', async ({page}, myAccount) => {

    await page.getByRole("button", {name: 'My Account'}).click()
  // Step: When I click on the "My Account" link
  // From: tests\features\login.feature:7:6
});

When('I enter the email {string}', async ({page}, emailAddress) => {

    await page.getByPlaceholder('E-Mail Address').fill(emailAddress);
  // Step: And I enter the email "pranav@testroverautomation.com"
  // From: tests\features\login.feature:8:6
});

When('I enter enter password {string}', async ({page}, password) => {
    await page.getByPlaceholder('Password').fill(password)
  // Step: And I enter enter password "Test1234"
  // From: tests\features\login.feature:9:6
});

When('I click on the {string} button', async ({page}) => {

     await page.getByRole("button", {name:'Login'}).click()
  // Step: And I click on the "Login" button
  // From: tests\features\login.feature:10:6
});

Then('I should verify url contains {string}', async ({page}, verifed_url) => {

    await expect(page).toHaveURL(new RegExp(verifed_url));
  // Step: Then I should verify url contains "route=account/account"
  // From: tests\features\login.feature:11:6
});

Then('I can see the error message {string}', async ({page}) => {

    await expect(page.getByText('Warning: No match for E-Mail Address and/or Password.')).toBeVisible();
  // Step: Then I can see the error message "Warning: No match for E-Mail Address and/or Password."  
  // From: tests\features\login.feature:18:6
});