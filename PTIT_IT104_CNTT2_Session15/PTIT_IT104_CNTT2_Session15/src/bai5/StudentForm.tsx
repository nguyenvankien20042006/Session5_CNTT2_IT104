import { Component } from "react";
import "./StudentForm.css";

export default class StudentForm extends Component {
  render() {
    return (
      <form className="student-form">
        <input type="text" placeholder="Mã sinh viên" />
        <input type="text" placeholder="Tên sinh viên" />
        <input type="text" placeholder="Lớp" />
        <select>
          <option>Đang học</option>
          <option>Bảo lưu</option>
          <option>Đã tốt nghiệp</option>
        </select>
        <button type="submit">Thêm</button>
      </form>
    );
  }
}
