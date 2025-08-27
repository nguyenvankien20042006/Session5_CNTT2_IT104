import { useState } from 'react';

export default function ShowProductComponent() {
    const [product, setProduct] = useState({
        id: 1,
        name: 'Laptop Dell XPS',
        price: 25000000,
        quantity: 5,
    });

    const changeProductName = () => {
        setProduct({
            ...product,
            name: 'Laptop Asus ROG',
        });
    };

    return (
        <div>
            <div>
                <h1>Thông tin sản phẩm</h1>

                <p>
                    <span>Tên sản phẩm:</span> {product.name}
                </p>
                <p>
                    <span>Giá:</span> {product.price.toLocaleString()} VNĐ
                </p>
                <p>
                    <span>Số lượng:</span> {product.quantity}
                </p>

                <button onClick={changeProductName}>Đổi tên sản phẩm</button>
            </div>
        </div>
    );
}
