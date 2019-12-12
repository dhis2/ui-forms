import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { requiredMessage } from '../../../../src/validators/required'

Given('an empty, required TextArea is rendered', () => {
    cy.visitStory('TextArea', 'Required')
    cy.verifyFormValue('agree', undefined)
})

Then('an error message is shown', () => {
    cy.get('.error').should('contain', requiredMessage)
})
