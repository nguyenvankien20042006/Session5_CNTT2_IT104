import { useState, ChangeEvent } from 'react';

export default function Select() {
    const [city, setCity] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <label htmlFor="city">Thành phố: </label>
            {city && <span>{city}</span>}
            <br />

            <select id="city" value={city} onChange={handleChange}>
                <option value="">-- Chọn thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>
        </div>
    );
}
