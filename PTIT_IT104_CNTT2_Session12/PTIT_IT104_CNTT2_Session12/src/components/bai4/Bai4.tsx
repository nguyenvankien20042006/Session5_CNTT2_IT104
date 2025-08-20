import { Component } from "react";

type Bai4Props = {
  color: string;
};

export default class Bai4 extends Component<Bai4Props> {
  render() {
    const { color } = this.props;

    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        {/* Ô vuông màu */}
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            margin: "auto",
          }}
        >
          Box
        </div>
        {/* Nhãn màu */}
        <div
          style={{
            marginTop: "10px",
            padding: "5px 10px",
            border: "1px solid gray",
            display: "inline-block",
            borderRadius: "4px",
          }}
        >
          {color}
        </div>
      </div>
    );
  }
}
