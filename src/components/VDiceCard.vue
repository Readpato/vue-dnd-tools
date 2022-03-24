<script setup></script>

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
      <h2 class="card-title">Dice:</h2>
      <p class="font-bold">Result: <span></span></p>
      <div class="card-actions">
        <button class="btn btn-primary">Roll</button>
      </div>
    </div>
  </div>
</template>
