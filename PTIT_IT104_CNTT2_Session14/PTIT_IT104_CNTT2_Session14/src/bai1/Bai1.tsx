import { Component } from 'react'

export default class Bai1 extends Component {
  state = {
    company: "Rikkei Academy",
  };

  handleChange = () => {
    this.setState({ company: "Rikkeisoft" });
  };

  render() {
    return (
      <div>
        <p>Company: {this.state.company}</p>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}
