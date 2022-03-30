/// <reference types="cypress" />

const URL = "http://localhost:5050/";

context("D&D Tools", () => {
  before(() => {
    cy.visit(URL);
  });
  describe("Layout", () => {
    it("Assess the navigation bar works correctly", () => {
      cy.get(".navbar a:first").should("contain.text", "D&D Tools");
      cy.get(".dropdown > ul").should("not.be.visible");
      cy.get(".dropdown").click();
      cy.get(".dropdown > ul").should("be.visible");
      cy.get(".dropdown > ul > li:first")
        .should("be.visible")
        .and("contain.text", "Dice Generator");
      cy.get(".dropdown > ul > li:last")
        .should("be.visible")
        .and("contain.text", "Spell Encyclopedia");
    });
  });
});
