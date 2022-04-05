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
    it("Change die type to D20, roll it and assess the value is stored", () => {
      let firstRoll = [];
      cy.get("select").select("D20");
      cy.get(".d20-svg").should("be.visible");
      cy.get(".card-body > h2").should("contain.text", "Dice: D20");
      cy.get(".card-body > p:last").should(
        "contain.text",
        "Result: Not rolled yet!"
      );
      cy.get("button").click();
      cy.get(".card-body > p:last").should(
        "not.contain.text",
        "Result: Not rolled yet!"
      );
      cy.get(".card-body > p:last").then((pElement) => {
        if (pElement[0].textContent.trim() === "Result: Natural 20!") {
          return firstRoll.push(
            pElement[0].textContent.split("Result: Natural ")[1].split("!")[0]
          );
        } else if (
          pElement[0].textContent.trim() === "Result: Oh no... Natural 1!"
        ) {
          return firstRoll.push(
            pElement[0].textContent.split("Oh no... Natural ")[1].split("!")[0]
          );
        } else {
          return firstRoll.push(pElement[0].textContent.split(" ")[2]);
        }
      });
      cy.get("button").click();
      cy.get(".card-body > p:first").then((pElement) => {
        if (pElement[0].textContent.trim() === "Last result: Natural 20!") {
          let secondRoll = pElement[0].textContent
            .split("Last result: Natural ")[1]
            .split("!")[0];
          return expect(firstRoll[0]).to.equal(secondRoll);
        } else if (
          pElement[0].textContent.trim() === "Last result: Oh no...  Natural 1!"
        ) {
          let secondRoll = pElement[0].textContent
            .split("Last result: Natural ")[1]
            .split("!")[0];
          return expect(firstRoll[0]).to.equal(secondRoll);
        } else {
          let secondRoll = pElement[0].textContent.split("Last result: ")[1];
          return expect(firstRoll[0]).to.equal(secondRoll);
        }
      });
    });
    it("Change die to D12, roll it and assess the value is stored", () => {
      let firstRollResult = {};
      cy.get("select").select("D12");
      cy.get(".d12-svg").should("exist").and("be.visible");
      cy.get(".card-title").should("exist").and("contain.text", "Dice: D12");
      cy.get("button").click();
      cy.get(".card-body > p:last").then((pElement) => {
        firstRollResult.result = pElement[0].textContent.trim().split(" ")[1];
      });
      cy.get("button").click();
      cy.get(".card-body > p:first").then((pElement) => {
        let storedRoll = pElement[0].textContent.trim().split(" ")[2];
        expect(firstRollResult.result).to.be.equal(storedRoll);
      });
    });
    it("Change die to D10, roll it and assess the value is stored", () => {
      let firstRollResult = {};
      cy.get("select").select("D10");
      cy.get(".d10-svg").should("exist").and("be.visible");
      cy.get(".card-title").should("exist").and("contain.text", "Dice: D10");
      cy.get("button").click();
      cy.get(".card-body > p:last").then((pElement) => {
        firstRollResult.result = pElement[0].textContent.trim().split(" ")[1];
      });
      cy.get("button").click();
      cy.get(".card-body > p:first").then((pElement) => {
        let storedRoll = pElement[0].textContent.trim().split(" ")[2];
        expect(firstRollResult.result).to.be.equal(storedRoll);
      });
    });
    it("Change die to D8, roll it and assess the value is stored", () => {
      let firstRollResult = {};
      cy.get("select").select("D8");
      cy.get(".d10-svg").should("exist").and("be.visible");
      cy.get(".card-title").should("exist").and("contain.text", "Dice: D8");
      cy.get("button").click();
      cy.get(".card-body > p:last").then((pElement) => {
        firstRollResult.result = pElement[0].textContent.trim().split(" ")[1];
      });
      cy.get("button").click();
      cy.get(".card-body > p:first").then((pElement) => {
        let storedRoll = pElement[0].textContent.trim().split(" ")[2];
        expect(firstRollResult.result).to.be.equal(storedRoll);
      });
    });
    it("Change die to D6, roll it and assess the value is stored", () => {
      let firstRollResult = {};
      cy.get("select").select("D6");
      cy.get(".d6-svg").should("exist").and("be.visible");
      cy.get(".card-title").should("exist").and("contain.text", "Dice: D6");
      cy.get("button").click();
      cy.get(".card-body > p:last").then((pElement) => {
        firstRollResult.result = pElement[0].textContent.trim().split(" ")[1];
      });
      cy.get("button").click();
      cy.get(".card-body > p:first").then((pElement) => {
        let storedRoll = pElement[0].textContent.trim().split(" ")[2];
        expect(firstRollResult.result).to.be.equal(storedRoll);
      });
    });
  });
});
