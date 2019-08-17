describe("Main View ", () => {
    beforeEach(() => {
        cy.visit("/app");
    });

    it("loads the list of points", () => {
        cy.get(".badge").should("contain", 663);
        cy.get(".card").should("have.length", 663);
    });
});