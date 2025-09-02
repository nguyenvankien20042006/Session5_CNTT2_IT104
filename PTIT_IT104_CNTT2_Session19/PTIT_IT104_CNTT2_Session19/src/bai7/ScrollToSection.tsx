import { useRef } from "react";
import "./ScrollToSection.css";

function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-container">
      <div className="header">
        <h1>🧭 Cuộn tới nội dung</h1>
        <button onClick={handleScroll}>Đi tới phần nội dung</button>
      </div>

      <div className="fake-content">
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
        <p>Thêm đoạn văn để kéo dài trang...</p>
        <p>Thêm đoạn văn để kéo dài trang...</p>
        <p>Thêm đoạn văn để kéo dài trang...</p>
      </div>

      <div ref={sectionRef} className="target-section">
        <h2>🎯 Đây là phần mục tiêu!</h2>
        <p>Bạn vừa cuộn tới đây bằng nút ở trên.</p>
      </div>
    </div>
  );
}

export default ScrollToSection;
