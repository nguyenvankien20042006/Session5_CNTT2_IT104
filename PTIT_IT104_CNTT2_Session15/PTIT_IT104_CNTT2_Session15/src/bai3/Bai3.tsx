import { Component } from "react";

type StateType = {
  birthday: string;
  submitted: string;
};

export default class Bai3 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      birthday: "",
      submitted: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: this.state.birthday });
  };

  render() {
    return (
      <div>
        {/* Hiển thị kết quả sau khi submit */}
        {this.state.submitted && (
          <h3>Ngày sinh: {this.state.submitted}</h3>
        )}

        <form onSubmit={this.handleSubmit}>
          <label>
            Ngày sinh:{" "}
            <input
              type="date"
              value={this.state.birthday}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
