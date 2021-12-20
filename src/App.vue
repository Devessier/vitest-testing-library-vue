<script setup lang="ts">
import "./index.css";
import { ref } from "vue";

const counter = ref(0);

function increment() {
  console.log("increment");

  counter.value++;
}
</script>

<template>
  <main class="flex justify-center items-center min-h-screen">
    <h1>Vitest + Testing Library Vue</h1>

    <p>Count: {{ counter }}</p>

    <button @click="increment">Increase counter</button>
  </main>
</template>
