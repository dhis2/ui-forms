Feature: The MultiSelect can set a value

    Scenario: The user selects one option
        Given a MultiSelect with no selected value
        And the MultiSelect has two options
        When the user selects the first options
        Then the form state's value equals the first option's value

    Scenario: The user selects two options
        Given a MultiSelect with no selected value
        And the MultiSelect has two options
        When the user selects the first options
        And the user selects the second options
        Then the form state's value contains both options
