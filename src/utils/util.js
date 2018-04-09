// 注册全局通用方法

import Vue from 'vue'
import axios from 'axios'

export default {
	install (Vue, options) {

		// 获取后台POST方法
		Vue.prototype.ajaxPost = (api, post, cb) => {
			axios.post(api, post)
			.then(cb)
			.catch(err => {
				console.log(err);
			})
		}

		// 获取后台get方法
		Vue.prototype.ajaxGet = (api, cb) => {
			axios.get(api)
			.then(cb)
			.catch(err => {
				console.log(err);
			})
		}
		// 获取后台get方法
		Vue.prototype.api = () => {
			const users = {
				users: host + '/user/users',
				login: host + '/user/login',
				register: host + '/user/register',
			}
			const auth = {
				login: auth + '/auth/login'
			}
			return 
		}
	}
}
