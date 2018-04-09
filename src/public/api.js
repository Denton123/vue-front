let host = 'api'
let auth = 'auth'
export default {
	// 配置后台接口
	users: {
		users: host + '/user/users',
	},
	auth: {
		login: auth + '/auth/login'
	}
}