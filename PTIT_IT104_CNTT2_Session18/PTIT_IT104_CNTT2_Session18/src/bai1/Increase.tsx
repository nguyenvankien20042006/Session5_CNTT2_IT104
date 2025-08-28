import { useReducer } from "react";

type Action = { type: "INCREMENT" };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export default function Increase() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase
      </button>
    </div>
  );
}
