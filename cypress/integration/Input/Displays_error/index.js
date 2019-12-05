import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an empty, required Input is rendered', () => {
    cy.visitStory('Input', 'Required')
    cy.verifyFormValue('agree', undefined)
})

Then('an error message is shown', () => {
    cy.get('.error').should('contain', 'Required')
})
