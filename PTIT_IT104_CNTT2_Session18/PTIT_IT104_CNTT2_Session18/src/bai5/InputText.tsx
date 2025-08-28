import { useReducer } from "react";

type State = {
  text: string;
};

type Action = {
  type: "CHANGE_TEXT";
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  return (
    <div>
      <h1>{state.text || "Input change"}</h1>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "CHANGE_TEXT", payload: e.target.value })
        }
        placeholder="Input change"
      />
    </div>
  );
}
