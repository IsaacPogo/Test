Cypress.Commands.add("createUser", function(payload) {
    cy.api({
        method: "POST",
        url: Cypress.env("urlCreateUser"),
        body: payload,
        failOnStatusCode: false
    })

})