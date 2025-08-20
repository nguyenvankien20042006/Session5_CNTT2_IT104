import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Main from "./Main";
import Article from "./Article";

function UserLayout() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="content">
        <Menu />
        <Main />
        <Article />
      </div>
    </div>
  );
}

export default UserLayout;
