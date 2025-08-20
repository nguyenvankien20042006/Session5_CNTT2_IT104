import { Component } from "react";

export default class Bai2 extends Component {
  a: number = 10;
  b: number = 10;

  render() {
    return (
      <div>
        <h2>Danh sách kết quả</h2>
        <ul>
          <li>{this.a} + {this.b} = {this.a + this.b}</li>
          <li>{this.a} - {this.b} = {this.a - this.b}</li>
          <li>{this.a} * {this.b} = {this.a * this.b}</li>
          <li>{this.a} / {this.b} = {this.a / this.b}</li>
        </ul>
      </div>
    );
  }
}
