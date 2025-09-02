import React, { useReducer, useState } from "react";
import "./LoginForm.css";

interface State {
  loading: boolean;
  success: boolean;
  error: boolean;
}

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR" };

const initialState: State = {
  loading: false,
  success: false,
  error: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: false };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: false };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: true };
    default:
      return state;
  }
}

const LoginForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    dispatch({ type: "LOGIN_START" });
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, 1500);
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên người dùng..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={state.loading}>
        {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>
      {state.success && <p className="success">Đăng nhập thành công!</p>}
      {state.error && <p className="error">Sai tài khoản hoặc mật khẩu</p>}
    </div>
  );
};

export default LoginForm;
