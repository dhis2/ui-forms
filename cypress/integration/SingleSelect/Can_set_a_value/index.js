import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the SingleSelect has one options', () => {
    const options = [{ value: 'Value', label: 'Label' }]

    cy.wrap(options).as('options')
    cy.window().then(win => {
        win.options = options
        win.forceUpdate()
    })
})

When('the user selects the first options', () => {
    cy.get('form > div').selectSelectNthOption(1)
})

Then("the form state's value equals the first option's value", () => {
    cy.get('@options').then(options => {
        cy.verifyFormValue('singleSelect', options[0].value)
    })
})