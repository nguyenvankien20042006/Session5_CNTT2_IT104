import {useState, useEffect} from 'react'

export default function PageTitle() {
    const [title, setTitle]= useState<string>("")
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    useEffect(() => {
        document.title = title ? title : "Trang chủ"
    }, [title])
  return (
    <div>
      <h2>Chào mừng bạn đến với trang của chúng tôi</h2>
      <input type="text" placeholder='Nhập tên của bạn' value={title} onChange={handleChangeTitle}/>
     
     
    </div>
  )
}
