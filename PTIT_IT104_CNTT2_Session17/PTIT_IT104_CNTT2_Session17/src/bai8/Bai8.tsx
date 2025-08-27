import { useState, ChangeEvent } from 'react';

export default function Checkbox() {
    const [hobbies, setHobbies] = useState<string[]>([]);

    const options: string[] = ['Đi chơi', 'Code', 'Bơi lội', 'Nhảy dây'];

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const checked = event.target.checked;

        if (checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value));
        }
    };

    return (
        <div>
            <p>Sở thích: {JSON.stringify(hobbies)}</p>
            {options.map((option) => (
                <div key={option}>
                    <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={hobbies.includes(option)}
                        onChange={handleChange}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}
