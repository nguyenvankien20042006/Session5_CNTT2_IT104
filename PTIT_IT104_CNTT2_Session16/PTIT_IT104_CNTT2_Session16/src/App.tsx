import { Component } from 'react'
import SubjectList from './bai1/SubjectList'
import LoginStatus from './bai2/LoginStatus'
import ButtonDemo from './bai3/ButtonDemo'
import ClickCounter from './bai4/ClickCounter'
import UserForm from './bai5/UserForm'
import ThemeSwitcher from './bai6/ThemeSwitcher'
import Main from './bai7/shoppingcart/Main'

export default class App extends Component {
  render() {
    return (
      <div>
        <SubjectList />
        <LoginStatus />
        <ButtonDemo />
        <ClickCounter />
        <UserForm />
        <ThemeSwitcher />
        <Main />
      </div>
    )
  }
}
