Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should <message>

    Examples:
      | username | password             | message                        |
      | arisijoyo@gmail.com | Aresqwer1234 | fail login |
      | aresijoyo@gmail.com | Ares1234 | logged into a secure area! |
