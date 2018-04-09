import axios from 'axios'
export default {
	// 获取后台get方法
	ajaxGet(api, cb) {
		axios.get(api)
			.then(cb)
			.catch(err => {
				console.log(err);
			})
	},
	// 获取后台POST方法
	ajaxPost(api, post, cb) {
		axios.post(api, post)
			.then(cb)
			.catch(err => {
				console.log(err);
			})
	}
}