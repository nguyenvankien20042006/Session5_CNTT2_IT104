import { useState } from 'react';

export default function Toggle() {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white shadow-md rounded-2xl p-6 text-center">
                <button
                    onClick={handleToggle}
                    className="px-4 py-2 border rounded-lg shadow-sm hover:shadow-md mb-4"
                >
                    {isVisible ? 'Ẩn' : 'Hiện'}
                </button>

                {isVisible && (
                    <h1 className="text-xl font-semibold">Tiêu đề văn bản</h1>
                )}
            </div>
        </div>
    );
}
