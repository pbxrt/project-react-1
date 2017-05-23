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
        <header>
          <i className="icon iconfont icon-ic_menu_user_"></i>
          <span>{this.props.user}</span>
        </header>
      </section>
    )
  }
}