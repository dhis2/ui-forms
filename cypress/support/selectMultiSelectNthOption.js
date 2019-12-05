function selectMultiSelectNthOption(subject, index) {
    cy.wrap(subject)
        .find('label + div > .root > .root-input')
        .click()
    cy.get(`.backdrop > div > div > div > div:nth-child(${index})`).click()
    cy.get('.backdrop').click('topRight') // close menu
}

Cypress.Commands.add(
    'selectMultiSelectNthOption',
    { prevSubject: true },
    selectMultiSelectNthOption
)
