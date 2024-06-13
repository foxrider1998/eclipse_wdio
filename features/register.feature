Feature: I can test register


 Scenario Outline: As a user, I can't register using wrong email format

    Given I am at register page
    When I register with wrong email format
    And I see warning mesage



 Scenario Outline: As a user, I can't register using wrong password format

    Given I am at register page
    When I register with wrong password format
    And I see warning mesage




 Scenario Outline: As a user, I can't register using wrong password confirmation

    Given I am at register page
    When I register with wrong password confirmation
    And I see warning mesage


  Scenario Outline: As a user, I can register

    Given I am at register page
    When I register with correct format
    And I see a register succes