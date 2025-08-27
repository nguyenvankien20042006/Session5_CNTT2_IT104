import { useState, ChangeEvent } from 'react';

export default function CountText() {
    const [text, setText] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white shadow-md rounded-2xl p-6">
                <textarea
                    placeholder="Nhập nội dung"
                    value={text}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                    rows={4}
                />
                <p className="text-base">Số ký tự: {text.length}</p>
            </div>
        </div>
    );
}
