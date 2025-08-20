import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

function AdminIndex() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default AdminIndex;
