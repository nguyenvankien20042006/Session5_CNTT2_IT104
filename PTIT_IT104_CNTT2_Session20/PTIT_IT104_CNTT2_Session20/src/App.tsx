import InputLengthChecker from "./bai1/InputLengthChecker";
import UserProfile from "./bai2/UserProfile";
import Timer from "./bai5/Timer";
import Modal from "./bai6/Modal";
import UserForm from "./bai8/UserForm";
import Counter from "./bai7/Counter";
import PageTitle from "./bai4/PageTitle";
import Wellcome from "./bai3/Wellcome";


export default function App() {
  return (
    <div>
      <InputLengthChecker />
      <UserProfile />
      <Wellcome />
     <PageTitle /> 
    <Timer />
    <Modal />
    <Counter />
    <UserForm />
    </div>
  )
}
