import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Checkbox is rendered', () => {
    cy.visitStory('Checkbox', 'Default')
})

Given('a custom onChange handler is provided', () => {
    cy.window().then(win => {
        win.onChange = cy.stub()
    })
})

When('the user clicks on the Checkbox', () => {
    cy.get('label').click()
})

Then('the onChange handler will be called', () => {
    cy.window().then(win => {
        expect(win.onChange).to.be.calledWith({})
    })
})
