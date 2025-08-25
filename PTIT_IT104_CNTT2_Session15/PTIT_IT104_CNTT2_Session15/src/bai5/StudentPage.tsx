import { Component } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import "./StudentPage.css";

export default class StudentPage extends Component {
  state = {
    students: [
      { id: 1, code: "SV001", name: "Nguyễn Văn A", class: "IT01", status: "Đang học" },
      { id: 2, code: "SV002", name: "Trần Thị B", class: "IT02", status: "Bảo lưu" },
      { id: 3, code: "SV003", name: "Lê Văn C", class: "IT01", status: "Đã tốt nghiệp" },
    ],
  };

  render() {
    return (
      <div className="student-page">
        <h2>Quản lý Sinh viên</h2>
        <StudentForm />
        <StudentTable students={this.state.students} />
      </div>
    );
  }
}
