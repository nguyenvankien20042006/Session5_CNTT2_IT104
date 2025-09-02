import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme } = context;

  return (
    <main>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>
        Theme hiện tại: <strong>{theme.toUpperCase()}</strong>
      </p>
    </main>
  );
}

export default Content;
