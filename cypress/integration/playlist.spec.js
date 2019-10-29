/// <reference types="Cypress" />

context('Playlist', () => {
    beforeEach(() => {
      cy.visit("localhost:3000")
    });

it('has the right App title', () => {
    cy.title().should('include', 'PlayTime')
})





})


