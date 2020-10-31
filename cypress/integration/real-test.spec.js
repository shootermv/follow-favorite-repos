/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('home page - should have 3 tabs', () => {
      cy.get('[data-test-id="tab-title"]')
      .should('have.length', 3)
    })
  })
  