<script setup lang="ts">
import { useAttrs } from "vue";
import ChildComponent from "./ChildComponent.vue";

const model = defineModel<number | null>();

const emit = defineEmits<{
  (e: "reset", msg: string): void;
}>();
withDefaults(
  defineProps<{
    propsData?: {
      a: number;
    };
  }>(),
  {
    propsData: () => ({ a: 10 }),
  }
);

const attrs = useAttrs();
const increment = () => {
  if (model.value != null) {
    model.value++;
  } else {
    model.value = 1;
  }
};
const reset = () => {
  emit("reset", "reset");
};
const update = () => {
  if (typeof attrs.onUpdate === "function") {
    attrs.onUpdate("attrs");
  }
};

type MaybeTimeout = ReturnType<typeof setTimeout> | undefined;

interface Recursive {
  [x: string]: Recursive;
}
function frequentlyCalled() {
  let timeoutId: MaybeTimeout = undefined;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {}, 500);
}
defineExpose({
  increment,
});
</script>
<template>
  <div>Parent bound v-model is: {{ model || 0 }}</div>
  <div style="display: flex; gap: 10px">
    <button @click="increment">Increment</button>
    <button v-bind="$attrs" @click="update">reset-component</button>
    <button @click="reset">emit</button>
  </div>
  <div>propsData：{{ propsData }}</div>
  <ChildComponent></ChildComponent>
</template>
