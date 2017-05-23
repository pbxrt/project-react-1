import React from 'react'

export default function(props){
  return (
      <form className="signUp" onSubmit={props.onSubmit.bind(null)}>
        <div className="row">
          <label>邮箱</label>
          <input type="text" value={props.formData.email} 
            placeholder="Email"
            onChange={props.onChange.bind(null,'email')} />
        </div>
        <div className="row">
          <label>用户名</label>
          <input type="text" value={props.formData.username}
            placeholder="Username"
            onChange={props.onChange.bind(null, 'username')} />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={props.formData.password}
            placeholder="Password"
            onChange={props.onChange.bind(null, 'password')} />
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    )
}