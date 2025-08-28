import { useReducer } from "react";

type State = {
  gender: string;
};

type Action = {
  type: "CHANGE_GENDER";
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_GENDER":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};

export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" });

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="Nam"
            checked={state.gender === "Nam"}
            onChange={(e) =>
              dispatch({ type: "CHANGE_GENDER", payload: e.target.value })
            }
          />
          Nam
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Nữ"
            checked={state.gender === "Nữ"}
            onChange={(e) =>
              dispatch({ type: "CHANGE_GENDER", payload: e.target.value })
            }
          />
          Nữ
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Khác"
            checked={state.gender === "Khác"}
            onChange={(e) =>
              dispatch({ type: "CHANGE_GENDER", payload: e.target.value })
            }
          />
          Khác
        </label>
      </div>
      <br />
      <div>Selected gender: {state.gender}</div>
    </div>
  );
}
