import { useReducer } from "react";
import { stateReducer } from "./implementation.ts";
function createInitialState({ age }: { age: number }) {
  return {
    age,
  };
}
export default function Counter() {
  const [state, dispatch] = useReducer(
    stateReducer,
    { age: 0 },
    createInitialState
  );

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
