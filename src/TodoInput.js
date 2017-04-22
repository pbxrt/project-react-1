import React ,{Component} from 'react';
import './TodoInput.css'
export default class TodoInput extends Component {
	render(){
		return <input type="text" defaultValue={this.props.content}
			className="TodoInput"
			onKeyPress={this.submit.bind(this)} />
	}
	submit(e){
		if(e.key === 'Enter') {
			console.log('用户按回车了');
			this.props.onSubmit.call()
		}
	}
}