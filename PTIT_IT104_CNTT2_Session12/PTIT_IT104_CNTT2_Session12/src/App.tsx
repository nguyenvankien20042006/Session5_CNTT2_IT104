import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import Bai4 from "./components/Bai4/Bai4";
import Bai5 from "./components/bai5";
import AdminIndex from "./components/bai6/AdminIndex";
import "../src/components/bai6/styles.css"
import UserLayout from "./components/bai7/UserLayout";
import "../src/components/bai7/styles.css"
import UserTable from "./components/bai8/UserTable";
import "../src/components/bai8/styles.css"

function App() {
  return (
    <>
      <Bai1 />
      <Bai2 />
      <Bai3 />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Bai4 color="red" />
        <Bai4 color="blue" />
        <Bai4 color="green" />
      </div>
      <Bai5/>
      <AdminIndex/>
      <UserLayout/>
      <UserTable/>
    </>
  );
}

export default App;
