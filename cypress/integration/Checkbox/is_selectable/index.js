import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Forms', 'Standard form')
    // make sure form spy function ran
    cy.get('.form-spy-inernal')
    cy.window().then(win => {
        expect(win.formValues.tnc).to.be.undefined
    })
})

When('the user clicks on the Checkbox', () => {
    cy.get('.checkbox label').click()
})

Then('the form value that corresponds to the checkbox will be yes', () => {
    cy.window().then(win => {
        expect(win.formValues.tnc).to.equal(true)
    })
})
