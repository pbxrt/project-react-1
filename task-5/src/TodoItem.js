import React, {Component} from 'react';
import './font/iconfont.css'
import './TodoItem.css'
export default class TodoItem extends Component {
	render(){
		return (
			<div className="TodoItem">
				<input type="checkbox"  checked={this.props.todo.status === 'completed'}
				onChange={this.toggle.bind(this)} /> 
				<label contentEditable onInput={this.editItem.bind(this)}
					onBlur={this.onSubmit.bind(this,'blur')} onKeyPress={this.onSubmit.bind(this,'keypress')} >
					{this.props.todo.title}					
				</label>
				<button className="icon iconfont icon-ic_delete_sweep_24px" onClick={this.delete.bind(this)} ></button>
				<hr/>
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
		this.props.onEdit(e,this.props.todo)
	}
	onSubmit(type,e){
		if(type === 'keypress'){
			if(e.key === 'Enter'){
				e.preventDefault()//阻止换行
				this.props.onSave()
			}
		}else {
			this.props.onSave()
		}
		
	}
}