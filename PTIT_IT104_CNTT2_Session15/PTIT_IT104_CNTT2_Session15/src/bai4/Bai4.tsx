import { Component } from "react";

interface workProgress {
  workProgress: string;
}

export default class Bai4 extends Component<object, workProgress> {
  constructor(props: object) {
    super(props);
    this.state = {
      workProgress: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ workProgress: e.target.value });
  };

  progressSubmitted = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ workProgress: this.state.workProgress });
  };

  render() {
    return (
      <div>
        <h2>Tiến độ hoàn thành: {this.state.workProgress} %</h2>
        <form onSubmit={this.progressSubmitted}>
          <input
            type="range"
            value={this.state.workProgress}
            onChange={this.handleChange}
            min="0"
            max="100"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
