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

  describe("Dice Generator", () => {
    it("Assess that the h1 element has been rendered correctly", () => {
      cy.get("h1").should("contain.text", "Dice Generator");
    });
    it("Makes sure the select element has been rendered correctly", () => {
      cy.get("select").should("contain.text", "Pick your dice");
      cy.get("select option").should("have.length", "7");
      cy.get("select option").eq(0).should("be.disabled");
      cy.get("select option")
        .eq(1)
        .should("be.enabled")
        .and("contain.text", "D20")
        .and("contain.value", "D20");
      cy.get("select option")
        .eq(2)
        .should("be.enabled")
        .and("contain.text", "D12")
        .and("contain.value", "D12");
      cy.get("select option")
        .eq(3)
        .should("be.enabled")
        .and("contain.text", "D10")
        .and("contain.value", "D10");
      cy.get("select option")
        .eq(4)
        .should("be.enabled")
        .and("contain.text", "D8")
        .and("contain.value", "D8");
      cy.get("select option")
        .eq(5)
        .should("be.enabled")
        .and("contain.text", "D6")
        .and("contain.value", "D6");
      cy.get("select option")
        .eq(6)
        .should("be.enabled")
        .and("contain.text", "D4")
        .and("contain.value", "D4");
    });
  });
});
