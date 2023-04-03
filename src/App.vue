<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  let script = document.createElement("script");
  script.setAttribute("type", "module");

  [
    "globalThis.process = {};",
    'import initApp from "/distReact/some-react-component.js";',
    "initApp(document.getElementById('react-app'));",
  ].forEach((node) => script.appendChild(document.createTextNode(node)));

  document.head.appendChild(script);
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div id="react-app"></div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
