import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('a single-file IputField is rendered', () => {
    cy.visitStory('Testing:Forms', 'Standard form')
})

Given('the InputField does not hold any files', () => {
    cy.get('.form-spy-internal')
    cy.window().then(win => {
        expect(win.formValues.fileTxt).to.be.undefined
    })
})
