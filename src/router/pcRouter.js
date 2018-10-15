// import home from '@/pages/home/home'
// const home = resolve => {
//     require.ensure(['@/pages/home/home'], () => {
//         resolve(require('@/pages/home/home'))
//     }, 'home')
// }
const home = () => import('@/pages/home/home')
import login from '@/views/login'
import mine from '@/pages/mine/mine'
import edit from '@/pages/mine/edit'
import child from '@/pages/mine/mine-child'
import questionDetail from '@/pages/detail/questionDetail'
import index from '@/pages/index/index'
import one from '@/pages/one/one'
import music from '@/pages/music/music'
import instrument from '@/pages/music/instrument'
import musicProductDetail from '@/pages/music/productDetail'

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
                component: instrument
            },
            {
                path:'/music/:model/:id/:id',
                component: musicProductDetail,
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