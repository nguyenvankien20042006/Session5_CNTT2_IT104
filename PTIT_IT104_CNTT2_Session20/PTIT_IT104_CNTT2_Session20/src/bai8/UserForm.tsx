import { useReducer } from "react"
import "./UserForm.css"

type State = {
  name: string
  email: string
}

type Action = 
  | { type: "SET_NAME"; value: string }
  | { type: "SET_EMAIL"; value: string }

const initState: State = {
  name: "",
  email: ""
}

function reducer(state: State, action: Action): State {
  switch(action.type){
    case "SET_NAME":
      return { ...state, name: action.value }
    case "SET_EMAIL":
      return { ...state, email: action.value }
    default:
      return state
  }
}

export default function UserForm(){
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div className="form-container">
      <h2>User Information Form</h2>

      <div>
        <label>Tên:</label>
        <input 
          type="text" 
          value={state.name}
          onChange={(e)=>dispatch({type:"SET_NAME", value: e.target.value})}
        />
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={state.email}
          onChange={(e)=>dispatch({type:"SET_EMAIL", value: e.target.value})}
        />
      </div>

      <div className="user-info">
        <h3>Thông tin người dùng:</h3>
        <p>Tên: {state.name || "(Chưa nhập)"}</p>
        <p>Email: {state.email || "(Chưa nhập)"}</p>
      </div>
    </div>
  )
}
