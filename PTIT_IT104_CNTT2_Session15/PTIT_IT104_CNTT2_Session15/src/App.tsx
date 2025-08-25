import { Component } from 'react'
import Bai1 from './bai1/Bai1'
import Bai2 from './bai2/Bai2'
import Bai3 from './bai3/Bai3'
import Bai4 from './bai4/Bai4'
import StudentPage from './bai5/StudentPage'
import ListPost from './bai6/ListPost'
import Clock from './bai7/Clock'
import Counter from './bai8/Counter'

export default class App extends Component {
  render() {
    return (
      <div>
        <Bai1/>
        <Bai2/>
        <Bai3/>
        <Bai4/>
        <StudentPage/>
        <ListPost/>
        <Clock/>
        <Counter/>
      </div>
    )
  }
}
