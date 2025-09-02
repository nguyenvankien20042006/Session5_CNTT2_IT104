import { useState, useRef, useEffect } from "react";

function RenderCounter() {
  const [value, setValue] = useState<string>("");

  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Component Render Counter</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Input:{" "}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ padding: "5px" }}
          />
        </label>
      </div>
      <p>
        Component đã render: <strong>{renderCount.current}</strong> lần
      </p>
    </div>
  );
}

export default RenderCounter;
