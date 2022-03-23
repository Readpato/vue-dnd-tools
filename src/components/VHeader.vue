<script setup>
import { MenuAlt1Icon } from "@heroicons/vue/outline";
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">D&D Tools</a>
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-square avatar">
        <MenuAlt1Icon class="w-9 h-9" />
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a class="hover:bg-info hover:text-white">Dice Generator</a></li>
        <li>
          <a class="hover:bg-info hover:text-white">Spell Encyclopedia</a>
        </li>
      </ul>
    </div>
  </div>
</template>
