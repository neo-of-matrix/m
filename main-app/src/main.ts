import "./style.css";
import microApp from "@micro-zoe/micro-app";
import qs from "qs";
microApp.start();

function link(element: HTMLButtonElement) {
  const linkTo = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const query = qs.parse(window.location.search.replace("?", ""));
    if (Object.keys(query).includes(target.innerHTML)) {
      return;
    }
    document.querySelector<HTMLDivElement>(
      "#micro-apps"
    )!.innerHTML = `<micro-app name="${
      target.innerHTML
    }" url="http://localhost:${
      target.innerHTML === "react-app" ? 3000 : 9000
    }/" iframe></micro-app>`;

    window.history.pushState(
      {},
      "",
      `?${target.innerHTML}=${encodeURIComponent("/")}`
    );
  };

  element.addEventListener("click", (e) => linkTo(e));
}
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
      <div id="router">
        <button>react-app</button>
        <button>vue-app</button>
      </div>
      <div id="micro-apps">
        <micro-app name="react-app" url="http://localhost:3000/" iframe></micro-app>
      </div>
    </div>
`;
link(document.querySelector<HTMLButtonElement>("#router")!);
