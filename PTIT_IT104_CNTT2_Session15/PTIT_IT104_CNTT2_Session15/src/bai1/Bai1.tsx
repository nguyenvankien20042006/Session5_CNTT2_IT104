import { Component } from "react";

type StateType = {
  email: string;
};

export default class Bai1 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    alert("Bạn đã nhập: " + this.state.email);
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label><br />
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
