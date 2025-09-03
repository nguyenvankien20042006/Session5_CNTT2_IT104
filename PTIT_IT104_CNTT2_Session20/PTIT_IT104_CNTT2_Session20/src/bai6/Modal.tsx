import {useState, useEffect, useRef} from 'react'

export default function Modal() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if(isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen])

  return (
    <div>
      <h2>Ứng dụng React với Modal và Focus Input</h2>
        <button onClick={() => setIsOpen(true)}>Mở Modal</button>
        {isOpen && (<div>
            <h2>Đăng nhập</h2>
            <input ref={inputRef} type="text" placeholder='Nhập tên đăng nhập'/>
            <button onClick={() => setIsOpen(false)}>Đóng</button>
        </div>)}
    </div>
  )
}
