import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a TextArea with no text is rendered', () => {
    cy.visitStory('TextArea', 'Default')
    cy.verifyFormValue('comment', undefined)
})

When('the user types something', () => {
    cy.wrap('user input').as('userInput')
    cy.get('@userInput').then(userInput => {
        cy.get('textarea').type(userInput)
    })
})

Then("the form state's value equals the written text", () => {
    cy.get('@userInput').then(userInput => {
        cy.verifyFormValue('comment', userInput)
    })
})
