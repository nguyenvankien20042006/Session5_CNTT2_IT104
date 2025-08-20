import Cart from "./Cart";

function Main() {
  return (
    <main className="main">
      {/* Render nhiều cart */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Cart key={i} />
      ))}
    </main>
  );
}

export default Main;
