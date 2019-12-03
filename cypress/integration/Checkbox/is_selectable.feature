Feature: The Checkbox can be selected

    Scenario: The user clicks on the Checkbox
        Given an unchecked Checkbox is rendered
        When the user clicks on the Checkbox
        Then the form value that corresponds to the checkbox will be yes
