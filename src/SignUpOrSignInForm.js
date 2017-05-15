import React, {Component} from 'react';
import SignUpForm from './signupForm';
import SignInForm from './signinForm';

export default class SignUpOrSignIn extends Component {
  render(){
    return (
			<div className="forgotPassword">
				<h3>
					重置密码
				</h3>
				<div className="panes">
					<form className="forgotPassword" onSubmit={this.props.onResetPassword.bind(null)}>
						<div className="row">
							<label>邮箱</label>
							<input type="text" value={this.props.formData.email}
								placeholder="Email"
								onChange={this.props.onChange.bind(null, 'email')} />
						</div>
						<div className="row actions">
							<button type="submit">发送重置邮件</button>
						</div>
						<div className="row actions">
							<a href="#" onClick={this.props.onReturnToSignIn.bind(null)}>返回登录</a>
						</div>
					</form>
				</div>
			</div>
    )
  }
}		
    
    
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
					{this.state.selected === 'signIn' ?
						<SignInForm formData={this.state.formData}
							onSubmit={this.signIn.bind(this)}
							onChange={this.changeFormData.bind(this)}
							showForgotPassword={this.showForgotPassword.bind(this)} />
						 : null }
				</div>
			</div>
		)