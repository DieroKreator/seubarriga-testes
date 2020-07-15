/// <reference types="cypress" />

describe('verify elements on home page', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.get(':nth-child(2) > a').click()
    })

    //New email should be given or each run
    it('should be able to register a new user', () => { 
        cy.get('#nome').type("Zelle Likuti")
        cy.get('#email').type("zellelikuti-7188@yopmail.com") 
        cy.get('#senha').type("123456")
        cy.get('.btn').click()
        cy.get('.alert', 'Usuário inserido com sucesso') //Only for first time
    })

    it('should validate alert when account already exists', () => {
        cy.get('#nome').type("Zelle Likuti")
        cy.get('#email').type("zellelikuti-7188@yopmail.com")
        cy.get('#senha').type("123456")
        cy.get('.btn').click()
        cy.get('.alert').should('have.text', 'Endereço de email já utilizado') //Validate account already exists
    })

})

