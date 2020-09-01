<reference types='cypress' />; //in the course, 3 lines at beginning

describe('our first suite', () => {
  it('first test', () => {
    // by tag name
    cy.get('p');

    // by ID
    cy.get('#money-plus'); // no ids in this project

    // by class name
    cy.get('.money');

    //by attribute name
    cy.get('[placeholder]');

    // by attribute name and value
    cy.get('[placeholder="Email"]');

    // by class value
    cy.get('[]');
  });
});
