import React from 'react';
import './TodoInput.css'

function changeTitle(props,e){
	props.onChange(e);
}
function submit(props,e){
	if(e.key === 'Enter') {
		if(e.target.value.trim() !== ''){
			props.onSubmit(e)
		}else {
			alert('以后会做一个toast')
		}
	}
}
export default function(props){
	return (
		<input type="text" placeholder="+ 输入新的待办事项，按Enter添加" 
			value={props.content}
		    className="TodoInput"
			onChange={changeTitle.bind(null,props)}
			onKeyPress={submit.bind(null,props)} />
	)
}