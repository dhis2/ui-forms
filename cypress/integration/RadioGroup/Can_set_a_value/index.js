import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the RadioGroup has one options', () => {
    const options = [
        { value: 'value1', label: 'Label 1' },
        { value: 'value2', label: 'Label 2' },
    ]

    cy.wrap(options).as('options')
    cy.window().then(win => {
        win.updateCypressProps({ options })
    })
})

When('the user selects the first options', () => {
    cy.get('legend + label + label').click()
})

Then("the form state's value equals the first option's value", () => {
    cy.get('@options').then(options => {
        cy.verifyFormValue('choice', options[1].value)
    })
})
