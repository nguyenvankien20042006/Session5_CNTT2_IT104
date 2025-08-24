import { Component } from "react";

export default class Bai2 extends Component {
  constructor() {
    super({});
    this.state = {};
    console.log("Constructor: Component đang được khởi tạo");
  }

  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Xin chào! Đây là Notification Component</h2>
      </div>
    );
  }
}
