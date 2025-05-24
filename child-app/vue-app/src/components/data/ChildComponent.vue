<script setup lang="ts">
import { inject } from "vue";
import { myInjectionKey } from "./keys.js";
const countModel = inject(myInjectionKey);
</script>
<template>
  <div>inject: {{ countModel || 0 }}</div>
</template>
