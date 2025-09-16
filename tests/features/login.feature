Feature: Verify ecomo login Page
    Background:
     Given I launch the browser "https://ecommerce-playground.lambdatest.io/"

    
   Scenario: Successful login with valid credentials
     When I click on the "My Account" link
     And I enter the email "pranav@testroverautomation.com" 
     And I enter enter password "Test1234"
     And I click on the "Login" button
     Then I should verify url contains "route=account/account"

    Scenario: Successful failure with invalidvalid credentials
     When I click on the "My Account" link
     And I enter the email "pranav@testroverautomation.com" 
     And I enter enter password "dashbapu"
     And I click on the "Login" button
     Then I can see the error message "Warning: No match for E-Mail Address and/or Password."
  