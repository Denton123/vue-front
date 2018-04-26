import common from './common/modules.js'

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		common
	}
})
export default store