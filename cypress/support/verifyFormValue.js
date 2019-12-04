Cypress.Commands.add('verifyFormValue', (fieldName, fieldValue) => {
    // make sure form spy function ran
    cy.get('.form-spy-internal')
    cy.window().then(win => {
        expect(win.formValues[fieldName]).to.equal(fieldValue)
    })
})
