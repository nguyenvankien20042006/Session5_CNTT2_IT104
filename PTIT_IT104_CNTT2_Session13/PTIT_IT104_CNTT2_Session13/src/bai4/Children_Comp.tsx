import { Component } from "react";

interface ChildrenProps {
  name: string;
}

class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div>
        <p>
          <strong>Họ và tên bên component con:</strong> {this.props.name}
        </p>
      </div>
    );
  }
}

export default Children_Comp;
