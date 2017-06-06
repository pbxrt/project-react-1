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
        <section className="row"><i className="icon iconfont icon-background"></i> 更换背景</section>
        <section className="row" onClick={this.onShowComplete.bind(this)}><i className="icon iconfont icon-todolist"></i> 已完成</section>
        <section className="row" onClick={this.onShowDoing.bind(this)}><i className="icon iconfont icon-2"></i> 未完成</section>
        <section className="row" onClick={this.onShowAllTodos.bind(this)}><i className="icon iconfont icon-menu1"></i> 项目列表</section>
      </section>
    )
  }
  onShowComplete(){
    this.props.onShowComplete()
  }
  onShowDoing(){
    this.props.onShowDoing()
  }
  onShowAllTodos(){
    this.props.onShowAllTodos()
  }

}