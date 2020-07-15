/// <reference types="cypress" />

describe('adicionar contas', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.get('#email').type("zellelikuti-7188@yopmail.com")
        cy.get('#senha').type("123456")
        cy.get('.btn').click()

    })

    it('should add an account', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').should('have.text', 'Adicionar')
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('label').should('have.text', 'Conta')

        cy.get('#nome').type("Family")
        cy.get('.btn').click()
    })

})