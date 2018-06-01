import home from '@/pages/home/home'
import login from '@/views/login'
import mine from '@/pages/mine/mine'
import edit from '@/pages/mine/edit'
import child from '@/pages/mine/mine-child'
import questionDetail from '@/pages/detail/questionDetail'
import index from '@/pages/index/index'
import one from '@/pages/one/one'
import music from '@/pages/music/music'
import musicDetail from '@/pages/music/detail'

let routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/index',
                component: index,
            },
            {
                path: '/mine',
                component: mine,
                children: [
                    {
                        path: 'edit/edit',
                        component: edit,
                    },
                    {
                        path: 'model/:model',
                        component: child,
                    },
                ]
            },
            {
                path: '/one',
                component: one,
            },
            {
                path: '/music',
                component: music,
            },
            {
                path: '/music/:model/:id',
                component: musicDetail
            },
            {
                path: '/:model/:id',
                component: questionDetail,
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
  ]

export default routes