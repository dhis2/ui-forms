import '../../shared/submit.js'
import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import { requiredMessage } from '../../../../src/validators/required'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Unchecked')
    cy.verifyFormValue('checkbox', undefined)
})

Then('an error message is shown', () => {
    cy.get('.checkbox .error').should('contain', requiredMessage)
})
