// 注册全局通用方法

import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
moment.lang('zh-cn')

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
		},
		// moment
		Vue.prototype.momentchange = (data) => {
			return moment(data)
		}
	}
}
