import { Component } from "react";

export default class Bai4 extends Component {
  state = {
    slogan: "Học code để đi làm"
  };

  changeSlogan = () => {
    this.setState({ slogan: "Học code sẽ thành công. Cố lên!!!" });
    console.log("State mới:", this.state.slogan);
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Slogan: "{this.state.slogan}"</h1>
        <button onClick={this.changeSlogan}>Change state</button>
      </div>
    );
  }
}
