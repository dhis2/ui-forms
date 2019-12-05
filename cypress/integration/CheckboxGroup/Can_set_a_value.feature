Feature: The CheckboxGroup can set a value

    Scenario: The user selects one option
        Given a CheckboxGroup with no selected value
        And the CheckboxGroup has two options
        When the user selects the first options
        Then the form state's value equals the first option's value

    Scenario: The user selects two options
        Given a CheckboxGroup with no selected value
        And the CheckboxGroup has two options
        When the user selects the first options
        And the user selects the second options
        Then the form state's value contains both options
