# Test

## Descrição
Projeto de testes automatizados usando Cypress para validar a API de criação de usuários.

## Pré-requisitos
- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node)
- Cypress (instalado como dependência do projeto)

## Estrutura
- `cypress/`: Testes automatizados e dados de teste.
  - `fixtures/createUser.json`: Dados de teste para criação de usuário.
  - `support/schemas.js`: Esquemas de validação para as respostas da API.
- `node_modules/`: Dependências do projeto.
- `cypress.config.js`: Configuração do Cypress.
- `package-lock.json`: Arquivo que descreve as dependências exatas usadas no projeto.
- `package.json`: Dependências e scripts do projeto.

## Instalação
Para instalar as dependências do projeto, execute o seguinte comando:
 - `npm install`

## Rodar os testes
Para rodar os testes automatizados com Cypress, utilize o comando:
 - `npx cypress run`

