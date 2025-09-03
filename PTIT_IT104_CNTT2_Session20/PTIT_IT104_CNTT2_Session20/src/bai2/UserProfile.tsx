import {useState, ChangeEvent, FormEvent} from 'react'

export default function UserProfile() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [submitted, setSubmitted] = useState<{name: string; email: string} | null>(null)
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted({name, email})
    }
  return (
    <div>
      <h2>Thông tin người dùng</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nhập tên" value={name} onChange={handleNameChange}/>
            <input type="email" placeholder="Nhập email" value={email} onChange={handleEmailChange}/>
            <button type="submit">Gửi</button>
        </form>
        {submitted && (
            <div>
                <p><strong>Tên:</strong> {submitted.name}</p>
                <p><strong>Email:</strong> {submitted.email}</p>
            </div>
        )}
    </div>
  )
}
