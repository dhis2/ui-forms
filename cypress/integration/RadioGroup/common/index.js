import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a RadioGroup with no selected value', () => {
    cy.visitStory('Testing:RadioGroup', 'Required')
    cy.verifyFormValue('choice', undefined)
})
