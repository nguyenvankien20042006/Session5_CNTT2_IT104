import { Component } from "react";

export default class Bai3 extends Component {
  constructor() {
    super({});
    this.state = {
      company: "Rikkei Academy"
    };
  }

  changeCompany = () => {
    this.setState({ company: "RikkeiSoft" });
  };

  render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    );
  }
}
