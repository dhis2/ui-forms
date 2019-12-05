import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a CheckboxGroup with no selected value', () => {
    cy.visitStory('Testing:CheckboxGroup', 'Required')
    cy.verifyFormValue('choice', undefined)
})
