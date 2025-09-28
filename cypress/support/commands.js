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

// cypress/support/commands.js
Cypress.Commands.add('loginCura', (user = 'John Doe', pass = 'ThisIsNotAPassword') => {
  cy.get('#btn-make-appointment').should('be.visible').click();
  cy.get('#txt-username').clear().type(user);
  cy.get('#txt-password').clear().type(pass, { log: false });
  cy.get('#btn-login').click();
  cy.url().should('include', '#appointment');
});
