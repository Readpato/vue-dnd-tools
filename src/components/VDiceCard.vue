<script setup>
let rollResult = $ref("");
const props = defineProps({
  diceType: {
    type: String,
    default: "D20",
  },
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
  const diceValue = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
function rolld12() {
  const diceValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
function rolld10() {
  const diceValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
function rolld8() {
  const diceValue = [1, 2, 3, 4, 5, 6, 7, 8];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
function rolld6() {
  const diceValue = [1, 2, 3, 4, 5, 6];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}

function rolld4() {
  const diceValue = [1, 2, 3, 4];
  let dieResult = diceValue[Math.floor(Math.random() * diceValue.length)];
  return dieResult;
}
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Dice: {{ diceType }}</h2>
      <p class="font-bold">
        Result: <span>{{ rollResult }}</span>
      </p>
      <div class="card-actions">
        <button class="btn btn-primary" @click="rollDie(diceType)">Roll</button>
      </div>
    </div>
  </div>
</template>
