// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'


require('./config/init.js')
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && store.state.type) {
		if (store.state.type) {
			next()
		} else {
			next({
				path: '/login',
				query: {redirect: to.fullPath}
			})
		}
	} else {
		next()
	}
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
