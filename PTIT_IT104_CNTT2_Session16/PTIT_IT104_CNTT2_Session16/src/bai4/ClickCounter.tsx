import { Component } from "react";

export default class ClickCounter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState: { count: number }) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Bạn đã click {this.state.count} lần</h2>
        <button
          onClick={this.handleClick}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
