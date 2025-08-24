import { Component } from "react";
import "./Bai6.css";

export default class Bai6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      submittedGender: ""
    };
  }

  handleChange = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submittedGender: this.state.gender });
  };

  render() {
    return (
      <div className="container">
        <h2>Chọn giới tính</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={this.state.gender === "Nam"}
                onChange={this.handleChange}
              />
              Nam
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={this.state.gender === "Nữ"}
                onChange={this.handleChange}
              />
              Nữ
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={this.state.gender === "Khác"}
                onChange={this.handleChange}
              />
              Khác
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>

        {this.state.submittedGender && (
          <p className="result">
            Giới tính bạn chọn: <b>{this.state.submittedGender}</b>
          </p>
        )}
      </div>
    );
  }
}
