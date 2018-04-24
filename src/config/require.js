import Vue from 'vue'
import iview from 'iview'
import element from 'element-ui'
import func from '../utils/util'
import api from '../utils/api'
import * as iviewComponent from './iview.js'
import * as elementComponent from './element-ui.js'
// import moment from 'moment'

Vue.use(require('vue-moment'))
// Vue.use(moment)

import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css';
import '../../static/sass/common.sass'
Vue.use(func)

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

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