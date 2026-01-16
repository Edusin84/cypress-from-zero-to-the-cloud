// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data) => {

      cy.get('input[id="firstName"]')
    .should('be.visible')
    .type(data.firstName)
    .should('have.value', data.firstName)

    cy.get('input[id="lastName"]')
    .should('be.visible')
    .type(data.lastName)
    .should('have.value', data.lastName)

    cy.get('input[id="email"]')
    .should('be.visible')
    .type(data.email)
    .should('have.value', data.email)

    cy.get('textarea[id="open-text-area"]')
    .should('be.visible')
    .type(data.text)
    .should('have.value', data.text)

    cy.get('button[type="submit"]')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('openPrivacyPage', () => {
  cy.get('a[href="privacy.html"]')
  .invoke('removeAttr', 'target')
  .click()
  .title().should('be.equal', 'TAT Customer Service Center - Privacy Policy')
})