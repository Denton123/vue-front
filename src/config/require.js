import Vue from 'vue'
import iview from 'iview'
import * as iviewComponent from './iview.js'
import 'iview/dist/styles/iview.css'
Vue.use('iview')

Object.keys(iviewComponent).forEach(component => {
	Vue.component(iviewComponent[component].name, iviewComponent[component])
})