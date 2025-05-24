import { useOptimistic, useState, startTransition } from "react";
import request from "./api";
function App() {
  const [isPending, setIsPending] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  function handleSubmit() {
    startTransition(async () => {
      changeOptimisticPending(true);
      const data = await request();
      if (data.code !== 200) {
        setError(data.msg);
      } else {
        console.log(data);
        setIsPending(false);
      }
    });
  }
  const [optimisticPending, changeOptimisticPending] = useOptimistic(
    isPending,
    (_, optimisticValue: boolean) => {
      return optimisticValue;
    }
  );
  const Submit = () => {
    return (
      <button
        onClick={handleSubmit}
        disabled={optimisticPending}
        style={{ marginTop: "10px" }}
      >
        {optimisticPending ? "提交中" : "提交"}
      </button>
    );
  };

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <div>
        <input value={value} onChange={changeValue} />
        {error && <p>{error}</p>}
      </div>
      <Submit />
    </div>
  );
}

export default App;
