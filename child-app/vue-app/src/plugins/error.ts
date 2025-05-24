import type { Plugin } from "vue";

function errorHandler(err: unknown, msg: string) {
  console.error(err, msg);
  // TODO: 处理错误上报
}
const errorPlugin: Plugin = {
  install: (app) => {
    window.onerror = function (...args) {
      errorHandler(args[4], "全局捕获错误");
    };
    app.config.errorHandler = (err) => {
      errorHandler(err, "errorHandler");
    };
  },
};
export default errorPlugin;
