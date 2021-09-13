/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer o login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //visitou uma url para testar
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac ')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //visitou uma url para testar
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') //visitou uma url para testar
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

})