import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a Checkbox is rendered', () => {
    cy.visitStory('Checkbox', 'Default')
})

Given('a custom onChange handler is provided', () => {
    cy.window().then(win => {
        cy.stub(win, 'onClick')
    })
})

When('the user clicks on the Checkbox', () => {
    cy.get('label').click()
})

Then('the onChange handler will be called', () => {
    cy.window().then(win => {
        expect(win.onClick).to.be.calledWith({})
    })
})
