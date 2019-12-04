Feature: The Checkbox can be deselected

    Scenario: The user clicks on the checked Checkbox
        Given a checked Checkbox is rendered
        When the user clicks on the Checkbox
        Then the form value that corresponds to the checkbox will be false
