import {useEffect} from 'react'

export default function Wellcome() {
    useEffect(() => {console.log("Component đã được render lần đầu!")}, []);
    
  return (
    <div>
      <h1>Chào mừng bạn đến với ứng dụng của chúng tôi</h1>
    </div>
  )
}
