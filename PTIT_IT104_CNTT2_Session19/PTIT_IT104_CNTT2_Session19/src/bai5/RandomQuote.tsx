import { useState } from "react";
import "./RandomQuote.css";

function RandomQuote() {
  const quotes: string[] = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ];

  const [quote, setQuote] = useState<string>("Không gì là không thể.");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <h2>🧠 Câu nói truyền cảm hứng hôm nay:</h2>
      <p className="quote">“{quote}”</p>
      <button onClick={getRandomQuote}>Lấy câu nói mới</button>
    </div>
  );
}

export default RandomQuote;
