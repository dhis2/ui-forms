import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a checked Checkbox is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Checked')
    cy.verifyFormValue('checkbox', true)
})

Then('the form value that corresponds to the checkbox will be false', () => {
    cy.window().then(win => {
        expect(win.formValues.checkbox).to.equal(false)
    })
})
