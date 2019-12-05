import '../common'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('an error message is shown', () => {
    cy.get('.error').should('contain', 'Required')
})
