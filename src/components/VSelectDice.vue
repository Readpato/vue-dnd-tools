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
    <option value="D20">D20</option>
    <option value="D12">D12</option>
    <option value="D10">D10</option>
    <option value="D8">D8</option>
    <option value="D6">D6</option>
    <option value="D4">D4</option>
  </select>
</template>
