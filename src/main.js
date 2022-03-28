import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import VDiceView from "@/views/VDiceView.vue";
import VSpellsView from "@/views/VSpellsView.vue";
import "./assets/base.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Dices", component: VDiceView },
    { path: "/spells", name: "Spells", component: VSpellsView },
  ],
});

createApp(App).use(router).mount("#app");
