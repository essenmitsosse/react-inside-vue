<script setup lang="ts">
import { onMounted, ref } from "vue";

const count = ref(0);

const setCount = ($event: { detail: { value: number } }) => {
  count.value = $event.detail.value;
};

onMounted(() => {
  let script = document.createElement("script");
  script.setAttribute("type", "module");
  script.setAttribute("src", "/distReact/some-react-component.js");
  document.head.appendChild(script);
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <h1>Vite + Vue</h1>
      <button type="button" @click="count++">
        Vue Button: count is {{ count }}
      </button>
    </div>
    <div class="row custom-react">
      <custom-react :value="count" @setValue="setCount" />
    </div>
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

.container {
  display: flex;
}

.custom-react {
  outline: 2px red solid;
  background: rgba(255, 0, 0, 0.1);
}

.custom-react:before {
  content: "This is a React component wrapped in a Web component";
  background: red;
}
</style>
