import Vue from 'vue'
import iview from 'iview'
import element from 'element-ui'
import func from '../utils/util'
import api from '../utils/api'
import * as iviewComponent from './iview.js'
import * as elementComponent from './element-ui.js'

import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(func)

Object.keys(elementComponent).forEach(function (component) {
	switch (component) {
	case 'Loading':
		Vue.use(elementComponent[component].directive)
		Vue.prototype.$loading = elementComponent[component].service
		break
	case 'MessageBox':
		Vue.prototype.$msgbox = elementComponent[component]
		Vue.prototype.$alert = elementComponent[component].alert
		Vue.prototype.$confirm = elementComponent[component].confirm
		Vue.prototype.$prompt = elementComponent[component].prompt
		break
	case 'Notification':
		Vue.prototype.$notify = elementComponent[component]
		break
	case 'Message':
		Vue.prototype.$message = elementComponent[component]
		break
	default:
		Vue.use(elementComponent[component])
		break
	}
})

Object.keys(iviewComponent).forEach(function (component) {
	Vue.component(iviewComponent[component].name, iviewComponent[component])
})