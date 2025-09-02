import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { toggleTheme } = context;

  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme} style={{ padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
