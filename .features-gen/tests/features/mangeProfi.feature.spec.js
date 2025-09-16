// Generated from: tests\features\mangeProfi.feature
import { test } from "playwright-bdd";

test.describe('Edit User Profile', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged in to the application', null, { page }); 
  });
  
  test.only('Update user profile information', { tag: ['@only', '@smoke'] }, async ({ When, Then, And, page }) => { 
    await When('User press on "Edit Account" menu', null, { page }); 
    await And('User updates the Telephone', null, { page }); 
    await And('User press the Continue button', null, { page }); 
    await Then('user see this message "Success: Your account has been successfully updated."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\mangeProfi.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@only","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged in to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User press on \"Edit Account\" menu","stepMatchArguments":[{"group":{"start":14,"value":"\"Edit Account\"","children":[{"start":15,"value":"Edit Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And User updates the Telephone","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And User press the Continue button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user see this message \"Success: Your account has been successfully updated.\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Success: Your account has been successfully updated.\"","children":[{"start":23,"value":"Success: Your account has been successfully updated.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end