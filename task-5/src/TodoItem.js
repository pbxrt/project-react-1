import React, {Component} from 'react';
import './font/iconfont.css'
import './TodoItem.css'
export default class TodoItem extends Component {
	render(){
		return (
			<div className="TodoItem">
				<input type="checkbox"  checked={this.props.todo.status === 'completed'}
				onChange={this.toggle.bind(this)} /> 
				<label onInput={this.editItem.bind(this)} contentEditable>
					{this.props.todo.title}
					<hr/>
				</label>
				<button className="icon iconfont icon-ic_delete_sweep_24px" onClick={this.delete.bind(this)} ></button>
			</div>
		)
	}
	toggle(e){
		this.props.onToggle(e,this.props.todo)
	}
	delete(e){
		this.props.onDelete(e,this.props.todo)
	}
	editItem(e){
		console.log(e.target.innerText)
	}
}