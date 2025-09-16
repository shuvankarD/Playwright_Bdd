// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Verify ecomo login Page', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I launch the browser "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
  });
  
  test('Successful login with valid credentials', async ({ When, Then, And, page }) => { 
    await When('I click on the "My Account" link', null, { page }); 
    await And('I enter the email "pranav@testroverautomation.com"', null, { page }); 
    await And('I enter enter password "Test1234"', null, { page }); 
    await And('I click on the "Login" button', null, { page }); 
    await Then('I should verify url contains "route=account/account"', null, { page }); 
  });

  test('Successful failure with invalidvalid credentials', async ({ When, Then, And, page }) => { 
    await When('I click on the "My Account" link', null, { page }); 
    await And('I enter the email "pranav@testroverautomation.com"', null, { page }); 
    await And('I enter enter password "dashbapu"', null, { page }); 
    await And('I click on the "Login" button', null, { page }); 
    await Then('I can see the error message "Warning: No match for E-Mail Address and/or Password."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given I launch the browser \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":22,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the \"My Account\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"My Account\"","children":[{"start":16,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I enter the email \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"pranav@testroverautomation.com\"","children":[{"start":19,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I enter enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Test1234\"","children":[{"start":24,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I click on the \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given I launch the browser \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":22,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the \"My Account\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"My Account\"","children":[{"start":16,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I enter the email \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"pranav@testroverautomation.com\"","children":[{"start":19,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I enter enter password \"dashbapu\"","stepMatchArguments":[{"group":{"start":23,"value":"\"dashbapu\"","children":[{"start":24,"value":"dashbapu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I click on the \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I can see the error message \"Warning: No match for E-Mail Address and/or Password.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Warning: No match for E-Mail Address and/or Password.\"","children":[{"start":29,"value":"Warning: No match for E-Mail Address and/or Password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end