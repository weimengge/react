import React, { Component } from 'react'
import store from './flux/store'
import action from './flux/action'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getList()
    }
    this.getList = this.getList.bind(this)
  }
  add() {
    // 触发action
    action.addItem("items")
  }
  componentDidMount() {
    // 打开监听
    store.addListener(this.getList)
  }
  getList() {
    console.log('监听器的回调函数')
    const list = store.getList()
    this.setState({
      list
    })
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
        <button onClick={this.add.bind(this)}>添加items</button>
      </div>
    )
  }
}
