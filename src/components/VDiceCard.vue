<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

let rollResult = $ref("Not rolled yet!");
let previousResult = $ref(null);
const props = defineProps({
  diceType: {
    type: String,
    default: "D20",
  },
});

const isPreviousResultNumber = computed(() => {
  return previousResult === null || previousResult === "Not rolled yet!"
    ? false
    : true;
});

const showD20Icon = computed(() => {
  return props.diceType === "D20" ? true : false;
});
const showD12Icon = computed(() => {
  return props.diceType === "D12" ? true : false;
});
const showD10Icon = computed(() => {
  return props.diceType === "D10" ? true : false;
});
const showD8Icon = computed(() => {
  return props.diceType === "D8" ? true : false;
});
const showD6Icon = computed(() => {
  return props.diceType === "D6" ? true : false;
});
const showD4Icon = computed(() => {
  return props.diceType === "D4" ? true : false;
});

function rollDie(diceType) {
  if (!diceType) return;
  if (diceType === "D20") {
    let dieResult = rolld20();
    return (rollResult = dieResult);
  }
  if (diceType === "D12") {
    let dieResult = rolld12();
    return (rollResult = dieResult);
  }
  if (diceType === "D10") {
    let dieResult = rolld10();
    return (rollResult = dieResult);
  }
  if (diceType === "D8") {
    let dieResult = rolld8();
    return (rollResult = dieResult);
  }
  if (diceType === "D6") {
    let dieResult = rolld6();
    return (rollResult = dieResult);
  }
  if (diceType === "D4") {
    let dieResult = rolld4();
    return (rollResult = dieResult);
  }
}

function rolld20() {
  setLastRoll();
  const diceValue = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  if (dieResult === 20) {
    return "Natural 20!";
  } else if (dieResult === 1) {
    return "Oh no... Natural 1!";
  } else {
    return dieResult;
  }
}
function rolld12() {
  setLastRoll();
  const diceValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
function rolld10() {
  setLastRoll();
  const diceValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
function rolld8() {
  setLastRoll();
  const diceValue = [1, 2, 3, 4, 5, 6, 7, 8];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
function rolld6() {
  setLastRoll();
  const diceValue = [1, 2, 3, 4, 5, 6];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}

function rolld4() {
  setLastRoll();
  const diceValue = [1, 2, 3, 4];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}

function setLastRoll() {
  if (rollResult === "Not rolled yet") {
    return;
  } else {
    return (previousResult = rollResult);
  }
}
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10 w-64 h-64 mx-auto">
      <Icon
        v-if="showD20Icon"
        icon="mdi:dice-d20"
        class="d20-svg w-52 h-52 text-accent"
      />
      <Icon
        v-if="showD12Icon"
        icon="mdi:dice-d12"
        class="d12-svg w-52 h-52 text-accent"
      />
      <Icon
        v-if="showD10Icon"
        icon="mdi:dice-d10"
        class="d10-svg w-52 h-52 text-accent"
      />
      <Icon
        v-if="showD8Icon"
        icon="mdi:dice-d8"
        class="d8-svg w-52 h-52 text-accent"
      />
      <Icon
        v-if="showD6Icon"
        icon="mdi:dice-d6"
        class="d6-svg w-52 h-52 text-accent"
      />
      <Icon
        v-if="showD4Icon"
        icon="mdi:dice-d4"
        class="d4-svg w-52 h-52 text-accent"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Dice: {{ diceType }}</h2>
      <p v-if="isPreviousResultNumber">Last result: {{ previousResult }}</p>
      <p class="font-bold">
        Result: <span>{{ rollResult }}</span>
      </p>
      <div class="card-actions">
        <button class="btn btn-primary" @click="rollDie(diceType)">Roll</button>
      </div>
    </div>
  </div>
</template>
