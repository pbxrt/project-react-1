import React ,{ Component } from 'react';
import './UserDialog.css';
import {signUp, signIn, jsonDeepCopy, sendPasswordResetEmail} from './leanCloud';
import SignUpForm from './signupForm';

export default class UserDialog extends Component{
	constructor(props){
		super(props)
		this.state = {
				selected: 'signUp',
				selectedTab: 'signUpOrSignIn',
				formData: {
					email: '',
					username: '',
					password: ''
				}
		}
	}
	switch(e){
		this.setState({
			selected: e.target.value
		})
	}
	signUp(e){
		e.preventDefault()
		let {email,username,password} = this.state.formData
		let success = (user)=>{	
			this.props.onSignUp.call(null,user)
		}
		let error = (error)=>{
			console.error(error)
		}
		signUp(email,username,password,success,error)
	}

	signIn(e){
		e.preventDefault()
		let {username,password} = this.state.formData
		let success = (user)=>{
			this.props.onSignIn.call(null,user)
		}
		let error = (error)=>{
			switch(error.code){
				case 210:
					alert('用户名与密码不匹配')
					break
				case 211:
					alert('未找到该用户')
					break
				default:
					alert(error)
					break
			}
		}
		signIn(username,password,success,error)
	}
	showForgotPassword(){
		let stateCopy = jsonDeepCopy.call(this);
		stateCopy.selectedTab = 'forgotPassword';
		this.setState(stateCopy);
	}
	resetPassword(e){
		e.preventDefault();
		let successFn = () => {
			alert('重置密码已发送成功，请前往邮箱验证');
		}
		let errorFn = () => {
			alert('邮件发送失败，请重新发送重置密码邮件')
		}
		sendPasswordResetEmail(this.state.formData.email,successFn,errorFn);
	}
	changeFormData(key,e){
		let stateCopy = jsonDeepCopy.call(this)
		stateCopy.formData[key] = e.target.value
		this.setState(stateCopy)
	}
	returnToSignIn(){
		let stateCopy = jsonDeepCopy.call(this);
		stateCopy.selectedTab = 'signUpOrSignIn';
		this.setState(stateCopy);
	}
	render(){
		let signInForm = (
			<form className="signIn" onSubmit={this.signIn.bind(this)} >{/*登录*/}
				<div className="row">
					<label>用户名</label>
					<input type="text" value={this.state.formData.username}
						placeholder="Username"
						onChange={this.changeFormData.bind(this,"username")} />
				</div>
				<div className="row">
					<label>密码</label>
					<input type="password" value={this.state.formData.password}
						placeholder="Password"
						onChange={this.changeFormData.bind(this,"password")} />
				</div>
				<div className="row actions">
					<button type="submit">登录</button>
				</div>
				<div className="row actions">
					<a href="#" onClick={this.showForgotPassword.bind(this)}>忘记密码了？</a>
				</div>
			</form>
		)
		let signUpOrSignIn = (
			<div className="signInOrSignUp">
				<nav>
					<label>
						<input type="radio" value="signUp" 
							checked={this.state.selected === 'signUp'}
							onChange={this.switch.bind(this)} />
						注册
					</label>
					<label>
						<input type="radio" value="signIn" 
							checked={this.state.selected === 'signIn'}
							onChange={this.switch.bind(this)} /> 
						登录
					</label>
				</nav>
				<div className="panes">
					{this.state.selected === 'signUp' ?
					 <SignUpForm formData={this.state.formData}
					 	onSubmit={this.signUp.bind(this)}
						onChange={this.changeFormData.bind(this)} /> 
						 : null}
					{this.state.selected === 'signIn' ? signInForm : null}
				</div>
			</div>
		)
		let forgotPassword = (
			<div className="forgotPassword">
				<h3>
					重置密码
				</h3>
				<div className="panes">
					<form className="forgotPassword" onSubmit={this.resetPassword.bind(this)}>
						<div className="row">
							<label>邮箱</label>
							<input type="text" value={this.state.formData.email}
								placeholder="Email"
								onChange={this.changeFormData.bind(this, 'email')} />
						</div>
						<div className="row actions">
							<button type="submit">发送重置邮件</button>
						</div>
						<div className="row actions">
							<a href="#" onClick={this.returnToSignIn.bind(this)}>返回登录</a>
						</div>
					</form>
				</div>
			</div>
		)
		return(
		<div className="UserDialog-Wrapper">
			<div className="UserDialog">
				{this.state.selectedTab === 'signUpOrSignIn' ? signUpOrSignIn : forgotPassword}
			</div>
		</div>
		)

	}
}