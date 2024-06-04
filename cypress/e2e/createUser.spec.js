// <reference types="cypress" />
import createUserFixture from '../fixtures/createUser.json'

const { createUserSchema } = require('../support/schemas');

chai.use(require('chai-json-schema'));


context('Validar a API de criação de Usuários', () => {

    it('Create User - Health check', function () {
        let body =  createUserFixture.dadosValidos
        cy.createUser(body).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(body.name)
            expect(response.body.job).to.equal(body.job)

        })
    })

    it('Create User - Validar o não enviar campo Name obrigatório', function () {
        let body = createUserFixture.dadoInvalidoName
        cy.createUser(body).then((response) => {
            expect(response.status).to.equal(422)
            console.log(response)
        })

    })

    it('Create User - Validar o não enviar campo Job obrigatório', function () {
        let body = createUserFixture.dadoInvalidoJob
        cy.createUser(body).then((response) => {
            expect(response.status).to.equal(422)
            console.log(response)
        })
    })


    it('Create User - Validar contrato da API', function () {
        let body =  createUserFixture.dadosValidos
    
        cy.createUser(body).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.be.jsonSchema(createUserSchema)
        })
    })

})