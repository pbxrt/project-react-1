import AV from 'leancloud-storage'

var APP_ID = 'virPGES2U55XPaxq34P4lClm-gzGzoHsz';
var APP_KEY = 'vBD4vnwzobFq2JMF9g2Nd61q';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV

export function signUp(username,password,successFn,errorFn){
	//新建 AVUser 对象实例
	var user = new AV.User()
	//设置用户名
	user.setUsername(username)
	//设置密码
	user.setPassword(password)
	//设置邮箱
	user.signUp().then(function(loginedUser){
		console.log(loginedUser)
		let user = getUserFromAVUser(loginedUser)
		console.log(user)
		successFn.call(null,user)
	},function(error){
		errorFn.call(null,error)
	})

	return undefined
}

function getUserFromAVUser(AVUser){
	return {
		id: AVUser.id,
		...AVUser.attributes
	}
}