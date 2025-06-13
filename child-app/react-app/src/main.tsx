import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";

let root: Root;

function render(props: any) {
  const { container } = props;
  root = createRoot(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")!
  );
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
renderWithQiankun({
  mount(props) {
    console.log("react18 mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("react18 unmount");
    root.unmount();
  },
  update(props: any) {
    console.log("react18 update");
    console.log(props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
