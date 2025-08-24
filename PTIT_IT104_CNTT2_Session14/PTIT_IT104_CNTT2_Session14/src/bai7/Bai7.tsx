import { Component, createRef } from "react";
import "./Bai7.css";

type State = {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
};

export default class Bai7 extends Component<{}, State> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      message: "",
    };
  }

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<
      State,
      keyof State
    >);
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, email, password, address } = this.state;

    if (!name || !email || !password) {
      this.setState({ message: "Vui lòng nhập đầy đủ thông tin bắt buộc!" });
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const exist = users.some((u: any) => u.email === email);
    if (exist) {
      this.setState({ message: "Email đã tồn tại!" });
      return;
    }

    const newUser = { name, email, password, address };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công!",
    });

    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }
  };

  render() {
    return (
      <div className="form-container">
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Tên sinh viên</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={this.nameInputRef}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <label>Địa chỉ</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />

          <button type="submit">Đăng ký</button>
        </form>

        {this.state.message && (
          <p className="message">{this.state.message}</p>
        )}
      </div>
    );
  }
}
