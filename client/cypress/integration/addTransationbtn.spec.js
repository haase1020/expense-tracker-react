describe('adds a transaction to expense list', function () {
  // arrange
  it('visits a new site', function () {
    //act
    cy.visit('http://localhost:3000');
    // cy.url().should('include', 'add transaction');
    cy.get('[data-cy=addTransactionButton]').click();
  });
});
