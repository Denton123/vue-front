let host = 'api'
let auth = 'auth'
global.auth = {
	login: auth + '/auth/login'
}
global.users = {
	users: host + '/user/users',
	login: host + '/user/login',
	register: host + '/user/register',
	logout: host + '/user/logout',
}
