import { useState, memo } from "react";
import "./styles.css";

const ChildComponentMeno = memo(function ChildComponent({
  data,
}: {
  data: { count: number };
}) {
  const [local, setLocal] = useState(0);
  return (
    <div className="child-component">
      <div>
        <span className="child-control">
          local-count-ChildComponent：{local}
        </span>
        <button
          onClick={() => {
            setLocal(local + 1);
          }}
        >
          local-increment-ChildComponent
        </button>
      </div>
      <p>count-from-UpComponent：{data.count}</p>
    </div>
  );
});
export default ChildComponentMeno;
