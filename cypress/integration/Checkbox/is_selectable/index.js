import '../common'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an unchecked Checkbox is rendered', () => {
    cy.visitStory('Testing:Checkbox', 'Unchecked')
    cy.verifyFormValue('checkbox', undefined)
})

Then('the form value that corresponds to the checkbox will be true', () => {
    cy.window().then(win => {
        expect(win.formValues.checkbox).to.equal(true)
    })
})
