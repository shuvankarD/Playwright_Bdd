
Feature: Playwright Integration

   Background:
    Given I go to "https://playwright.dev/"  environment
    
  Scenario: Verify Playwright is set up correctly
    When I go to the "API" button
    And I hover on the "NodeNode.js" menu
    And I go  the "Python" button
    Then the test verify url contains "api/class-playwright"