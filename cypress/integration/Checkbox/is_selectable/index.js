import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Checkbox is rendered', () => {
    cy.visitStory('Testing:Forms', 'Standard form')
})

When('the user clicks on the Checkbox', () => {
    cy.get('.checkbox label').click()
})

Then('the form value that corresponds to the checkbox will be yes', () => {
    cy.window().then(win => {
        expect(win.formValues.tnc).to.equal(true)
    })
})
