import { defineConfig } from "vite";
import qiankun from "vite-plugin-qiankun";
const useDevMode = true;
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    qiankun("react-app", {
      useDevMode,
    }),
  ],
  base: "/react-app/",
  server: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
