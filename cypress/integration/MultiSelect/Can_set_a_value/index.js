import '../common'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('the MultiSelect has two options', () => {
    const options = [
        { value: 'value1', label: 'Label 1' },
        { value: 'value2', label: 'Label 2' },
    ]

    cy.wrap(options).as('options')
    cy.window().then(win => {
        win.options = options
        win.forceUpdate()
    })
})

When('the user selects the first options', () => {
    cy.get('form > div').selectSelectNthOption(1, true)
})

When('the user selects the second options', () => {
    cy.get('form > div').selectSelectNthOption(2, true)
})

Then("the form state's value equals the first option's value", () => {
    cy.get('@options').then(options => {
        const [firstOption] = options
        cy.getFormValue('multiSelect').then(selected => {
            expect(selected).to.have.lengthOf(1)
            expect(selected).to.include.members([firstOption.value])
        })
    })
})

Then("the form state's value contains both options", () => {
    cy.get('@options').then(options => {
        const allOptions = options.map(({ value }) => value)
        cy.getFormValue('multiSelect').then(selected => {
            expect(selected).to.have.lengthOf(allOptions.length)
            expect(selected).to.include.members(allOptions)
        })
    })
})
