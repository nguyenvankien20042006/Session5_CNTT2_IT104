import { Component } from "react";

class Bai5 extends Component {
  formatName(user: { firstName: string; lastName: string }) {
    return `${user.firstName} ${user.lastName}`;
  }

  render() {
    const user = {
      firstName: "Nguyễn Văn",
      lastName: "Nam",
    };

    return <div>Họ và tên: {this.formatName(user)}</div>;
  }
}

export default Bai5;
