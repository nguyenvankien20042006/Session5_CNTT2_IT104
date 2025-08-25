import { Component } from "react";
import "./StudentTable.css";

interface Student {
  id: number;
  code: string;
  name: string;
  class: string;
  status: string;
}

interface Props {
  students: Student[];
}

export default class StudentTable extends Component<Props> {
  render() {
    const { students } = this.props;
    return (
      <table className="student-table">
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Lớp</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {students.map((sv) => (
            <tr key={sv.id}>
              <td>{sv.code}</td>
              <td>{sv.name}</td>
              <td>{sv.class}</td>
              <td>{sv.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
