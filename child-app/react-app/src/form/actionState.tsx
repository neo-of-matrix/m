import { useState, useActionState, startTransition } from "react";
import request from "./api";

function Normal() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    const data = await request();
    if (data.code !== 200) {
      setError(data.msg);
    } else {
      console.log(data);
      return data;
    }
  };
  const [_, formAction, isPending] = useActionState(fetchData, null);
  const handleSubmit = async () => {
    startTransition(formAction);
  };
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const Submit = () => {
    return (
      <button
        onClick={handleSubmit}
        disabled={isPending}
        style={{ marginTop: "10px" }}
      >
        {isPending ? "提交中" : "提交"}
      </button>
    );
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

export default Normal;
