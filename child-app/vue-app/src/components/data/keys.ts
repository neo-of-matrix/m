import type { InjectionKey, Ref } from "vue";
export const myInjectionKey: InjectionKey<Ref<number | null>> = Symbol();
