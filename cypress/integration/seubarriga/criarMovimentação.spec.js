/// <reference types="cypress" />

it('should save a transaction', () => {

    cy.visit('https://seubarriga.wcaquino.me/login')

    cy.get('#email').type("zellelikuti-7188@yopmail.com")
    cy.get('#senha').type("123456")
    cy.get('.btn').click()

    cy.get(':nth-child(3) > a').click()
    
    //Validate label present on page
    cy.get(':nth-child(1) > :nth-child(1) > label').should('have.text', 'Tipo da Movimentação')

    //Save form with empty fields
    cy.get('.btn').click()
    cy.get('.alert').should('be.visible')

    //Input data on fields
    cy.get('#data_transacao').type("10/07/2020")
    cy.get('#data_pagamento').type("10/07/2020")
    cy.get('#descricao').type("Test")
    cy.get('#interessado').type("Interesado")
    cy.get('#valor').type(200)
    cy.get('.btn').click()

    cy.get('.alert').should('have.text', 'Movimentação adicionada com sucesso!')

})