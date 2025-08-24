import { useState } from "react";
import "./Bai8.css";

export default function Bai8() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email và mật khẩu không được để trống!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (foundUser) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Đăng nhập thất bại. Sai Email hoặc mật khẩu!");
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
