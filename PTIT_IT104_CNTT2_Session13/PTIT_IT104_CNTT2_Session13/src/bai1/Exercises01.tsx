import { Component } from "react";

class Exercises01 extends Component {
  state = {
    fullName: "Nguyễn Minh Sơn"
  };

  render() {
    return (
      <div>
        <p>Họ và tên: {this.state.fullName}</p>
      </div>
    );
  }
}

export default Exercises01;
