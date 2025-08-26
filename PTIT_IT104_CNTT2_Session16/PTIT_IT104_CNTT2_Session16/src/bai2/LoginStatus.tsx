import { Component } from "react";
import "./LoginStatus.css";

export default class LoginStatus extends Component {
  state = {
    isLoggedIn: false,
  };

  toggleLogin = () => {
    this.setState((prevState: { isLoggedIn: boolean }) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <p className="message"> Xin chào, User!</p>
            <button className="btn" onClick={this.toggleLogin}>
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <p className="message"> Vui lòng đăng nhập để tiếp tục.</p>
            <button className="btn" onClick={this.toggleLogin}>
              Đăng nhập
            </button>
          </>
        )}
      </div>
    );
  }
}
