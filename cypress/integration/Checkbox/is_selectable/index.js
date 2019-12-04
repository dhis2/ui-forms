import '../common'
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the form value that corresponds to the checkbox will be true', () => {
    cy.window().then(win => {
        expect(win.formValues.tnc).to.equal(true)
    })
})
