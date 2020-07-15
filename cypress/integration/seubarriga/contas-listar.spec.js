/// <reference types="cypress" />

describe('listar contas', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.get('#email').type("zellelikuti-7188@yopmail.com")
        cy.get('#senha').type("123456")
        cy.get('.btn').click()
    })

    it('should open Listar page', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').should('have.text', 'Listar')
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('thead > tr > :nth-child(1)').should('have.text', 'Conta')

        //Edit account name
        
    })

})