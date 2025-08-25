import { Component } from "react";

export default class Clock extends Component {
  state = {
    time: new Date()
  };

  timerID: number | undefined;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div>
        <h2>Thời gian hiện tại: {this.state.time.toLocaleTimeString("vi-VN")}</h2>
      </div>
    );
  }
}
