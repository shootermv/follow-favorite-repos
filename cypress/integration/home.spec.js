/// <reference types="cypress" />

context('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('should have 3 tabs', () => {
      cy.get('[data-test-id="tab-title"]')
      .should('have.length', 3)
    })
  
    it('initially "commits" table should be active', () => {
      cy.get('[data-test-id="tab-title"]').get('button').first()
      .should('have.class', 'active')
      cy.get('[data-test-id="tab-title"]').get('button').eq(1).should('not.have.class', 'active')
    })
    
    it('commits table should have 10 rows', () => {
      cy.get('table > tbody > tr')
      .should('have.length', 10)
    })    
  })
  