import { useState } from "react";
import { useFormStatus } from "react-dom";
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
    }
  };

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const Submit = () => {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending} style={{ marginTop: "10px" }}>
        {pending ? "提交中" : "提交"}
      </button>
    );
  };
  return (
    <div>
      <form action={fetchData}>
        <div>
          <input value={value} onChange={changeValue} />
          {error && <p>{error}</p>}
        </div>
        <Submit />
      </form>
    </div>
  );
}

export default Normal;
