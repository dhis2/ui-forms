Feature: The Input can set a value

    Scenario: The user types some text
        Given a Input with no text is rendered
        When the user types something
        Then the form state's value equals the written text
