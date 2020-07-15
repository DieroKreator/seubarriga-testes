/// <reference types="cypress" />

describe('logout', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')

        cy.get('#email').type("zellelikuti-7188@yopmail.com")
        cy.get('#senha').type("123456")
        cy.get('.btn').click()
    })

    it('should be able to logout successfully', () => {
        cy.get(':nth-child(5) > a').click()
    
    })

})