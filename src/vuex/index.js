import state  from './state.js'
import getters  from './getters.js'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
	state,
	getters
})
export default store