import React from 'react';

export default function(props) {
  return (
      <form className="signIn" onSubmit={props.onSubmit.bind(this)}>
        <div className="row">
          <label>用户名</label>
          <input type="text" value={props.formData.username}
            placeholder="Username"
            onChange={props.onChange.bind(null,"username")}  />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={props.formData.password}
            placeholder="Password"
            onChange={props.onChange.bind(null,"password")}  />
        </div>
        <div className="row actions">
          <button type="submit">登录</button>
        </div>
        <div className="row actions">
         <a href="#" onClick={props.showForgotPassword.bind(null)}>忘记密码？</a>
        </div>
      </form>
    )
}