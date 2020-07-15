/// <reference types="cypress" />

describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.get('#email').type("zellelikuti-7188@yopmail.com")
        cy.get('#senha').type("123456")
        cy.get('.btn').click()
    })

    it('should be able to login successfully', () => {
        cy.get('.alert').should('have.text', 'Bem vindo, Zelle Likuti!')
    
    })

})

