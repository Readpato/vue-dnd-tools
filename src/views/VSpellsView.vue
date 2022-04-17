<script setup>
import getApiData from "@/services/api.js";

getApiData();
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center flex flex-col">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
