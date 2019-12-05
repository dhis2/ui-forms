import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a MultiSelect with no selected value', () => {
    cy.visitStory('Testing:MultiSelect', 'Required')
    cy.getFormValue('multiSelect').then(arg => console.log('arg', arg))
    cy.verifyFormValue('multiSelect', undefined)
})
