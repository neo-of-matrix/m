<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const link = (locaiton) => {
  console.log(locaiton);
  router.push(locaiton);
};
</script>

<template>
  <nav
    style="
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 10px;
    "
  >
    <button @click="link('/data')">data</button>
    <button @click="link('/store')">store</button>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
