import { Component } from "react";

interface CounterState {
  count: number;
}

export default class Counter extends Component<object, CounterState> {
  state: CounterState = {
    count: 0
  };

  timerID: number | undefined;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count === 10 ? 0 : prevState.count + 1
      }));
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
        <h2>Giá trị đếm: {this.state.count}</h2>
      </div>
    );
  }
}
