Feature: The Checkbox can be selected

    Scenario: The user clicks on the Checkbox
        Given a Checkbox is rendered
        And a custom onChange handler is provided
        When the user clicks on the Checkbox
        Then the onChange handler will be called
