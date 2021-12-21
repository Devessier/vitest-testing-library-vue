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
  <main class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="mb-4">Vitest + Testing Library Vue</h1>

    <div class="flex space-x-4">
      <p>Count: {{ counter }}</p>

      <button @click="increment">Increase counter</button>
    </div>
  </main>
</template>
