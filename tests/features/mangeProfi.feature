Feature: Edit User Profile

   Background:
    Given User is logged in to the application

   
    Scenario: Update user profile information
      When User press on "Edit Account" menu
      And User updates the Telephone
      And User press the Continue button
      Then  user see this message "Success: Your account has been successfully updated."