import { Component } from "react";

class Exercise02 extends Component {
  state = {
    id: 1,
    name: "Nguyễn Văn Sơn",
    birthday: "20/12/2023",
    address: "Thanh Xuân, Hà Nội"
  };

  render() {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.8" }}>
        <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
          Thông tin cá nhân
        </h2>

        <p style={{ margin: "5px 0" }}>id: {this.state.id}</p>
        <p style={{ margin: "5px 0" }}>Tên: {this.state.name}</p>
        <p style={{ margin: "5px 0" }}>Ngày sinh: {this.state.birthday}</p>
        <p style={{ margin: "5px 0" }}>Địa chỉ: {this.state.address}</p>
      </div>
    );
  }
}

export default Exercise02;
