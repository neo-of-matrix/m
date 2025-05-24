import { useState } from "react";
import request from "./api";

function Normal() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const data = await request();
    setIsPending(false);
    if (data.code !== 200) {
      setError(data.msg);
    } else {
      console.log(data);
    }
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
      <button
        onClick={handleSubmit}
        disabled={isPending}
        style={{ marginTop: "10px" }}
      >
        {isPending ? "提交中" : "提交"}
      </button>
    </div>
  );
}

export default Normal;
