import { useState } from 'react';

export default function ShowNameComponent() {
    const [name, setName] = useState('Nguyễn văn A');

    return (
        <div>
            <div>
                <h1>Thông tin người dùng</h1>

                <p>
                    <span>Họ và tên:</span> {name}
                </p>

                <div>
                    <button onClick={() => setName('Nguyễn Văn B')}>
                        Thay tên mẫu
                    </button>
                    <button onClick={() => setName('Nguyễn văn A')}>
                        Đặt lại tên
                    </button>
                </div>
            </div>
        </div>
    );
}
