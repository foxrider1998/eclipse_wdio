Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can see sub meenu

    Given I am on Home
    When I Hover menu <menu> and show <submenu>
    Examples:
      | menu     | submenu              | text                        |
      # | Features | FREE  Features |     |
      # | Use Case | COD Streamers |  |
      | Discovery | See more post > |  |


  Scenario Outline: As a user, I can see section capturekey

    Given I am on Home
    When I Hover menu at capture key section should display specific images
    When I click on FAQ I can see FAQ answer