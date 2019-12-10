Feature: The FileInput accepts files

    Scenario: The user provides a file
        Given a single-file IputField is rendered
        And the InputField does not hold any files
        When a file is provided
        Then the form state contains that file

    Scenario: The user provides multiple files
        Given a multi-file IputField is rendered
        And the InputField does not hold any files
        When more than one files are provided
        Then the form state contains those files