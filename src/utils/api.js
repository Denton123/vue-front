let host = 'api'
let auth = 'auth'
global.auth = {
	login: auth + '/auth/login'
}
global.users = {
	users: host + '/user/users',
	findUser: host + '/user/findUser',
	login: host + '/user/login',
	register: host + '/user/register',
	logout: host + '/user/logout',
	update: host + '/user/update',
}
global.question = {
	list: host + '/question/list',
	showById: host + '/question/showById',
	showByUser: host + '/question/showByUser',
	updateById: host + '/question/updateById',
	store: host + '/question/store',
}
global.article = { 
	list: host + '/article/list',
}

global.idea = { 
	store: host + '/idea/store',
	index: host + '/idea/index',
	uploadImg: host + '/idea/uploadImg',
}

global.music = { 
	store: host + '/music/store',
	index: host + '/music/index',
	showByUser: host + '/music/showByUser',
	uploadImg: host + '/music/uploadImg',
}
global.id= localStorage.getItem('user')
