import Normal from "./normal";
import Action from "./action";
import ActionState from "./actionState";
import ActionButton from "./actionButton";
import Optimistic from "./optimistic";

function FormStatus() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>normal</div>
      <Normal />
      <div>useTransition</div>
      <Action />
      <div>useActionState</div>
      <ActionState />
      <div>useFormStatus</div>
      <ActionButton />
      <div>useOptimistic</div>
      <Optimistic />
    </div>
  );
}

export default FormStatus;
