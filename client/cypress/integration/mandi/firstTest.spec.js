<reference types='cypress' />; //in the course, 3 lines at beginning

describe('our first suite', () => {
  it('first test', () => {
    cy.visit('/');
    cy.contains('Expense Tracker');

    // by tag name
    cy.get('p');

    // by ID
    cy.get('#money-plus'); // no ids in this project

    // by class name
    cy.get('.money');

    // //by attribute name
    // cy.get('[placeholder]');

    // // by attribute name and value
    // cy.get('[placeholder="Email"]');

    // by class value
    cy.get('[class="money plus"]');

    // //by tag name and attribute with value
    // cy.get('input[placeholder="Email"]');

    // //by two different attributes (can use as many attributes as you want)
    // cy.get('[placeholder="Email"][type="email"]');

    // //by tag name, attribute with value, ID and class name
    // cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    // //most recommended way by cypress (create own attributes)
    // cy.get('[data-cy="inputEmail1"]');
  });
});
