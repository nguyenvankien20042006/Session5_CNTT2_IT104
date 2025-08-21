import { Component } from "react";
import Children_Comp1 from "./Children_Comp1";

class Parent_Comp1 extends Component {
  state = {
    product: {
      id: 1,
      name: "Bưởi ba roi",
      price: "12.000 đ",
      quantity: 6
    }
  };

  render() {
    return (
      <div>
        {/* Truyền product xuống con qua props */}
        <Children_Comp1 product={this.state.product} />
      </div>
    );
  }
}

export default Parent_Comp1;
