Projeto de Teste de API com Cypress
Este projeto demonstra como usar o Cypress para testar uma API de criação de usuários.

Pré-requisitos
Node.js
npm
Instalação
Clone o repositório:
sh
Copiar código
git clone https://github.com/IsaacPogo/Test.git
Navegue até o diretório do projeto:
sh
Copiar código
cd Test
Instale as dependências:
sh
Copiar código
npm install
Executando os Testes
Para executar os testes, use o seguinte comando:

sh
Copiar código
npx cypress open
Isso abrirá o Cypress Test Runner, onde você pode executar seus testes.

Comandos Customizados
O projeto inclui um comando customizado para criar um usuário:

javascript
Copiar código
Cypress.Commands.add("createUser", function(payload) {
    cy.api({
        method: "POST",
        url: Cypress.env("urlCreateUser"),
        body: payload,
        failOnStatusCode: false
    })
})
Suite de Testes
Suite de Testes: Validar a API de criação de Usuários
A suite de testes inclui os seguintes testes:

Health Check:

javascript
Copiar código
it('Create User - Health check', function () {
    let body = createUserFixture.dadosValidos
    cy.createUser(body).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(body.name)
        expect(response.body.job).to.equal(body.job)
    })
})
Validar Campo Nome Obrigatório:

javascript
Copiar código
it('Create User - Validar o não enviar campo Name obrigatório', function () {
    let body = createUserFixture.dadoInvalidoName
    cy.createUser(body).then((response) => {
        expect(response.status).to.equal(422)
        console.log(response)
    })
})
Validar Campo Job Obrigatório:

javascript
Copiar código
it('Create User - Validar o não enviar campo Job obrigatório', function () {
    let body = createUserFixture.dadoInvalidoJob
    cy.createUser(body).then((response) => {
        expect(response.status).to.equal(422)
        console.log(response)
    })
})
Validar Contrato da API:

javascript
Copiar código
it('Create User - Validar contrato da API', function () {
    let body = createUserFixture.dadosValidos
    cy.createUser(body).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body).to.be.jsonSchema(createUserSchema)
    })
})
Suporte
Para suporte, por favor abra uma issue no repositório.
