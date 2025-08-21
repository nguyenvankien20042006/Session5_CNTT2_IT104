import { Component } from 'react'
import Exercises01 from './bai1/Exercises01'
import Exercise02 from './bai2/Exercises02'
import Exercises03 from './bai3/Exercises03'
import Parent_Comp from './bai4/Parent_Comp'
import Parent_Comp1 from './bai5/Parent_Comp1'
import ListPost from './bai6/ListPost'
import Bai7 from './bai7/Bai7'


export default class App extends Component {
  render() {
    return (
      <div>
        <Exercises01/>
        <Exercise02/>
        <Exercises03/>
        <div style={{ padding: "20px" }}>
          <h1>React Props & State Example</h1>
          <Parent_Comp />
        </div>
        <div style={{ padding: "20px" }}>
          <Parent_Comp1/>
        </div>
        <div style={{ padding: "20px" }}>
          <ListPost/>
        </div>
        <Bai7/>
      </div>
    )
  }
}
