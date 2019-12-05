import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Input with no text is rendered', () => {
    cy.visitStory('Input', 'Default')
})

When('the user types something', () => {
    cy.wrap('user input').as('userInput')
    cy.get('@userInput').then(userInput => {
        cy.get('input').type(userInput)
    })
})

Then("the form state's value equals the written text", () => {
    cy.get('@userInput').then(userInput => {
        cy.verifyFormValue('agree', userInput)
    })
})
