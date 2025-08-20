import { Component } from "react";

export default class Bai3 extends Component {
  
  name: string = "Nguyễn Văn A";
  gender: string = "Nam";
  dob: string = "06/03/2024";
  email: string = "nva@gmail.com";
  address: string = "Thanh Xuân, Hà Nội";

  render() {
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <ul>
          <li>
            Họ và tên: <b>{this.name}</b>
          </li>
          <li>
            Giới tính: <b>{this.gender}</b>
          </li>
          <li>
            Ngày sinh: <b>{this.dob}</b>
          </li>
          <li>
            Email: <b>{this.email}</b>
          </li>
          <li>
            Địa chỉ: <b>{this.address}</b>
          </li>
        </ul>
      </div>
    );
  }
}
