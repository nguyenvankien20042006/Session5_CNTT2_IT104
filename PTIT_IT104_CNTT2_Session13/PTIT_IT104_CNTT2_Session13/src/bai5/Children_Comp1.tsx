import { Component } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface ChildrenProps {
  product: Product;
}

class Children_Comp1 extends Component<ChildrenProps> {
  render() {
    const { id, name, price, quantity } = this.props.product;

    return (
      <div style={{ lineHeight: "1.8" }}>
        <h2>Dữ liệu trong component con</h2>
        <p>Id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}

export default Children_Comp1;
