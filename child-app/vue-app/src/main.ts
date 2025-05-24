import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import { createPinia } from "pinia";
import errorPlugin from "./plugins/error.ts";
import "./style.css";
import App from "./App.vue";
import UpComponent from "./components/data/UpComponent.vue";
import StoreComponent from "./components/store/index.vue";
const routes = [
  { path: "/", component: UpComponent },
  { path: "/data", component: UpComponent },
  { path: "/store", component: StoreComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();
const app = createApp(App);
app.use(errorPlugin);
app.use(router);
app.use(pinia);
app.mount("#app");
