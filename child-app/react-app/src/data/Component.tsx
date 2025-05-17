import { memo } from "react";
import debounce from "lodash/debounce";
import ChildComponent from "./ChildComponent";
import "./styles.css";

const ComponentMemo = memo(
  function Component({
    data,
    numberData,
    setNumberData,
  }: {
    data: { count: number };
    numberData: number;
    setNumberData: (numberData: number) => void;
  }) {
    const setNumberDataDebounce = debounce(() => {
      setNumberData(numberData + 1);
    }, 1000);
    return (
      <div className="component">
        <div className="control-item">
          <p>numberData：{numberData}</p>
          <button onClick={setNumberDataDebounce}>setNumberData</button>
        </div>
        <ChildComponent data={data} />
      </div>
    );
  }
  // (prevProps, nextProps) => {
  //   return prevProps.data.count === nextProps.data.count;
  // }
);
export default ComponentMemo;
