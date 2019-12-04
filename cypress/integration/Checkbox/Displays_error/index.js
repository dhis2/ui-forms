import '../../shared/submit.js'
import '../common'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { requiredMessage } from '../../../../src/validators/required'

Then('an error message is shown', () => {
    cy.get('.checkbox .error').should('contain', requiredMessage)
})
