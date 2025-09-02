import React, { useMemo } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cartItems: CartItem[] = [
  { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
  { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
];

const ShoppingCart: React.FC = () => {
  const total: number = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map((item: CartItem) => (
          <li key={item.id}>
            {item.name} - Giá: {item.price.toLocaleString()}đ × {item.quantity} ={" "}
            {(item.price * item.quantity).toLocaleString()}đ
          </li>
        ))}
      </ul>
      <h3>Tổng đơn hàng: {total.toLocaleString()}đ</h3>
    </div>
  );
};

export default ShoppingCart;
