Feature: The Checkbox can set a value

    Scenario: The user clicks the first option
        Given a RadioGroup with no selected value
        And the RadioGroup has one options
        When the user selects the first option
        Then the form state's value equals the first option's value
