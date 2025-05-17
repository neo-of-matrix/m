import { useState, useMemo, useEffect, useCallback } from "react";
import Component from "./Component";
import { slow } from "./utils";
import "./styles.css";
const UpComponent = () => {
  // 部分数据传递给子组件
  const [data, setCount] = useState({ count: 0, data: "UpComponent" });
  // 过滤数据
  const memoData = useMemo(() => {
    return { count: data.count };
  }, [data.count]);

  const [numberData, setNumberData] = useState(0);
  // 耗时计算
  const memoNumberData = useMemo(() => {
    slow();
    return numberData;
  }, [numberData]);
  const setNumberDataCallback = useCallback(() => {
    setNumberData(numberData + 1);
  }, [numberData]);
  const [local, setLocal] = useState(0);
  const options = useMemo(() => {
    return {
      local,
    };
  }, [local]);
  useEffect(() => {
    // 使用 options 进行异步请求
    console.log(options);
  }, [options]);

  return (
    <div className="up-component">
      <div className="up-component-section">
        <div className="control-item">
          <span className="control-label">local-count： {local} </span>
          <button
            onClick={() => {
              setLocal(local + 1);
            }}
          >
            local-increment-UpComponent
          </button>
        </div>
        <div className="control-item">
          <span className="control-label">local-data： {data.data} </span>
          <button
            onClick={() =>
              setCount({
                ...data,
                data: "changeData",
              })
            }
          >
            changeData
          </button>
        </div>
        <div className="control-item">
          <button
            onClick={() =>
              setCount({
                ...data,
                count: data.count + 1,
              })
            }
          >
            Increment-UpComponent
          </button>
        </div>
      </div>
      <Component
        data={memoData}
        numberData={memoNumberData}
        setNumberData={setNumberDataCallback}
      />
    </div>
  );
};
export default UpComponent;
