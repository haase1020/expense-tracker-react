///  <reference types="cypress" />

describe('our first suite', () => {
  it('first test', () => {
    // by tag name
    cy.get('');

    // by ID
    cy.get('#');

    // by class name
    cy.get('.');

    //by attribute name
    cy.get('[placeholder]');

    // by attribute name and value
    cy.get('[placeholder="Email"]');

    // by class value
    cy.get('[]');
  });
});
