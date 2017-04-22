import React, { Component } from 'react';

import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css'
import './reset.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: "",
      todoList: [
        {id: 1, title: "第一个代办"},
        {id: 2, title: "第二个代办"}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
        <li>
          <TodoItem todo={item} />
        </li>
      )
    })

    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
  addTodo(){
    console.log('我的添加一个todo了啊')
  }
}

export default App;
