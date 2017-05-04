import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css'
import './reset.css'
import UserDialog from './UserDialog'
import AV, {getCurrentUser, signOut, jsonDeepCopy} from './leanCloud'


// var Plearner = AV.Object.extend('Plearner')
// var plearner = new Plearner()
// plearner.set("todoList",[{id:1,title: "task1",status:null,deleted: false}])
// plearner.save().then(function(todo){
//   console.log(todo.id)
//   save("plearner",todo.id)
// },function(error){
//   console.error(error)
// })

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: getCurrentUser() || '',
      newTodo: "",
      todoList:[]
    }
  }
  render() {
     let todos = this.state.todoList
         .filter((item)=>!item.deleted)
         .map((item,index)=>{
      return (
        <li key={index} >
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
          onDelete={this.delete.bind(this)} />
        </li>
      )
    })

    return (
      <div className="App">
        <h1>{this.state.user||'我'}的代办
          {this.state.user ? <button onClick={this.signOut.bind(this)}>登出</button> : null }</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}
            
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)} />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
        {this.state.user ? 
          null : 
          <UserDialog onSignUp={this.onSignUpOrSignIn.bind(this,'signUp')}
          onSignIn={this.onSignUpOrSignIn.bind(this,'signIn')}
          />}
      </div>
    );
  }
  onSignUpOrSignIn(key,user){
    let stateCopy = jsonDeepCopy.call(this)
    //得到该用户对象的username属性
    stateCopy.user = user.get('username')
    if(key === 'signUp'){
      this.setState(stateCopy)
    }else if(key === 'signIn'){
      this.fetchData.call(this)
    }
  }
  signOut(){
    signOut()
    let stateCopy = jsonDeepCopy.call(this)
    stateCopy.user = ''
    stateCopy.todoList = []
    this.setState(stateCopy)
  }

  delete(event,todo){
    todo.deleted = true
    this.setState(this.state)
  }
  toggle(e,todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  addTodo(event){
    let newItem = {
      id: idMaker(),
      status:'',
      title: event.target.value,
      deleted: false
    }
    let stateCopy = jsonDeepCopy.call(this)
    stateCopy.newTodo = ''
    stateCopy.todoList.push(newItem)
    this.setState(stateCopy)
  }

}

  export default App;

  let id = 0

  function idMaker(){
    id += 1
    return id
  }
