<script setup lang="ts">
import {
  ref,
  provide,
  useTemplateRef,
  defineAsyncComponent,
  onMounted,
} from "vue";
const countModel = ref<number | null>(null);
import { myInjectionKey } from "./keys.js";
import vFocus from "../../directives/focus.ts";
const AsyncComp = defineAsyncComponent({
  loader: () => import("./Component.vue"),
  delay: 100,
  timeout: 3000,
});
const reset = (msg: string) => {
  countModel.value = 0;
  console.log(msg);
};
provide(myInjectionKey, countModel);
type AsyncCompType = InstanceType<typeof AsyncComp>;
const componentRef = useTemplateRef<AsyncCompType>("child");
const childIncrement = () => {
  componentRef.value?.increment();
};
onMounted(() => {
  console.log(textToAddInput.value);
});
function handleHeightResize(ev: Event) {
  const value = (ev.currentTarget as HTMLInputElement).value;
  console.log(value);
}
const textToAddInput = ref<HTMLInputElement | null>(null);
const width = "100px";
</script>
<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <AsyncComp
      v-model="countModel"
      id="component"
      @update="reset"
      @reset="reset"
      :propsData="{ a: 1 }"
      ref="child"
    />
    <div>
      <button
        @click="
          () => {
            reset('reset-upComponent');
          }
        "
      >
        reset-upComponent
      </button>
    </div>
    <div><button @click="childIncrement">childIncrement</button></div>
    <div>
      <input v-focus ref="textToAddInput" class="width" @input="handleHeightResize" />
    </div>
  </div>
</template>
<style scoped>
.width {
  width: v-bind(width);
}
</style>
