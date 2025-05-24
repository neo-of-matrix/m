<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../stores/index.ts";
const store = useCounterStore();
const { count } = storeToRefs(store);
</script>
<template>
  <div style="display: flex; gap: 10px; flex-direction: column">
    <div>{{ count }}</div>
    <button @click="store.increment">Increment</button>
  </div>
</template>
