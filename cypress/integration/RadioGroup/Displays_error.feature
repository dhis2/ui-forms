Feature: The RadioGroup field displays an error when invalid

    Scenario: Form is submitted with none of the options selected
        Given a RadioGroup with no selected value
        When the user submits the form
        Then an error message is shown
