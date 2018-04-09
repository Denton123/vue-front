import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import mine from '@/pages/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/mine',
          component: mine
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
