import { useState, ChangeEvent } from "react"

export default function InputLengthChecker() {
    const [value, setValue] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
  return (
    <div>
      <h1>Kiểm tra độ dài chuỗi nhập vào</h1>
      <input type="text" placeholder="Nhập vào đây" value={value} onChange={handleChange}/>
        {value.length > 5 && (<div>Chuỗi nhập dài hơn 5 ký tự</div>)}
    </div>
  )
}
