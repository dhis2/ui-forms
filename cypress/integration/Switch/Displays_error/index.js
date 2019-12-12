import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { requiredMessage } from '../../../../src/validators/required'

Given('an unchecked Switch is rendered', () => {
    cy.visitStory('Testing:Switch', 'Unchecked')
    cy.verifyFormValue('switch', undefined)
})

Then('an error message is shown', () => {
    cy.get('.switch .error').should('contain', requiredMessage)
})
