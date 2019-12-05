Feature: The Checkbox can set a value

    Scenario: The user clicks the first option
        Given a SingleSelect with no selected value
        And the SingleSelect has one options
        When the user selects the first options
        Then the form state's value equals the first option's value
