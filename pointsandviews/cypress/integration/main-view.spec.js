describe("Main View ", () => {

    beforeEach(() => {
        cy.visit("/app");
        cy.get(".login-body")
        .find("button")
        .as("loginbuttons")
    });

    describe("Login operation", () => {
        it("allows a general admin login", () => {
            cy.get("@loginbuttons")
                .contains("GeneralAdmin")
                .click();
            cy.get(".badge").should("contain", 663);
        });
        it("allows a admin controller login", () => {
            cy.get("@loginbuttons")
                .contains("SeniorAdmin")
                .click();
            cy.get(".badge").should("contain", 663);
        });
        it("checking logout", () => {
            cy.get("@loginbuttons")
                .contains("SeniorAdmin")
                .click();
            cy.get(".Auth-Button")
                .click();
        });

    });
    describe("Filtering", () => {

        it("filtering by name", () => {
            cy.get("@loginbuttons")
                .contains("GeneralAdmin")
                .click();
            cy.get("span")
                .contains("Filter")
                .next()
                .type("ach");

        });

        it("filtering by areas", () => {
            cy.get("@loginbuttons")
                .contains("GeneralAdmin")
                .click();
            cy.get('select')
                .select('North East')
                .should('contain', 'North East')
            // possible use    .invoke('North East')

        });

    });

        describe("Button operation on SeniorAdmin", () => {
            it("allows a contact be deleted", () => {
                cy.get("@loginbuttons")
                    .contains("SeniorAdmin")
                    .click();
                cy.get('select')
                    .select('North East')
                cy.get(".badge").should("contain", 23);
                cy.get(".card").eq(1).as("targetcard")
                    .find("button")
                    .as("cardbuttons")
                cy.get("@cardbuttons")
                    .contains("Delete")
                    .click();
                cy.get("@cardbuttons")
                    .contains("Confirm")
                    .click();
                cy.get(".badge").should("contain", 22);
            });

            it("allows a delete operation be canceled", () => {
                cy.get("@loginbuttons")
                    .contains("SeniorAdmin")
                    .click();
                cy.get('select')
                    .select('North East')
                cy.get(".badge").should("contain", 23);
                cy.get(".card").eq(1).as("targetcard")
                    .find("button")
                    .as("cardbuttons")
                cy.get("@cardbuttons")
                    .contains("Delete")
                    .click();
                cy.get("@cardbuttons")
                    .contains("Cancel")
                    .click();
                cy.get(".badge").should("contain", 23);
            });

            it("allows an edit be cancelled", () => {
                cy.get("@loginbuttons")
                    .contains("SeniorAdmin")
                    .click();
                cy.get('select')
                    .select('North East')
                cy.get(".badge").should("contain", 23);
                cy.get(".card").eq(1).as("targetcard")
                    .find("button")
                    .as("cardbuttons")
                cy.get("@targetcard")
                cy.get("span")
                    .contains("latitude")
                 //   .next()
                    .invoke("text")
                    .then($text => {
                        cy.get("@cardbuttons")
                            .contains("Edit")
                            .click();
                        cy.get("@targetcard")
                            .find("input").eq(1)
                            .first()
                            .clear()
                            .type("49.99");
                        cy.get("@cardbuttons")
                            .contains("Cancel")
                            .click();

                    });
            });

            it("allows an edit", () => {
                cy.get("@loginbuttons")
                    .contains("SeniorAdmin")
                    .click();
                cy.get('select')
                    .select('North East')
                cy.get(".badge").should("contain", 23);
                cy.get(".card").eq(1).as("targetcard")
                    .find("button")
                    .as("cardbuttons")
                cy.get("@targetcard")
                cy.get("span")
                    .contains("latitude")
                   // .next()
                    .invoke("text")
                    .then($text => {
                        cy.get("@cardbuttons")
                            .contains("Edit")
                            .click();
                        cy.get("@targetcard")
                            .find("input").eq(1)
                            .first()
                            .clear()
                            .type("49.99");
                        cy.get("@cardbuttons")
                            .contains("Save")
                            .click();
                        cy.get("@targetcard")
                            .find("span")
                            .contains("latitude")
                            .should("contain", "49.99");
                    });
            });


    });


    describe("Comments operation on AdminControl", () => {
        it("allows a comment to be added", () => {
            cy.get("@loginbuttons")
                .contains("SeniorAdmin")
                .click();
            cy.get('select')
                .select('North East')
            cy.get(".badge").should("contain", 23);
            cy.get(".card").eq(1).as("targetcard")
            cy.get("@targetcard")
            cy.get("span")
                .contains("Comment")
                .click()
            cy.get(".form-group")
                .find("input").eq(0)
                .first()
                .clear()
                .type("Really");
            cy.get("button")
                .contains("Add")
                .click();
            cy.get("button")
                .contains("Return")
                .click()
        });

    });


    describe("Navigate to Detail pages", () => {

        // it.only("goes to the correct view", () => {
        it("goes to the correct public detail page", () => {
            cy.get("@loginbuttons")
                .contains("SeniorAdmin")
                .click();
            cy.get('select')
                .select('North East')
            cy.get(".badge").should("contain", 23);
            cy.get(".card").eq(1).as("targetcard")
            cy.get("@targetcard")
                .find("[data-icon=star]")
                .click()
            cy.get("span")
                .contains("Back")
                .should("contain","Back")
        });

        it("goes to the private detail page", () => {
            cy.get("@loginbuttons")
                .contains("SeniorAdmin")
                .click();
            cy.get('select')
                .select('North East')
            cy.get(".badge").should("contain", 23);
            cy.get(".card").eq(1).as("targetcard")
            cy.get("@targetcard")
                .find("[data-icon=star]")
                .click()
            cy.get("button")
                .contains("See Private Data")
                .click()
            cy.get("span")
                .contains("Welcome")
                .should("contain","Welcome")
        });



    });


});