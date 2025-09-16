// Generated from: tests\features\playwright.feature
import { test } from "playwright-bdd";

test.describe('Playwright Integration', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I go to "https://playwright.dev/"  environment', null, { page }); 
  });
  
  test('Verify Playwright is set up correctly', async ({ When, Then, And, page }) => { 
    await When('I go to the "API" button', null, { page }); 
    await And('I hover on the "NodeNode.js" menu', null, { page }); 
    await And('I go  the "Python" button', null, { page }); 
    await Then('the test verify url contains "api/class-playwright"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\playwright.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I go to \"https://playwright.dev/\"  environment","isBg":true,"stepMatchArguments":[{"group":{"start":8,"value":"\"https://playwright.dev/\"","children":[{"start":9,"value":"https://playwright.dev/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I go to the \"API\" button","stepMatchArguments":[{"group":{"start":12,"value":"\"API\"","children":[{"start":13,"value":"API","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I hover on the \"NodeNode.js\" menu","stepMatchArguments":[{"group":{"start":15,"value":"\"NodeNode.js\"","children":[{"start":16,"value":"NodeNode.js","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I go  the \"Python\" button","stepMatchArguments":[{"group":{"start":10,"value":"\"Python\"","children":[{"start":11,"value":"Python","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the test verify url contains \"api/class-playwright\"","stepMatchArguments":[{"group":{"start":29,"value":"\"api/class-playwright\"","children":[{"start":30,"value":"api/class-playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end