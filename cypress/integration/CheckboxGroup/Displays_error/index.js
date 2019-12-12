import '../common'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { requiredMessage } from '../../../../src/validators/required.js'

Then('an error message is shown', () => {
    cy.get('.error').should('contain', requiredMessage)
})