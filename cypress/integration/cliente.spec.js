/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('ao acessar a home, deve conter uma lista com 10 clientes', () => {
    cy.get('tbody tr').should("to.have.length", 10)
    cy.get('tbody tr td').contains("Danilo 2")
    cy.get('tbody tr td').contains("Danilo 1")
    cy.get('tbody tr td').contains("Danilo 3")
    cy.get('h1').contains("Danilo Aparecido")
    cy.get('body p').contains("Welcome")
  })
})
