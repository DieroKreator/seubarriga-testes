/// <reference types="cypress" />

describe('home page', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.get('#email').type("zellelikuti-7188@yopmail.com")
        cy.get('#senha').type("123456")
        cy.get('.btn').click()
    })

    it('should verify labels on home page', () => {
        cy.get('tr > :nth-child(1)').should('have.text', 'Conta')
        cy.get('tr > :nth-child(2)').should('have.text', 'Saldo')
    
    })

})

