import { useEffect, useState } from "react";
import "./KeyTracker.css";

function KeyTracker() {
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="keytracker-container">
      <h2>⌨️ Phím bạn vừa nhấn:</h2>
      {key && (
        <div className="key-box">
          [{key.toUpperCase()}]
        </div>
      )}
    </div>
  );
}

export default KeyTracker;
