/* eslint-disable no-undef */
import { mount } from "@cypress/vue";
import VDiceCard from "../VDiceCard.vue";

it("Mount component with D20 dice, roll the dice, and store the value ", () => {
  mount(VDiceCard, { props: { diceType: "D20" } });
  let firstRoll = [];
  cy.get(".card-title").should("contain.text", "Dice: D20");
  cy.get(".card-body > p").and("contain.text", "Result: Not rolled yet!");
  cy.get(".btn").click();
  cy.get(".card-body > p").should(
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
      pElement[0].textContent.trim() === "Last result: Oh no... Natural 1!"
    ) {
      let secondRoll = pElement[0].textContent.split(" ")[5].split("!")[0];
      return expect(firstRoll[0]).to.equal(secondRoll);
    } else {
      let secondRoll = pElement[0].textContent.split("Last result: ")[1];
      return expect(firstRoll[0]).to.equal(secondRoll);
    }
  });
});
