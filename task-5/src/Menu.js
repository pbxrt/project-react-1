import React, {Component} from 'react'
import './Menu.css'
import './font/iconfont.css'

export default class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: ''
    }
  }
  render(){
    return (
      <section className="Menu">
        <header className="row">
          <i className="icon iconfont icon-ic_menu_user_"></i>
          <span>{this.props.user}</span>
          <div className="user-info">
            <div className="row">设置</div>
            <div className="row">登出</div>
          </div>
        </header>
      </section>
    )
  }
}