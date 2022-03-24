<script setup>
const emit = defineEmits(["emitDiceType"]);
let diceType = $ref("Pick your dice");
</script>

<template>
  <select
    v-model="diceType"
    class="select select-primary w-full max-w-xs"
    @change="$emit('emitDiceType', diceType)"
  >
    <option disabled selected>Pick your dice</option>
    <option value="d4">D4</option>
    <option value="d6">D6</option>
    <option value="d8">D8</option>
    <option value="d10">D10</option>
    <option value="d12">D12</option>
    <option value="d20">D20</option>
  </select>
</template>
