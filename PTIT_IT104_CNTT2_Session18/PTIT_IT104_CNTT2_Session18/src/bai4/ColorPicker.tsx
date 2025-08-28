import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <div>
        <label>Màu người dùng chọn:</label>
        <br />
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>
      <br />
      <div>
        <label>Màu hiển thị:</label>
        <br />
        <div
          style={{
            width: "200px",
            height: "100px",
            border: "1px solid black",
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
