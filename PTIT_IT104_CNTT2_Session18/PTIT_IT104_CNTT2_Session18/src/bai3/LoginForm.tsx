import React, { useState, useCallback } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
