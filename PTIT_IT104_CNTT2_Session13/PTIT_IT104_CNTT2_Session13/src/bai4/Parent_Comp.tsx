import { Component } from "react";
import Children_Comp from "./Children_Comp";

class Parent_Comp extends Component {

  state = {
    name: "Nguyễn Văn Nam"
  };

  render() {
    return (
      <div>
        <p>
          <strong>Họ và tên bên component cha:</strong> {this.state.name}
        </p>

        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}

export default Parent_Comp;
