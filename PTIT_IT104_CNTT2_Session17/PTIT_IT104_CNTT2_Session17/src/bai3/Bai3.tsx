import { useState } from 'react';

export default function ChangeColor() {
    const [color, setColor] = useState('black');

    const handleChangeColor = () => {
        setColor(color === 'black' ? 'red' : 'black');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white shadow-md rounded-2xl p-6 text-center">
                <h1
                    className="text-xl font-semibold mb-4"
                    style={{ color: color }}
                >
                    Tiêu đề văn bản
                </h1>
                <button
                    onClick={handleChangeColor}
                    className="px-4 py-2 border rounded-lg shadow-sm hover:shadow-md"
                >
                    Thay đổi màu
                </button>
            </div>
        </div>
    );
}
