describe('My First Test', () => {
    it('Writing a review', () => {
        cy.visit("/");
        cy.get(".edit-text").type("Good job").should("have.value", "Good job");
        cy.contains("Submit").click();
        cy.get("h1").should('contain', "Good job");
    })

    it('Deleting a review', () => {
        cy.get("h1").should('contain', "Good job").parent().get(".delete").first().click();
    })

    it('Editing a review', () => {
        cy.get(".edit-text").type("Good job").should("have.value", "Good job");
        cy.contains("Submit").click();

        cy.get("h1").should('contain', "Good job").parent().get(".edit").first().click();
        cy.get(".edit-text").clear().type("Edited Good job").should("have.value", "Edited Good job");
        cy.contains("Submit").click();
        cy.get("h1").should('contain', "Edited Good job")
        cy.get("h1").should('not.have.value', "Good job");
    })
})