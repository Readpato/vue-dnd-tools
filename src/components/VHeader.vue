<script setup>
import { MenuAlt1Icon } from "@heroicons/vue/outline";
</script>

<template>
  <div class="navbar bg-base-100 fixed">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case text-xl"
        >D&D Tools</router-link
      >
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-square avatar">
        <MenuAlt1Icon class="w-9 h-9" />
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <router-link to="/" class="hover:bg-info hover:text-white"
            >Dice Generator</router-link
          >
        </li>
        <li>
          <router-link to="/spells" class="hover:bg-info hover:text-white"
            >Spell Encyclopedia</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
