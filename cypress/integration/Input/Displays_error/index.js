import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { requiredMessage } from '../../../../src/validators/required.js'

Given('an empty, required Input is rendered', () => {
    cy.visitStory('Testing:Input', 'Required')
    cy.verifyFormValue('agree', undefined)
})

Then('an error message is shown', () => {
    cy.get('.error').should('contain', requiredMessage)
})
