/// <reference types="cypress" />

context('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('should have 3 tabs', () => {
      cy.get('[data-test-id="tab-title"]')
      .should('have.length', 3)
    })
  })
  