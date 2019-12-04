import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Forms', 'Standard form')
    cy.verifyFormValue('tnc', undefined)
})

When('the user clicks on the Checkbox', () => {
    cy.get('.checkbox label').click()
})
