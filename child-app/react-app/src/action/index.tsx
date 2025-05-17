import { useActionState } from "react";
import { addToCart } from "./actions.ts";

interface AddToCartFormProps {
  itemID: string;
  itemTitle: string;
}

function AddToCartForm({ itemID, itemTitle }: AddToCartFormProps) {
  const [message, formAction, isPending] = useActionState(addToCart, null);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">加入购物车</button>
      <p>{isPending ? "加载中……" : message}</p>
    </form>
  );
}

export default function App() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="JavaScript：权威指南" />
      <AddToCartForm itemID="2" itemTitle="JavaScript：优点荟萃" />
    </>
  );
}
