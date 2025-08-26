import { Component } from "react";
import "./SubjectList.css";

export default class SubjectList extends Component {
  render() {
    const subjects = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];

    return (
      <div className="subject-container">
        <h1 className="title"> Danh sách môn học</h1>
        <ul className="subject-list">
          {subjects.map((subject, index) => (
            <li key={index} className="subject-item">
              {subject}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
