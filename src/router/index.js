import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todo from '@/components/Todo'
import AV from '../vuex/leancloud'


Vue.use(Router)
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Home,
        alias: '/',
        beforeEnter: (to, from, next) => {
            var user = AV.User.current()
            if (user) {
                next('/todo')
            }
            next()
        }
    }, {
        path: '/todo',
        name: 'Todo',
        component: Todo,
        beforeEnter: (to, from, next) => {
            var user = AV.User.current()
            if (!user) {
                next('/login')
            }
            next()
        }
    }
]

const router = new Router({
    routes,
})

router.beforeEach((to, from, next) => {
    var user = AV.User.current()
    next()
    if (!user) {
        next('/login')
    }
    if (!to.name) next('/Login')
})

export default router 