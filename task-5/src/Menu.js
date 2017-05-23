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
            <div className="row"><i className="icon iconfont icon-set"></i> 设置</div>
            <div onClick={this.props.onSignOut.bind(null)} className="row logout"><i className="icon iconfont icon-dengchu"></i> 登出</div>
          </div>
        </header>
      </section>
    )
  }
  
}