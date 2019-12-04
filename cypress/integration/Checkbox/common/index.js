import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Forms', 'Standard form')
    // make sure form spy function ran
    cy.get('.form-spy-internal')
    cy.window().then(win => {
        expect(win.formValues.tnc).to.be.undefined
    })
})

When('the user clicks on the Checkbox', () => {
    cy.get('.checkbox label').click()
})
