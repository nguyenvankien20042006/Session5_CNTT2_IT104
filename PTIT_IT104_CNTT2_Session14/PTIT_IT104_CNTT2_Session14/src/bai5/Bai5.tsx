import { Component } from "react";
import "./Bai5.css";

type State = {
  productId: string;
  productName: string;
  price: string;
  quantity: string;
};

export default class Bai5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      productId: "",
      productName: "",
      price: "",
      quantity: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = {
      productId: this.state.productId,
      productName: this.state.productName,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };
    console.log("Sản phẩm đã nhập:", product);
    alert("Thêm sản phẩm thành công!");
  };

  render() {
    return (
      <div className="form-container">
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Mã sản phẩm</label>
          <input
            type="text"
            name="productId"
            value={this.state.productId}
            onChange={this.handleChange}
            placeholder="SP001"
          />

          <label>Tên sản phẩm</label>
          <input
            type="text"
            name="productName"
            value={this.state.productName}
            onChange={this.handleChange}
            placeholder="Cam da xanh"
          />

          <label>Giá</label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="20000"
          />

          <label>Số lượng</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            placeholder="10"
          />

          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
