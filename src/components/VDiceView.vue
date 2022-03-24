<script setup>
import VDiceCard from "./VDiceCard.vue";
import VSelectDice from "./VSelectDice.vue";

let diceType = $ref("");

function setDiceType(value) {
  return (diceType = value);
}
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center flex flex-col">
      <h1 class="text-4xl">Dice Generator</h1>
      <VSelectDice @emit-dice-type="setDiceType" />
      <VDiceCard />
    </div>
  </div>
</template>
